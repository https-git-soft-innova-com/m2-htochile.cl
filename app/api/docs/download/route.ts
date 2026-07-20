import { NextResponse } from "next/server"

const API_BASE = "http://161.35.5.30"

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const key = searchParams.get("key")
  
  if (!key) {
    return NextResponse.json({ error: "Missing key" }, { status: 400 })
  }

  try {
    const res = await fetch(`${API_BASE}/api/docs/download?key=${encodeURIComponent(key)}`)
    const blob = await res.arrayBuffer()
    
    return new NextResponse(blob, {
      headers: {
        "Content-Type": res.headers.get("Content-Type") || "application/pdf",
        "Content-Disposition": res.headers.get("Content-Disposition") || `attachment; filename="document.pdf"`,
      },
    })
  } catch (e) {
    return NextResponse.json({ error: "Download failed" }, { status: 502 })
  }
}
