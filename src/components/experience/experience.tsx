import ProjectHistory from "./projecthistory";
import WorkHistory from "./workhistory";
import { useEffect, useRef, useState } from "react";

const Experience = () => {
  const [page, setPage] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  }, [page]);

  const handleNextPage = () => {
    setPage(1);
  };

  const handlePrevPage = () => {
    setPage(0);
  };

  return (
    <>
      <div className="flex flex-row justify-center space-x-10 font-semibold py-10">
        <button onClick={handlePrevPage}>
          <h1
            className={`transition-all duration-500 ${
              page === 0 ? "text-cBlack" : "text-gray-500"
            }`}
          >
            Work
          </h1>
        </button>
        <button onClick={handleNextPage}>
          <h1
            className={`transition-all duration-500 ${
              page === 1 ? "text-cBlack" : "text-gray-500"
            }`}
          >
            Projects
          </h1>
        </button>
      </div>
      <div className="flex flex-col w-full items-center">
        <div
          className={`h-0.5 bg-cBlack rounded-full mt-[-40px] transition-all duration-300 ${
            page === 0
              ? "-translate-x-[52px] w-[40px]"
              : "translate-x-[40px] w-[65px]"
          }`}
        />
      </div>
      <div
        ref={containerRef}
        className="relative flex justify-center pb-12 h-[600px] overflow-x-hidden overflow-y-scroll"
      >
        <div
          className={`pt-4 pb-10 absolute w-full transition-transform duration-500 ${
            page === 0 ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <WorkHistory />
        </div>
        <div
          className={`pt-4 pb-10 absolute w-full transition-transform duration-500 ${
            page === 0 ? "translate-x-full" : "translate-x-0"
          }`}
        >
          <ProjectHistory />
        </div>
      </div>
    </>
  );
};

export default Experience;
