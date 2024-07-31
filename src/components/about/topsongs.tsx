import { useState, useEffect } from "react";
import { getTopSongsItem } from "../../spotify/SpotifyAPI";

interface Track {
  title: string;
  artist: string;
  albumImageUrl: string;
  songUrl: string;
}

const TopSongs = () => {
  const [topSongs, setTopSongs] = useState<Track[]>([]);

  useEffect(() => {
    const client_id = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
    const client_secret = process.env.REACT_APP_SPOTIFY_CLIENT_SECRET;
    const refresh_token = process.env.REACT_APP_SPOTIFY_REFRESH_TOKEN;

    getTopSongsItem(client_id, client_secret, refresh_token).then((tracks) => {
      setTopSongs(tracks);
    });
  }, []);

  return (
    <div>
      {topSongs.map((track) => (
        <div key={track.title}>
          <img src={track.albumImageUrl} alt={track.title} />
          <a href={track.songUrl}>{track.title}</a>
          <p>by {track.artist}</p>
        </div>
      ))}
    </div>
  );
};

export default TopSongs;
