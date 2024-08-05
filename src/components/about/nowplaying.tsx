import { useEffect, useState } from "react";
import getNowPlayingItem from "../../spotify/SpotifyAPI";
import PlayingAnimation from "./PlayingAnimation";

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
    const intervalId = setInterval(async () => {
      Promise.all([getNowPlayingItem()]).then((results) => {
        setResult(results[0]);
        setLoading(false);
      });
    }, 1000);
    return () => {
      clearInterval(intervalId);
    };
  });

  // JAVASCRIPT IMPLEMENTATION
  // useEffect(() => {
  //   const intervalId = setInterval(async () => {
  //     const client_id = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
  //     const client_secret = process.env.REACT_APP_SPOTIFY_CLIENT_SECRET;
  //     const refresh_token = process.env.REACT_APP_SPOTIFY_REFRESH_TOKEN;

  //     Promise.all([
  //       getNowPlayingItem(client_id, client_secret, refresh_token),
  //     ]).then((results) => {
  //       setResult(results[0]);
  //       setLoading(false);
  //     });
  //   }, 1000);
  //   return () => {
  //     clearInterval(intervalId);
  //   };
  // });

  return (
    <div className="text-cBlack">
      {loading ? (
        <div></div>
      ) : (
        <div>
          <div className="flex flex-row items-center space-x-4">
            <div className="w-6 h-auto">
              {result.isPlaying ? (
                <PlayingAnimation />
              ) : (
                <div className="w-[12px] h-[3px] translate-y-[4px] bg-[#1ED760] rounded-full" />
              )}
            </div>
            <div className="h-16 w-96 border-[1px] border-cBlack rounded-[8px] items-center flex flex-row p-[4px]">
              {result.isPlaying ? (
                <>
                  <a
                    className="h-full w-auto rounded-l-[4px]"
                    href={result.songUrl}
                  >
                    <img
                      className="h-full w-auto rounded-l-[4px]"
                      src={result.albumImageUrl}
                      alt={result.title}
                    />
                  </a>
                  <div className="flex flex-col pl-2 w-80">
                    <h1 className="font-semibold truncate">
                      <a href={result.songUrl}>{result.title}</a>
                    </h1>
                    <h1 className="text-gray-500 truncate">{result.artist}</h1>
                  </div>
                </>
              ) : (
                <div className="w-full flex flex-col items-center">
                  <h1 className="font-semibold">Currently offline...</h1>
                  <h1 className="text-gray-500">Check back later.</h1>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NowPlaying;
