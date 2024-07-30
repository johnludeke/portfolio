import { useEffect, useState } from "react";

const Loading = () => {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`fixed z-50 flex justify-center items-center inset-0 bg-cBlack transition-opacity duration-1000 ${
        fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <h1 className="text-white font-semibold text-7xl font-sourcecodepro">
        {"🧐"}
      </h1>
    </div>
  );
};

export default Loading;
