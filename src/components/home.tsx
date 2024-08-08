import FollowCursorDiv from "./three/dynamic";
import Model from "./three/model";
import Marquee from "react-fast-marquee";
import { MouseEvent } from "react";
import MediaQuery from "react-responsive";

type Direction = "left" | "right" | "up" | "down" | undefined;

interface HomeProps {
  darkMode: number;
  cubeColors: string[];
  randomArray: [number, Direction][];
}

const Home = ({ darkMode, cubeColors, randomArray }: HomeProps) => {
  const handleScroll = (
    event: React.MouseEvent<HTMLAnchorElement>,
    targetId: string
  ) => {
    event.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const elementPosition =
        targetElement.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - 60;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="flex flex-col h-screen">
      <div className="flex flex-row h-full justify-center z-[2]">
        <h1 className="flex items-center text-5xl lg:text-7xl sm:pl-0 pl-8 text-cBlack dark:text-white">
          John Ludeke
        </h1>
        <MediaQuery query="(max-device-width: 1023px)">
          <Model
            model={"./models/Cube.obj"}
            color={cubeColors[darkMode]}
            metallic={"./textures/Cube_metallic.png"}
            roughness={"./textures/Cube_roughness.png"}
            transmittance={"./textures/Cube_transmittance.png"}
            scale={1}
          />
        </MediaQuery>
        <MediaQuery query="(min-device-width: 1024px)">
          <FollowCursorDiv>
            <Model
              model={"./models/Cube.obj"}
              color={cubeColors[darkMode]}
              metallic={"./textures/Cube_metallic.png"}
              roughness={"./textures/Cube_roughness.png"}
              transmittance={"./textures/Cube_transmittance.png"}
              scale={1}
            />
          </FollowCursorDiv>
        </MediaQuery>
      </div>
      <div className="flex justify-center z-[2]">
        <p className="text-center sm:px-0 px-12 font-sourcecodepro absolute top-[60vh] md:top-auto bottom-full md:bottom-[35vh] text-cBlack dark:text-white">
          Hey there, I'm an engineer. See my{" "}
          <a
            className="underline-offset-4 underline"
            href="#work"
            onClick={(e) => handleScroll(e, "work")}
          >
            work
          </a>
          .
        </p>
      </div>
      <div className="absolute flex flex-col text-[256px] font-black text-cBlack dark:text-white opacity-5 leading-[190px] w-full overflow-hidden h-screen justify-between z-[1] bg-transparent">
        <Marquee direction={randomArray[0][1]} speed={randomArray[0][0]}>
          WEB DEV CSS PYTORCH UI/UX ENGINEERING FIGMA API TYPESCRIPT NEXT.JS
          FPGA ALGORITHMS C/C++ JAVA &nbsp;
        </Marquee>
        <Marquee direction={randomArray[1][1]} speed={randomArray[1][0]}>
          API TYPESCRIPT NEXT.JS ALGORITHMS SQL C/C++ UI/UX ENGINEERING FIGMA
          JAVASCRIPT PYTHON TENSORFLOW &nbsp;
        </Marquee>
        <Marquee direction={randomArray[2][1]} speed={randomArray[2][0]}>
          ENGINEERING FIGMA ALGORITHMS JAVASCRIPT PYTHON HTML TENSORFLOW FPGA
          SQL C/C++ REACT EXPRESS GIT JAVA &nbsp;
        </Marquee>
        <Marquee direction={randomArray[3][1]} speed={randomArray[3][0]}>
          FPGA ALGORITHMS SQL C/C++ REACT EXPRESS JAVA JAVASCRIPT PYTHON HTML
          TENSORFLOW WEB DEV DESIGN CSS PYTORCH &nbsp;
        </Marquee>
        <Marquee direction={randomArray[4][1]} speed={randomArray[4][0]}>
          JAVASCRIPT PYTHON HTML TENSORFLOW WEB DEV DESIGN CSS REACT EXPRESS GIT
          JAVA API NEXT.JS &nbsp;
        </Marquee>
      </div>
    </div>
  );
};

export default Home;
