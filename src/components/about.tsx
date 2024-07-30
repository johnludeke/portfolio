import Spotify from "./spotify";

const About = () => {
  return (
    <div className="flex flex-col h-full">
      <div className="px-40 flex flex-row h-full">
        <div className="border-cBlack border-l-[1px] border-r-[1px] h-full flex">
          <img
            className="w-80 h-auto self-center pb-20"
            src="./images/headshot.png"
            alt=""
            loading="lazy"
          />
        </div>
        <div className="py-10 w-full flex flex-col items-center">
          <h1 className="font-semibold">About</h1>
          <div className="w-[48px] h-0.5 bg-cBlack rounded-full mb-10" />
          <p>This is information that would be about me</p>
          <Spotify />
        </div>
      </div>
    </div>
  );
};

export default About;
