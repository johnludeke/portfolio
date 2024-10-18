import { EnvelopeIcon } from "@heroicons/react/16/solid";

const Footer = () => {
  return (
    <div className="h-full w-full flex flex-col sm:py-0 py-2">
      <div className="flex flex-col sm:flex-row text-white  w-full justify-evenly sm:justify-between px-[10vw] h-full items-center">
        <h1 className="font-semibold text-xl flex flex-row">
          <h1>John Ludeke </h1>
          <h1 className="text-gray-400">v1.0</h1>
        </h1>
        <div className="flex flex-col space-y-4">
          <h1 className="font-sourcecodepro group">
            <a
              className="flex flex-row space-x-2"
              href="https://github.com/johnludeke"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="h-4 w-4 translate-y-[3px]"
                src="./symbols/GitHub.png"
                alt=""
              />
              <h1>GitHub</h1>
            </a>
            <div className="block h-0.5 group-hover:bg-white  group-hover:translate-y-0 bg-cBlack  translate-y-1 rounded-full w-[82px] transition-all duration-100" />
          </h1>
          <h1 className="font-sourcecodepro group">
            <a
              className="flex flex-row space-x-2"
              href="https://www.linkedin.com/in/johnludeke/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="h-4 w-4 translate-y-[3px]"
                src="./symbols/LinkedIn.png"
                alt=""
              />
              <h1>LinkedIn</h1>
            </a>
            <div className="block h-0.5 group-hover:bg-white  group-hover:translate-y-0 bg-cBlack  translate-y-1 rounded-full w-[101px] transition-all duration-100" />
          </h1>
          <h1 className="font-sourcecodepro group">
            <a
              className="flex flex-row space-x-2"
              href="mailto:jludeke2@illinois.edu"
            >
              <EnvelopeIcon className="h-4 w-auto translate-y-[4px]" />
              <h1>Email</h1>
            </a>
            <div className="block h-0.5 group-hover:bg-white  group-hover:translate-y-0 bg-cBlack  translate-y-1 rounded-full w-[72px] transition-all duration-100" />
          </h1>
        </div>
      </div>
      <div className="w-full pb-2 px-[20vw]">
        <h1 className="flex w-full text-white justify-center text-center sm:mt-[-20px] lg:mt-[-40px]">
          Last updated October 2024, designed and developed by hand.
        </h1>
      </div>
    </div>
  );
};

export default Footer;
