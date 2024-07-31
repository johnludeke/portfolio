import { ReactNode, useState } from "react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";

interface CardProps {
  company: string;
  title: string;
  dates: string;
  image: string;
  stack: string[][];
  link: string;
  children: ReactNode;
}

const Card = ({
  company,
  title,
  dates,
  image,
  stack,
  link,
  children,
}: CardProps) => {
  const [expanded, setExpanded] = useState(false);

  const height = image === "None" ? "100px" : "230px";

  const handleClick = () => {
    setExpanded(!expanded);
  };
  // hover:shadow-lg hover:-translate-y-[2px] hover:translate-x-[2px]
  return (
    <div
      className="group/card px-5 py-4 flex flex-col w-[60vw] transition-all duration-300 text-cBlack hover:shadow-box-shadow hover:-translate-y-[5px] hover:translate-x-[5px] border-b-[1px] border-l-[1px] border-cBlack"
      onClick={handleClick}
    >
      <div className="relative w-full bg-black" />
      <div className="flex flex-row justify-between font-sourcecodepro">
        <h2>{company}</h2>
        <h2>{dates}</h2>
      </div>
      <div className="flex flex-row justify-between">
        <h1 className="text-xl font-semibold py-2">{title}</h1>
        <div className="flex flex-row space-x-4 translate-y-2">
          {stack.map((logo) => (
            <div className="group/stack w-6 h-6">
              <img className="w-6 h-6" src={logo[0]} alt="" />
              <div className="relative left-1/2 transform -translate-x-1/2 -translate-y-1 mt-2 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover/stack:opacity-100 transition-opacity duration-300 w-fit">
                {logo[1]}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col">
        <div
          style={{ height: expanded ? height : "0", overflow: "hidden" }}
          className="transition-all duration-500 flex flex-row space-x-8"
        >
          <body>{children}</body>
          {image !== "None" ? (
            <a href={link} target="_blank" rel="noopener noreferrer">
              <img
                className="min-h-[200px] min-w-auto rounded-md border-cBlack border-[1px]"
                src={image}
                alt={""}
              />
            </a>
          ) : (
            <div className="w-0" />
          )}
        </div>
        <div className="">
          {expanded ? (
            <ChevronUpIcon className="w-full max-h-6 stroke-cBlack group-hover/card:stroke-green-600 transition duration-300" />
          ) : (
            <ChevronDownIcon className="w-full max-h-6 stroke-cBlack group-hover/card:stroke-green-600 transition duration-300" />
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
