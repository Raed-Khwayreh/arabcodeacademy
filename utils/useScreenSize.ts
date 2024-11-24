import { useState, useEffect } from "react";

function useScreenSize() {
  const [screenSize, setScreenSize] = useState(0);

  useEffect(() => {
    setScreenSize(window.innerWidth);
    const handleResize = () => {
      setScreenSize(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return screenSize;
}

export default useScreenSize;
