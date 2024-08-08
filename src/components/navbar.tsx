import Model from "./three/model";
import Hamburger from "hamburger-react";
import { useState, useEffect } from "react";
import MediaQuery from "react-responsive";

interface NavbarProps {
  darkMode: number;
  setDarkMode: React.Dispatch<React.SetStateAction<number>>;
}

const Navbar = ({ darkMode, setDarkMode }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setShouldRender(true);
    }
  }, [isOpen]);

  const handleAnimationEnd = () => {
    if (!isOpen) {
      setShouldRender(false);
    }
  };

  const handleScroll = (
    event: React.MouseEvent<HTMLAnchorElement>,
    targetId: string
  ) => {
    event.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      setIsOpen(false);
      const elementPosition =
        targetElement.getBoundingClientRect().top + window.scrollY;
      const offsetPosition =
        targetId !== "home" ? elementPosition - 60 : elementPosition;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const donutColors = [
    "./textures/Donut_color_black.png",
    "./textures/Donut_color_white.png",
  ];

  const handleClick = () => {
    setDarkMode(Math.abs(darkMode - 1));
  };

  return (
    <nav className="fixed top-0 h-[62px] left-0 w-full bg-white dark:bg-cBlack text-cBlack dark:text-white border-b-[1px] border-cBlack dark:border-white z-30">
      <div className="px-3 sm:px-12 flex justify-between items-center">
        <div className="w-[60px] h-[60px] cursor-pointer" onClick={handleClick}>
          <Model
            model={"./models/Donut.obj"}
            color={donutColors[darkMode]}
            metallic={"./textures/Donut_metallic.png"}
            roughness={"./textures/Donut_roughness.png"}
            transmittance={"./textures/Donut_transmittance.png"}
            scale={5}
          />
        </div>
        <MediaQuery query="(max-device-width: 1023px)">
          <Hamburger toggled={isOpen} toggle={setIsOpen} />
          {shouldRender && (
            <div
              className={`absolute top-[62px] left-0 w-full border-b-[1px] border-cBlack dark:border-white bg-[rgba(255,255,255,0.5)] dark:bg-[rgba(29,30,32,0.5)] bg-blur overflow-hidden ${
                isOpen ? "animate-expand" : "animate-collapse"
              }`}
              onAnimationEnd={handleAnimationEnd}
            >
              <div className="flex flex-col items-center space-y-4 py-4 text-cBlack dark:text-white">
                <a
                  href="#home"
                  onClick={(e) => handleScroll(e, "home")}
                  className="px-4 py-2"
                >
                  Home
                </a>
                <a
                  href="#work"
                  onClick={(e) => handleScroll(e, "work")}
                  className="px-4 py-2"
                >
                  Work
                </a>
                <a
                  href="#about"
                  onClick={(e) => handleScroll(e, "about")}
                  className="px-4 py-2"
                >
                  About
                </a>
                <a
                  href="#contact"
                  onClick={(e) => handleScroll(e, "contact")}
                  className="px-4 py-2"
                >
                  Contact
                </a>
              </div>
            </div>
          )}
        </MediaQuery>
        <MediaQuery query="(min-device-width: 1024px)">
          <div className="flex flex-row space-x-[5vw] text-cBlack dark:text-white">
            <a
              href="#home"
              onClick={(e) => handleScroll(e, "home")}
              className="hover:-translate-y-0.5 hover:text-gray-500 dark:hover:text-gray-400 transition duration-300 px-4"
            >
              Home
            </a>
            <a
              href="#work"
              onClick={(e) => handleScroll(e, "work")}
              className="hover:-translate-y-0.5 hover:text-gray-500 dark:hover:text-gray-400 transition duration-300 px-4"
            >
              Work
            </a>
            <a
              href="#about"
              onClick={(e) => handleScroll(e, "about")}
              className="hover:-translate-y-0.5 hover:text-gray-500 dark:hover:text-gray-400 transition duration-300 px-4"
            >
              About
            </a>
            <a
              href="#contact"
              onClick={(e) => handleScroll(e, "contact")}
              className="hover:-translate-y-0.5 hover:text-gray-500 dark:hover:text-gray-400 transition duration-300 px-4"
            >
              Contact
            </a>
          </div>
        </MediaQuery>
      </div>
    </nav>
  );
};

export default Navbar;
