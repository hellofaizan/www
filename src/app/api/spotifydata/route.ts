import getSpotifyMetadata from "~/actions/getSpotify";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const url = decodeURIComponent(searchParams.get("url") || "");
  if (!url) {
    return NextResponse.json({ error: "No URL provided" }, { status: 400 });
  }

  const metadata = await getSpotifyMetadata(url as unknown as string);

  if (!metadata) {
    return NextResponse.json(
      { error: "Error fetching Spotify metadata" },
      { status: 500 },
    );
  }

  return NextResponse.json(metadata, { status: 200 });
}
