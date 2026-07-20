import { NextResponse } from "next/server"

const API_BASE = "http://161.35.5.30"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const res = await fetch(`${API_BASE}/api/leads`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    })
    const data = await res.json()
    return NextResponse.json(data)
  } catch (e) {
    return NextResponse.json({ error: "API unavailable" }, { status: 502 })
  }
}
