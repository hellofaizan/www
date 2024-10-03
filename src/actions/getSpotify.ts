import fetch from "node-fetch";
const { getPreview } = require("spotify-url-info")(fetch);

export default async function getSpotifyMetadata(url: string) {
  try {
    const data = await getPreview(url);
    return {
      props: {
        title: data.title,
        preview_url: data.audio || null,
        cover_image: data.image,
        link: data.link,
        artist: data.artist,
      },
    };
  } catch (error) {
    console.error("Error fetching Spotify metadata:", error);
    return null;
  }
}
