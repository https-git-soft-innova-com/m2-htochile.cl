import { NextResponse } from "next/server"

const API_BASE = "http://161.35.5.30"  // HTTP directo al Droplet (server-side, no mixed content)

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const params = searchParams.toString()
  
  try {
    const res = await fetch(`${API_BASE}/api/docs${params ? `?${params}` : ""}`, {
      headers: { "Accept": "application/json" },
    })
    const data = await res.json()
    return NextResponse.json(data)
  } catch (e) {
    return NextResponse.json({ docs: [], total: 0, error: "API unavailable" }, { status: 502 })
  }
}
