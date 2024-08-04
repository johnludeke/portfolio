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

  const height = image === "None" ? "100px" : "300px";

  const handleClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="px-5 py-4 flex flex-col w-[90vw] lg:max-w-[75vw] xl:max-w-[60vw] transition-all duration-300 text-cBlack lg:hover:shadow-box-shadow lg:hover:-translate-y-[5px] lg:hover:translate-x-[5px] border-b-[1px] border-l-[1px] border-cBlack">
      <div className="pb-5 lg:pb-0">
        <div className="flex flex-row justify-between font-sourcecodepro">
          <h2>{company}</h2>
          <h2>{dates}</h2>
        </div>
        <div className="flex flex-col lg:flex-row justify-between">
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
      </div>
      <div className="flex flex-col">
        <div
          style={{ height: expanded ? height : "0", overflow: "scroll" }}
          className="transition-all duration-500 flex flex-col space-y-4 lg:grid lg:grid-cols-[3fr_2fr] lg:gap-4"
        >
          {image !== "None" ? (
            <>
              <body className="pt-3">{children}</body>
              <a href={link} target="_blank" rel="noopener noreferrer">
                <img
                  className="h-auto object-contain rounded-md border-cBlack border-[1px]"
                  src={image}
                  alt={""}
                />
              </a>
            </>
          ) : (
            <body>{children}</body>
          )}
        </div>
        <div className="hover:cursor-pointer" onClick={handleClick}>
          {expanded ? (
            <ChevronUpIcon className="w-full max-h-6 stroke-cBlack hover:stroke-green-600 transition duration-300" />
          ) : (
            <ChevronDownIcon className="w-full max-h-6 stroke-cBlack hover:stroke-green-600 transition duration-300" />
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
