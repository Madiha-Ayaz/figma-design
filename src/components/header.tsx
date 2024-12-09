import React from "react";
import Image from "next/image";

interface HeaderProps {
  logoSrc: string;
  title: string;
  lastUpdatedDate: string;
}

export const Header: React.FC<HeaderProps> = ({ logoSrc, title, lastUpdatedDate }) => {
  return (
    <div className="w-[1440px] h-[141px] p-[32px] flex">
      <div className="flex w-[581px] h-[40px] gap-[12px] items-center">
        <div>
          <Image
            src={logoSrc}
            width={32}
            height={32}
            alt="logo"
            className="flex"
          />
        </div>
        <h1 className="whitespace-nowrap w-[537px] h-[40px] font-sans font-bold text-[32px] leading-[40px]">
          {title}
        </h1>
      </div>
      <div className="w-[236px] h-[25px] flex ml-[500px] gap-[3px]">
        <h1 className="w-[121px] font-medium text-[20px] leading-[25px] whitespace-nowrap">
          Last Updated:
        </h1>
        <p className="w-[107px] font-bold text-[20px] leading-[25px] font-SFProDisplay whitespace-nowrap">
          {lastUpdatedDate}
        </p>
      </div>
    </div>
  );
};

export default Header;
