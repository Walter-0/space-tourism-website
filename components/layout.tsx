import { useState, useEffect } from "react";
import { Bellefair, Barlow, Barlow_Condensed } from "next/font/google";
import { Navbar } from "./Navbar";
import { useRouter } from "next/router";

const bellefair = Bellefair({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bellefair",
});

const barlow = Barlow({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-barlow",
});

const barlowCondensed = Barlow_Condensed({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-barlow-condensed",
});

const useCheckMobileScreen = () => {
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

  return width < 768;
};

export default function Layout({ children }) {
  const router = useRouter();
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const isMobile = useCheckMobileScreen();
  const page = router.pathname === "/" ? "home" : router.pathname.slice(1);

  const handleOpenMenu = () => {
    setMenuIsOpen(() => true);
  };

  const handleCloseMenu = () => {
    setMenuIsOpen(() => false);
  };

  useEffect(() => {
    if (isMobile === false) {
      setMenuIsOpen(() => false);
    }
  }, [isMobile]);

  return (
    <div
      className={`h-screen bg-${page}-mobile md:bg-${page}-tablet lg:bg-${page}-desktop ${bellefair.variable} ${barlow.variable} ${barlowCondensed.variable}`}
    >
      <Navbar
        isMobile={isMobile}
        menuIsOpen={menuIsOpen}
        handleOpenMenu={handleOpenMenu}
        handleCloseMenu={handleCloseMenu}
      />
      <main>{children}</main>
    </div>
  );
}
