import QueryString from "qs";
import { Buffer } from "buffer";

const NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`;
const TOP_SONGS_ENDPOINT = `https://api.spotify.com/v1/me/top/tracks?time_range=short_term&limit=3`;
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;

const client_id: string = process.env.REACT_APP_SPOTIFY_CLIENT_ID || "";
const client_secret: string = process.env.REACT_APP_SPOTIFY_CLIENT_SECRET || "";
const refresh_token: string = process.env.REACT_APP_SPOTIFY_REFRESH_TOKEN || "";

const getAccessToken = async (
  client_id: string,
  client_secret: string,
  refresh_token: string
) => {
  const basic = Buffer.from(`${client_id}:${client_secret}`).toString("base64");

  const response = await fetch(TOKEN_ENDPOINT, {
    method: "POST",
    headers: {
      Authorization: `Basic ${basic}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: QueryString.stringify({
      grant_type: "refresh_token",
      refresh_token,
    }),
  });

  return response.json();
};

export const getNowPlaying = async () => {
  const { access_token } = await getAccessToken(
    client_id,
    client_secret,
    refresh_token
  );

  return fetch(NOW_PLAYING_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
};

export const getTopSongs = async () => {
  const { access_token } = await getAccessToken(
    client_id,
    client_secret,
    refresh_token
  );

  return fetch(TOP_SONGS_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
};

export default async function getNowPlayingItem() {
  const response = await getNowPlaying();
  if (response.status === 204 || response.status > 400) {
    return false;
  }

  const song = await response.json();
  const albumImageUrl = song.item.album.images[0].url;
  const artist = song.item.artists
    .map((artist: { name: string }) => artist.name)
    .join(", ");
  const isPlaying = song.is_playing;
  const songUrl = song.item.external_urls.spotify;
  const title = song.item.name;

  return {
    albumImageUrl,
    artist,
    isPlaying,
    songUrl,
    title,
  };
}

export async function getTopSongsItem() {
  const response = await getTopSongs();
  if (response.status > 400) {
    return false;
  }

  const topSongs = await response.json();
  console.log(topSongs);
  const tracks = topSongs.items.map(
    (track: {
      name: string;
      artists: { name: string }[];
      album: { images: { url: string }[] };
      external_urls: { spotify: string };
    }) => ({
      title: track.name,
      artist: track.artists
        .map((artist: { name: string }) => artist.name)
        .join(", "),
      albumImageUrl: track.album.images[0].url,
      songUrl: track.external_urls.spotify,
    })
  );

  return tracks;
}
