import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import logo from "../assets/shared/logo.svg";
import iconHamburger from "../assets/shared/icon-hamburger.svg";

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

  return (
    <nav className="flex items-center justify-between bg-transparent p-6 md:pr-0 md:pt-0 lg:pt-10">
      <Link href="/">
        <Image src={logo} alt="logo" width={logoSize} height={logoSize} />
      </Link>

      {isMobile && (
        <Image
          src={iconHamburger}
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
          {navItems.map((item, i) => (
            <Link href={item} key={i} legacyBehavior>
              <a
                className={`nav-text uppercase text-white md:border-b-4 md:pb-8 lg:hover:border-gray-400 ${
                  router.pathname === "/" && item === "home"
                    ? ""
                    : "md:border-transparent"
                }
                ${router.pathname === item ? "" : ""}`}
              >
                <span className="hidden font-bold lg:inline">0{i}</span> {item}
              </a>
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};
