import { useState, useEffect } from "react";

const useCheckScreenType = () => {
  const [width, setWidth] = useState(0);

  const handleWindowSizeChange = () => {
    setWidth(window.innerWidth);
  };

  const setInitialWidth = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    setInitialWidth();
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  switch (true) {
    case width < 768:
      return "mobile";
    case width >= 768 && width < 1440:
      return "tablet";
    case width >= 1440:
      return "desktop";
  }
};

export default useCheckScreenType;
