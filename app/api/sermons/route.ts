import { fetchSermons } from "@/lib/sermons"
import { NextResponse } from "next/server"

export const revalidate = 3600

export async function GET() {
  try {
    const episodes = await fetchSermons(8)
    return NextResponse.json({ episodes })
  } catch (error) {
    console.error("[sermons]", error)
    return NextResponse.json(
      { episodes: [], error: "Unable to load sermons right now." },
      { status: 500 }
    )
  }
}
