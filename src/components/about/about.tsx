import Spotify from "./spotify";
import { AcademicCapIcon, MapPinIcon } from "@heroicons/react/24/outline";

const About = () => {
  return (
    <div className="flex flex-col h-full">
      <div className="xl:px-40 px-20 flex flex-row h-full">
        <div className="border-cBlack border-l-[1px] border-r-[1px] h-full flex">
          <img
            className="w-80 h-auto self-center pb-20"
            src="./images/headshot.png"
            alt=""
            loading="lazy"
          />
        </div>
        <div className="w-full flex flex-col pl-20 pr-10">
          <div className="pt-10 pb-6 w-full flex flex-col items-center">
            <h1 className="font-semibold">About</h1>
            <div className="w-[48px] h-0.5 bg-cBlack rounded-full" />
          </div>
          <div className="flex flex-row justify-center space-x-10 pb-6">
            <div className="flex flex-row items-center">
              <AcademicCapIcon className="h-4 stroke-[2px] pr-1" />
              <h1 className="hover:underline underline-offset-4 font-semibold">
                <a href="https://illinois.edu">UIUC</a>
              </h1>
            </div>
            <div className="flex flex-row items-center">
              <MapPinIcon className="h-4 stroke-[2px] pr-1" />
              <h1 className="font-semibold">Chicago, IL</h1>
            </div>
          </div>
          <div className="flex flex-col pb-6 text-justify space-y-4">
            <p>
              Studying to get my Bachelors of Science in Computer Engineering;
              coursework focusing on algorithms, databases, and machine
              learning. Outside of class, I am a product manager and serve on
              multiple committees for Hack4Impact UIUC. In the Spring of 2025, I
              will be studying abroad at the KTH Royal Institute of Technology
              in Stockholm, Sweden. I can't wait to explore Europe and broaden
              my experiences!
            </p>
            <p>
              In my free time, I like to play and watch soccer{" "}
              {"(newly initiaed Liverpool fan)"}, read, workout, and crush my
              friends in Mario Kart. Now that I'm in an apartment, I have also
              been broadening my cooking skills; almost everything includes a
              noodle, naturally.
            </p>
          </div>
          <div className="flex justify-center items-end h-full pb-8">
            <Spotify />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
