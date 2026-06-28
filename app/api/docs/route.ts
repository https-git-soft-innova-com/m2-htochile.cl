import { NextResponse } from "next/server"

const SHARE_URL =
  "https://softinnovacom-my.sharepoint.com/:f:/g/personal/carolina_arce_htochile_cl/IgCthsExq_ONTYryNaoWjgSXATYIm-08V_aMcmv40s0olYY?e=mPKKbA"

function encodeShareUrl(url: string) {
  const base64 = Buffer.from(url).toString("base64")
  return "u!" + base64.replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "")
}

export interface OneDriveItem {
  name: string
  downloadUrl: string
  size: number
  lastModified: string
  folder?: string
}

async function listFolder(encodedUrl: string, folderPath = ""): Promise<OneDriveItem[]> {
  const base = `https://api.onedrive.com/v1.0/shares/${encodedUrl}/root`
  const url = folderPath
    ? `${base}:/${folderPath}:/children`
    : `${base}/children`

  const res = await fetch(url, { next: { revalidate: 3600 } })
  if (!res.ok) return []

  const data = await res.json()
  const items: OneDriveItem[] = []

  for (const item of data.value ?? []) {
    if (item.folder) {
      const children = await listFolder(encodedUrl, folderPath ? `${folderPath}/${item.name}` : item.name)
      items.push(...children)
    } else if (item.name.toLowerCase().endsWith(".pdf")) {
      items.push({
        name: item.name.replace(/\.pdf$/i, ""),
        downloadUrl: item["@content.downloadUrl"] ?? "",
        size: item.size ?? 0,
        lastModified: item.lastModifiedDateTime ?? "",
        folder: folderPath || undefined,
      })
    }
  }
  return items
}

export async function GET() {
  try {
    const encoded = encodeShareUrl(SHARE_URL)
    const items = await listFolder(encoded)

    const docs = items.map((item) => {
      const folder = item.folder ?? ""
      const nameParts = item.name.split(" - ")
      const brand = nameParts.length > 1 ? nameParts[0].trim() : ""
      const title = nameParts.length > 1 ? nameParts.slice(1).join(" - ").trim() : item.name

      let type = "Ficha Técnica"
      const lower = item.name.toLowerCase()
      if (lower.includes("manual")) type = "Manual"
      else if (lower.includes("catálogo") || lower.includes("catalogo")) type = "Catálogo"
      else if (lower.includes("certificación") || lower.includes("certificacion") || lower.includes("cert")) type = "Certificación"

      return {
        title,
        brand,
        category: folder,
        type,
        downloadUrl: item.downloadUrl,
        lastModified: item.lastModified,
      }
    })

    return NextResponse.json(docs)
  } catch {
    return NextResponse.json([], { status: 500 })
  }
}
