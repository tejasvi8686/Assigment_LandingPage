import React from "react";
import Image from "next/image";
import LogoBG from "@/public/assets/logo-bg.svg";
import { contactInfo } from "@/constant";

const Footer = () => {
  return (
    <footer className="sm:container px-6 py-4 rounded-xl mx-auto w-[95%] sm:w-auto sm:m-[36px] m-[10px] bg-black">
      <div className="flex justify-center pb-4">
        <Image src={LogoBG} height={113} width={290} alt="logobg" />
      </div>

      <div className="flex flex-col gap-7">
        <div className="flex sm:flex-row flex-col justify-between sm:gap-0  gap-4">
          {contactInfo.map((item, index) => (
            <div key={index} className="flex flex-col gap-2">
              <div className="flex flex-row gap-1 items-center">
                <Image
                  src={item.image}
                  height={24}
                  width={24}
                  alt={item.label}
                />
                <p className="text-sm font-normal text-[#98A2B3]">
                  {item.label}
                </p>
              </div>
              <p className="font-semibold text-white text-sm">{item.value}</p>
            </div>
          ))}
        </div>
        <p className="font-normal text-sm text-white text-center">
          We work throughout the world
        </p>
      </div>
    </footer>
  );
};

export default Footer;
