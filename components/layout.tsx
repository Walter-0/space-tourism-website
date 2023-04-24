import { useState, useEffect } from "react";
import { Bellefair, Barlow, Barlow_Condensed } from "next/font/google";
import { Navbar } from "./Navbar";
import { useRouter } from "next/router";
import useCheckScreenType from "@/hooks/useCheckScreenType";

interface Props {
  children: React.ReactNode;
}

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

export default function Layout({ children }: Props) {
  const router = useRouter();
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const screenType = useCheckScreenType();
  const page = router.pathname === "/" ? "home" : router.pathname.slice(1);

  const handleOpenMenu = () => {
    setMenuIsOpen(() => true);
  };

  const handleCloseMenu = () => {
    setMenuIsOpen(() => false);
  };

  useEffect(() => {
    if (screenType !== "mobile" && menuIsOpen) {
      setMenuIsOpen(() => false);
    }
  }, [screenType, menuIsOpen]);

  return (
    <div
      className={`min-h-screen bg-cover bg-${page}-mobile md:bg-${page}-tablet lg:bg-${page}-desktop ${bellefair.variable} ${barlow.variable} ${barlowCondensed.variable}`}
    >
      <div className="mx-auto max-w-screen-lg">
        <Navbar
          isMobile={screenType === "mobile"}
          menuIsOpen={menuIsOpen}
          handleOpenMenu={handleOpenMenu}
          handleCloseMenu={handleCloseMenu}
        />
        <main>{children}</main>
      </div>
    </div>
  );
}
