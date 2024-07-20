import React from "react";
import Image from "next/image";
import Heros from "@/public/assets/Hero Img.svg";
import { Button } from "./ui/button";
const Hero = () => {
  return (
    <section className="flex sm:flex-row flex-col  sm:pl-14 pl-4 bg-[#F2F4F7] container">
      <div className="sm:pt-40 pt-36">
        <p className="font-semibold sm:text-[39px] text-lg pb-5 sm:leading-[47px] tracking-wide">
          <span className="text-[#FFBA00] font-extrabold">
            User-Centric Excellence
          </span>
          : Our App Development services Tackles Your Pain Points
        </p>
        <p className="font-normal sm:text-lg text-sm pb-14">
          Experience a Seamless Digital Journey with{" "}
          <span className="text-[#80A948]">Desun</span> - Where Every Line of
          Code Resolves Your Challenges and{" "}
          <span className="text-[#FFBA00]">Elevates Your App Experience</span>{" "}
          to Unparalleled Heights.
        </p>
        <div className="bg-white p-6 rounded-sm shadow-custom">
          <h3 className="font-bold text-xl pb-5">
            Leave your contacts and we will call you back within 30 minutes
          </h3>

          <form className="mx-auto">
            <div className="grid md:grid-cols-2 md:gap-6">
              <div className="relative z-0 w-full mb-5 group">
                <input
                  type="text"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none peer outline-none"
                  placeholder=" "
                />
                <label className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                  Full Name
                </label>
              </div>
              <div className="relative z-0 w-full mb-5 group">
                <input
                  type="text"
                  name="floating_last_name"
                  id="floating_last_name"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none peer outline-none"
                  placeholder=" "
                  required
                />
                <label className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                  Last name
                </label>
              </div>
            </div>
            <div className="grid md:grid-cols-2 md:gap-6">
              <div className="relative z-0 w-full mb-5 group">
                <input
                  type="tel"
                  pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                  name="floating_phone"
                  id="floating_phone"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none peer outline-none"
                  placeholder=" "
                  required
                />
                <label className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                  Phone number (123-456-7890)
                </label>
              </div>
              <div className="relative z-0 w-full mb-5 group">
                <input
                  type="text"
                  name="floating_company"
                  id="floating_company"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none peer outline-none"
                  placeholder=" "
                  required
                />
                <label className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                  Company (Ex. Google)
                </label>
              </div>
            </div>
            <Button
              type="submit"
              className="text-white bg-[#91b65f] hover:bg-[#91b65f] font-medium"
            >
              Get consultation
            </Button>
          </form>
        </div>
      </div>
      <div className="hidden lg:block ">
        <Image src={Heros} height={200} width={1800} alt="" className=" relative sm:bottom-[22rem] sm:left-8 "  />
      </div>
    </section>
  );
};

export default Hero;
