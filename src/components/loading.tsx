import { useEffect, useState } from "react";
import { PropagateLoader } from "react-spinners";

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
      className={`fixed z-50 flex flex-col justify-center items-center inset-0 bg-cBlack transition-opacity duration-1000 ${
        fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <PropagateLoader color="#FFFFFF" />
    </div>
  );
};

export default Loading;
