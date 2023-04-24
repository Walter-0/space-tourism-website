import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

import MobileMenu from "./MobileMenu";

interface NavbarProps {
  isMobile: boolean;
  menuIsOpen: boolean;
  handleOpenMenu: () => void;
  handleCloseMenu: () => void;
}

const navItems = ["home", "destination", "crew", "technology"];

export const Navbar: React.FC<NavbarProps> = ({
  isMobile,
  menuIsOpen,
  handleOpenMenu,
  handleCloseMenu,
}) => {
  const router = useRouter();
  const logoSize = isMobile ? 40 : 48;
  const [page, setPage] = useState(router.pathname.slice(1) || "home");

  useEffect(() => {
    setPage(router.pathname.slice(1) || "home");
    handleCloseMenu();
  }, [router.pathname]);

  return (
    <nav className="flex items-center justify-between bg-transparent p-6 md:pr-0 md:pt-0 lg:pl-14 lg:pt-10">
      <Link href="/">
        <Image
          src="/shared/logo.svg"
          alt="logo"
          width={logoSize}
          height={logoSize}
        />
      </Link>

      {isMobile && (
        <Image
          src="/shared/icon-hamburger.svg"
          alt="icon-hamburger"
          width={24}
          height={21}
          onClick={handleOpenMenu}
        />
      )}

      {menuIsOpen && (
        <MobileMenu items={navItems} handleCloseMenu={handleCloseMenu} />
      )}

      <hr className="hidden lg:z-10 lg:-mr-32 lg:block lg:w-[473px] lg:border-gray-500" />

      {!isMobile && (
        <div className="md:flex md:h-24 md:w-[450px] md:items-end md:justify-evenly md:bg-white md:bg-opacity-5 lg:w-[830px] lg:backdrop-blur-lg">
          {navItems.map((item, i) => {
            return (
              <Link href={i === 0 ? "/" : item} key={i} legacyBehavior>
                <a
                  className={`nav-text uppercase text-white md:border-b-4 md:border-transparent md:pb-8 lg:hover:border-gray-400 ${
                    page === item ? "md:border-white lg:hover:border-white" : ""
                  }`}
                >
                  <span className="hidden font-bold lg:inline">0{i} </span>
                  {item}
                </a>
              </Link>
            );
          })}
        </div>
      )}
    </nav>
  );
};
