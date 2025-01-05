import { useState, useEffect } from "react";
/**
 * A custom React hook to get the current screen width and dynamically update it when the browser window is resized.
 * @returns {number} The current width of the browser window (`window.innerWidth`).
 *
 */
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
