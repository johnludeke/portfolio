import "./App.css";
import { Navbar, Footer, Experience, About, Home, Loading } from "./components";
import { useState } from "react";

type Direction = "left" | "right" | "up" | "down" | undefined;

const App = () => {
  const [currentColor, setCurrentColor] = useState(0);

  const cubeColors = [
    "./textures/Cube_color_black.png",
    "./textures/Cube_color_pink.png",
    "./textures/Cube_color_green.png",
    "./textures/Cube_color_blue.png",
  ];

  const getRandomNumber = (a: number, b: number): number => {
    return Math.random() * (b - a) + a;
  };

  const getRandomDirection = (): Direction => {
    const directions: Array<Direction> = ["left", "right"];
    const randomIndex = Math.floor(Math.random() * directions.length);
    return directions[randomIndex];
  };

  const generateRandomArray = (
    length: number,
    a: number,
    b: number
  ): [number, Direction][] => {
    return Array.from({ length }, () => [
      getRandomNumber(a, b),
      getRandomDirection(),
    ]);
  };

  const a = 10;
  const b = 20;
  const randomArray: [number, Direction][] = generateRandomArray(5, a, b);

  return (
    <div className="text-cBlack">
      <Loading />
      <Navbar currentColor={currentColor} setCurrentColor={setCurrentColor} />
      <section id="home" className="h-screen">
        <Home
          currentColor={currentColor}
          cubeColors={cubeColors}
          randomArray={randomArray}
        />
      </section>
      <section
        id="work"
        className="h-navbar-screen border-t-[1px] border-cBlack"
      >
        <Experience />
      </section>
      <section
        id="about"
        className="h-navbar-screen border-t-[1px] border-cBlack"
      >
        <About />
      </section>
      <section id="contact" className="bg-cBlack h-44">
        <Footer />
      </section>
    </div>
  );
};

export default App;
