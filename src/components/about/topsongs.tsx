import { useState, useEffect } from "react";
import { getTopSongsItem } from "../../spotify/SpotifyAPI";

interface Track {
  title: string;
  artist: string;
  albumImageUrl: string;
  songUrl: string;
}

const TopSongs = () => {
  const [loading, setLoading] = useState(true);
  const [topSongs, setTopSongs] = useState<Track[]>([]);

  useEffect(() => {
    getTopSongsItem().then((tracks) => {
      setTopSongs(tracks);
      setLoading(false);
    });
  }, []);

  return (
    <div className="text-cBlack dark:text-white">
      {loading ? (
        <div></div>
      ) : (
        <>
          <div className="flex flex-col space-y-4">
            {topSongs.map((track, index) => (
              <div className="flex flex-row items-center space-x-4">
                <div className="w-6 h-auto">
                  <h1 className="font-semibold">{index + 1}.</h1>
                </div>
                <div
                  className="h-16 flex flex-row p-[4px] border-[1px] border-cBlack dark:border-white rounded-[8px] w-60 sm:w-96 items-center"
                  key={track.title}
                >
                  <a
                    className="h-full w-auto rounded-l-[4px]"
                    href={track.songUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      className="h-full w-auto rounded-l-[4px]"
                      src={track.albumImageUrl}
                      alt={track.title}
                    />
                  </a>
                  <div className="flex flex-col pl-2 w-44 sm:w-80 text-sm sm:text-base">
                    <h1 className="font-semibold truncate">
                      <a
                        href={track.songUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {track.title}
                      </a>
                    </h1>
                    <h1 className="text-gray-500 dark:text-gray-400 truncate">
                      {track.artist}
                    </h1>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default TopSongs;
