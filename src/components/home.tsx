import FollowCursorDiv from "./dynamic";
import Model from "./model";
import Marquee from "react-fast-marquee";

type Direction = "left" | "right" | "up" | "down" | undefined;

interface HomeProps {
  currentColor: number;
  cubeColors: string[];
  randomArray: [number, Direction][];
}

const Home = ({ currentColor, cubeColors, randomArray }: HomeProps) => {
  return (
    <div className="flex flex-col h-screen">
      <div className="flex flex-row h-full justify-center">
        <h1 className="flex items-center text-5xl md:text-7xl text-cBlack">
          John Ludeke
        </h1>
        <FollowCursorDiv>
          <Model
            model={"./models/Cube.obj"}
            color={cubeColors[currentColor]}
            metallic={"./textures/Cube_metallic.png"}
            roughness={"./textures/Cube_roughness.png"}
            transmittance={"./textures/Cube_transmittance.png"}
            scale={1}
          />
        </FollowCursorDiv>
      </div>
      <div className="flex justify-center">
        <p className="font-sourcecodepro absolute bottom-[35vh] text-cBlack">
          Hey there. I'm an engineer.
        </p>
      </div>
      <div className="absolute flex flex-col text-[256px] font-black text-cBlack opacity-10 leading-[190px] w-full overflow-hidden z-[-1] h-full">
        <Marquee direction={randomArray[0][1]} speed={randomArray[0][0]}>
          WEB-DEV CSS PYTORCH UI/UX ENGINEERING FIGMA API TYPESCRIPT NEXT.JS
          FPGA ALGORITHMS C/C++ JAVA
        </Marquee>
        <Marquee direction={randomArray[1][1]} speed={randomArray[1][0]}>
          API TYPESCRIPT NEXT.JS ALGORITHMS SQL C/C++ UI/UX ENGINEERING FIGMA
          JAVASCRIPT PYTHON TENSORFLOW
        </Marquee>
        <Marquee direction={randomArray[2][1]} speed={randomArray[2][0]}>
          ENGINEERING FIGMA ALGORITHMS JAVASCRIPT PYTHON HTML TENSORFLOW FPGA
          SQL C/C++ REACT EXPRESS GIT JAVA
        </Marquee>
        <Marquee direction={randomArray[3][1]} speed={randomArray[3][0]}>
          FPGA ALGORITHMS SQL C/C++ REACT EXPRESS JAVA JAVASCRIPT PYTHON HTML
          TENSORFLOW WEB-DEV DESIGN CSS PYTORCH
        </Marquee>
        <Marquee direction={randomArray[4][1]} speed={randomArray[4][0]}>
          JAVASCRIPT PYTHON HTML TENSORFLOW WEB-DEV DESIGN CSS REACT EXPRESS GIT
          JAVA API NEXT.JS
        </Marquee>
      </div>
    </div>
  );
};

export default Home;
