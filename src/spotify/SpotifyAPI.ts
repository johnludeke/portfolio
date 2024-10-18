import QueryString from "qs";
import { Buffer } from "buffer";

const NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing?additional_types=track,episode`;
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
  let albumImageUrl = "";
  let artist = "";
  let isPlaying = false;
  let objUrl = "";
  let title = "";
  const response = await getNowPlaying();
  if (response.status === 204 || response.status > 400) {
    return {
      albumImageUrl,
      artist,
      isPlaying,
      objUrl,
      title,
    };
  }

  const obj = await response.json();

  const type = obj.currently_playing_type;

  if (type === "track") {
    albumImageUrl = obj.item.album.images[0].url;
    artist = obj.item.artists
      .map((artist: { name: string }) => artist.name)
      .join(", ");
    isPlaying = obj.is_playing || false;
    objUrl = obj.item.external_urls.spotify;
    title = obj.item.name;
  } else if (type === "episode") {
    albumImageUrl = obj.item.show.images[0].url;
    artist = obj.item.show.name;
    isPlaying = obj.is_playing || false;
    objUrl = obj.item.external_urls.spotify;
    title = obj.item.name;
  }

  return {
    albumImageUrl,
    artist,
    isPlaying,
    objUrl,
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
