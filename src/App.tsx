import "./App.css";
import { Navbar, Footer, Experience, About, Home, Loading } from "./components";
import { useState, useEffect } from "react";

type Direction = "left" | "right" | "up" | "down" | undefined;

const App = () => {
  const prefersDarkMode = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;

  const [darkMode, setDarkMode] = useState<number>(prefersDarkMode ? 1 : 0);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (e: MediaQueryListEvent) =>
      setDarkMode(e.matches ? 1 : 0);

    mediaQuery.addEventListener("change", handleChange);

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  const cubeColors = [
    "./textures/Cube_color_black.png",
    "./textures/Cube_color_white.png",
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
    <div
      className={
        darkMode === 1 ? "dark bg-cBlack text-white" : "bg-white text-cBlack"
      }
    >
      <Loading />
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <section id="home" className="h-screen">
        <Home
          darkMode={darkMode}
          cubeColors={cubeColors}
          randomArray={randomArray}
        />
      </section>
      <section
        id="work"
        className="h-[750px] border-t-[1px] border-cBlack dark:border-white"
      >
        <Experience />
      </section>
      <section
        id="about"
        className="h-auto border-t-[1px] border-cBlack dark:border-white"
      >
        <About />
      </section>
      <section
        id="contact"
        className="bg-cBlack dark:border-t-[1px] dark:border-white sm:h-44 h-60"
      >
        <Footer />
      </section>
    </div>
  );
};

export default App;
