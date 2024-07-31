import QueryString from "qs";
import { Buffer } from "buffer";

const NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`;
const TOP_SONGS_ENDPOINT = `https://api.spotify.com/v1/me/top/tracks?time_range=short_term&limit=3`;
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;

const client_id = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
const client_secret = process.env.REACT_APP_SPOTIFY_CLIENT_SECRET;
const refresh_token = process.env.REACT_APP_SPOTIFY_REFRESH_TOKEN;

const getAccessToken = async () => {
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

export const getNowPlaying = async (
  client_id,
  client_secret,
  refresh_token
) => {
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

export const getTopSongs = async (
  client_id,
  client_secret,
  refresh_token
) => {
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

export default async function getNowPlayingItem(
  client_id,
  client_secret,
  refresh_token
) {
  const response = await getNowPlaying(client_id, client_secret, refresh_token);
  if (response.status === 204 || response.status > 400) {
    return false;
  }

  const song = await response.json();
  const albumImageUrl = song.item.album.images[0].url;
  const artist = song.item.artists.map((_artist) => _artist.name).join(", ");
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

export async function getTopSongsItem(
  client_id,
  client_secret,
  refresh_token
) {
  const response = await getTopSongs(client_id, client_secret, refresh_token);
  if (response.status > 400) {
    return false;
  }

  const topSongs = await response.json();
  const tracks = topSongs.items.map((track) => ({
    title: track.name,
    artist: track.artists.map((artist) => artist.name).join(", "),
    albumImageUrl: track.album.images[0].url,
    songUrl: track.external_urls.spotify,
  }));

  return tracks;
}

/*
https://accounts.spotify.com/en/authorize?client_id=b89db49257554e1c80ce22d47e52152d&redirect_uri=http:%2F%2Flocalhost:3000%2F&scope=user-read-currently-playing%20user-top-read&response_type=code

https://accounts.spotify.com/authorize?client_id=8e94bde7dd
b84a1f7a0e51bf3bc95be8&response_type=code&redirect_uri=http
%3A%2F%2Flocalhost:3000&scope=user-read-currently-playing%20
user-top-read

AQDLgc0qDhytrwwXb8vje2aJSyAiDwxMYf0lmav-LxSFuMtDFymQhidrXYsAjnEsWVQ5r_l53bH-ccLRHg03pDbVPVbxxfwQKv-oVsqIl9Fxb12nsBx8quRTk2OPmR1Ce8Gy0T4cbyZjDsdW37m9LtG-LQLAe8ywURabWG_0pDnr-TWy95x3lRj7BqHGnYZRnNRxHQBkRw

AQCL1DAOOrOjHbyHzCaPvLUS-FPH5CZuzlWE9lQK-j_zRia8Rt-hI0WhNo-TsII3JGs9wcsGXYXO-sr42ZI1oWOmZiVKZo26p-OrvdqyWKvv03YKXcR4iR10xrrFqhjReCzmI1eX7gO4ZBfhQNH2HdAyGYMB-Hqyyx3tJmKVaSEjLo4VmNYVzz5aAHtn8orJSpvvOeAeqAta-RJBk2fAP7SvemWkjA

curl -H "Authorization: Basic Yjg5ZGI0OTI1NzU1NGUxYzgwY2UyMmQ0N2U1MjE1MmQ6MDEwOTk0MTlhMmJhNDQ5OGFkZmUzMGQwMTFhOTgyMmQ=" -d grant_type=authorization_code -d code=AQCL1DAOOrOjHbyHzCaPvLUS-FPH5CZuzlWE9lQK-j_zRia8Rt-hI0WhNo-TsII3JGs9wcsGXYXO-sr42ZI1oWOmZiVKZo26p-OrvdqyWKvv03YKXcR4iR10xrrFqhjReCzmI1eX7gO4ZBfhQNH2HdAyGYMB-Hqyyx3tJmKVaSEjLo4VmNYVzz5aAHtn8orJSpvvOeAeqAta-RJBk2fAP7SvemWkjA -d redirect_uri=http:%2F%2Flocalhost:3000%2F https://accounts.spotify.com/api/token

REACT_APP_SPOTIFY_CLIENT_ID=b89db49257554e1c80ce22d47e52152d
REACT_APP_SPOTIFY_CLIENT_SECRET=01099419a2ba4498adfe30d011a9822d

{
  "access_token":"BQBjmGVzshFeF_zN2Zxb8NzYuOmwbQewottreA2VuIINqVo57p8yMJVQ4Va3Q9F7sXlheFBvUnDFpE22AiUj3dInnHKuL3j7F3anG4StyXPguSq5JNT9FiEG8v8Tg1d91EMZjVW0lPoNaZLQXMf9Ihav6Ox8QogEPJA9_zsCp2tSUPSvGxoT7aY9mf2dKiN3-sjq3QvIpoHctYw6",
  "token_type":"Bearer",
  "expires_in":3600,"refresh_token":"AQACVNeMqtInpxbCFESIjwN056iFEfblcQ6-3MJ73WyFUDydPdhFw_wFkvYctGEF-PwwQdk91j47TGlOHfOuNUO2d-x01IccW17wRoKJyzHt5lGETJ1znM8iAEeax_YTnJk",
  AQACj0f-xKwk0pOUPi1CJ7qHUJZjw1LQXCdeAWvHZnNkMy-KlzGpyheqURhDTD63UmK2E74cVxtygAyo71Bhk6wzeLJtGUCzu7h4rNHJb6x94FJExDNuVjsYZy5zB6xv_Dc
  "scope":"user-read-currently-playing"
}   
*/

