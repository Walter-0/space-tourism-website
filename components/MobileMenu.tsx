import React from "react";
import Image from "next/image";
import Link from "next/link";

interface MobileMenuProps {
  items: string[];
  handleCloseMenu: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ items, handleCloseMenu }) => {
  return (
    <div className="absolute inset-y-0 right-0 z-10 h-full w-64 bg-transparent p-6 backdrop-blur-lg">
      <Image
        src="/shared/icon-close.svg"
        alt="icon-close"
        className="absolute right-6"
        width={19}
        height={19}
        onClick={handleCloseMenu}
      />

      <div className="mt-28">
        {items.map((item, i) => (
          <Link href={i === 0 ? "/" : item} key={i} legacyBehavior>
            <a className="nav-text mb-8 block uppercase text-white">
              <span className="font-bold">0{i}</span> {item}
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MobileMenu;
