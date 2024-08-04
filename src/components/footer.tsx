const Footer = () => {
  return (
    <div className="flex flex-row text-white w-full justify-between px-[10vw] h-full items-center">
      <h1 className="font-semibold text-xl">John Ludeke</h1>
      <div className="flex flex-col space-y-4">
        <h1 className="font-sourcecodepro group">
          <a
            className="flex flex-row space-x-2"
            href="https://github.com/johnludeke"
          >
            <img
              className="h-4 w-4 translate-y-[3px]"
              src="./symbols/GitHub.png"
              alt=""
            />
            <h1>GitHub</h1>
          </a>
          <div className="block h-0.5 group-hover:bg-white group-hover:translate-y-0 bg-cBlack translate-y-1 rounded-full w-[82px] transition-all duration-100" />
        </h1>
        <h1 className="font-sourcecodepro group">
          <a
            className="flex flex-row space-x-2"
            href="https://www.linkedin.com/in/johnludeke/"
          >
            <img
              className="h-4 w-4 translate-y-[3px]"
              src="./symbols/LinkedIn.png"
              alt=""
            />
            <h1>LinkedIn</h1>
          </a>
          <div className="block h-0.5 group-hover:bg-white group-hover:translate-y-0 bg-cBlack translate-y-1 rounded-full w-[101px] transition-all duration-100" />
        </h1>
      </div>
    </div>
  );
};

export default Footer;