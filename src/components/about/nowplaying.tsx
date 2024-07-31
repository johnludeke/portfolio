import { useEffect, useState } from "react";
import getNowPlayingItem from "../../spotify/SpotifyAPI";

interface Song {
  albumImageUrl: string;
  artist: string;
  isPlaying: boolean;
  songUrl: string;
  title: string;
}

const NowPlaying = () => {
  const [loading, setLoading] = useState(true);
  const [result, setResult] = useState<Song | any>({});

  useEffect(() => {
    const client_id = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
    const client_secret = process.env.REACT_APP_SPOTIFY_CLIENT_SECRET;
    const refresh_token = process.env.REACT_APP_SPOTIFY_REFRESH_TOKEN;

    Promise.all([
      getNowPlayingItem(client_id, client_secret, refresh_token),
    ]).then((results) => {
      setResult(results[0]);
      setLoading(false);
    });
  });

  return (
    <div>
      {loading ? (
        <div>Loading</div>
      ) : (
        <div>
          <h1>artist: {result.artist}</h1>
          <h1>song: {result.title}</h1>
          <h1>link to song: {result.songUrl}</h1>
          <img src={result.albumImageUrl} alt="" />
          <h1>is it playing? {result.isPlaying}</h1>
        </div>
      )}
    </div>
  );
};

export default NowPlaying;
