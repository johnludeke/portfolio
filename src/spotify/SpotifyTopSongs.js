import { useState, useEffect } from 'react';
import { getTopSongsItem } from './SpotifyAPI';

const SpotifyTopSongs = (props) => {
    const [topSongs, setTopSongs] = useState([]);

    useEffect(() => {

        getTopSongsItem(props.client_id, props.client_secret, props.refresh_token).then((tracks) => {
            setTopSongs(tracks);
        });
    });

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
}

export default SpotifyTopSongs;