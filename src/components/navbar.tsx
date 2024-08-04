import Model from "./three/model";
import { MouseEvent } from "react";

interface NavbarProps {
  currentColor: number;
  setCurrentColor: React.Dispatch<React.SetStateAction<number>>;
}

const Navbar = ({ currentColor, setCurrentColor }: NavbarProps) => {
  // const handleScroll = (
  //   event: MouseEvent<HTMLAnchorElement>,
  //   targetId: string
  // ) => {
  //   event.preventDefault();
  //   const targetElement = document.getElementById(targetId);
  //   if (targetElement) {
  //     targetElement.scrollIntoView({
  //       behavior: "smooth",
  //       block: "end",
  //       inline: "center",
  //     });
  //   }
  // };

  const handleScroll = (
    event: React.MouseEvent<HTMLAnchorElement>,
    targetId: string
  ) => {
    event.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
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
    "./textures/Donut_color_pink.png",
    "./textures/Donut_color_green.png",
    "./textures/Donut_color_blue.png",
  ];

  const handleClick = () => {
    setCurrentColor(currentColor === 3 ? 0 : currentColor + 1);
  };

  return (
    <nav className="fixed top-0 h-[62px] left-0 w-full bg-white text-cBlack border-b-[1px] border-cBlack z-30">
      <div className="px-12 flex justify-between items-center">
        <div className="w-[60px] h-[60px] cursor-pointer" onClick={handleClick}>
          <Model
            model={"./models/Donut.obj"}
            color={donutColors[currentColor]}
            metallic={"./textures/Donut_metallic.png"}
            roughness={"./textures/Donut_roughness.png"}
            transmittance={"./textures/Donut_transmittance.png"}
            scale={5}
          />
        </div>
        <div className="flex flex-row space-x-[5vw] text-cBlack">
          <a
            href="#home"
            onClick={(e) => handleScroll(e, "home")}
            className="hover:-translate-y-0.5 hover:text-gray-500 transition duration-300 px-4"
          >
            Home
          </a>
          <a
            href="#work"
            onClick={(e) => handleScroll(e, "work")}
            className="hover:-translate-y-0.5 hover:text-gray-500 transition duration-300 px-4"
          >
            Work
          </a>
          <a
            href="#about"
            onClick={(e) => handleScroll(e, "about")}
            className="hover:-translate-y-0.5 hover:text-gray-500 transition duration-300 px-4"
          >
            About
          </a>
          <a
            href="#contact"
            onClick={(e) => handleScroll(e, "contact")}
            className="hover:-translate-y-0.5 hover:text-gray-500 transition duration-300 px-4"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
