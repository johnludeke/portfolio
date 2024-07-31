import NowPlaying from "./nowplaying";
import TopSongs from "./topsongs";

const Spotify = () => {
  return (
    <div className="flex flex-col space-y-6 items-center">
      <div className="flex flex-col items-center">
        <h1 className="font-semibold pb-4">
          What I am listening to right now?
        </h1>
        <NowPlaying />
      </div>
      <div className="flex flex-col items-center">
        <h1 className="font-semibold pb-4">
          What are my top songs of the past 4 weeks?
        </h1>
        <TopSongs />
      </div>
    </div>
  );
};

export default Spotify;
