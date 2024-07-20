import React from "react";
import Image from "next/image";
import Heros from "@/public/assets/Hero Img.svg";
import { Button } from "./ui/button";
import { formFields } from "@/constant/index";

const Hero = () => {
  return (
    <section className="flex sm:flex-row sm:pl-14 px-4 bg-[#F2F4F7] sm:container h-[100vh] sm:h-[140vh] overflow-y-hidden">
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
        <div className="bg-white p-6 rounded-lg shadow-custom">
          <h3 className="font-bold text-xl pb-5">
            Leave your contacts and we will call you back within 30 minutes
          </h3>

          <form className="mx-auto">
            <div className="grid md:grid-cols-2 md:gap-6">
              {formFields.map((field) => (
                <div key={field.id} className="relative z-0 w-full mb-5 group">
                  <input
                    type={field.type}
                    id={field.id}
                    name={field.id}
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none peer outline-none"
                    placeholder={field.placeholder}
                    required={field.required}
                  />
                  <label
                    htmlFor={field.id}
                    className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    {field.label}
                  </label>
                </div>
              ))}
            </div>

            <Button
              type="submit"
              className="text-white bg-[#91b65f] hover:bg-[#91b65f] font-medium py-2 px-4 mt-4 rounded-md"
            >
              Get consultation
            </Button>
          </form>
        </div>
      </div>
      <div className="hidden lg:block">
        <Image
          src={Heros}
          height={200}
          width={2000}
          alt="heros"
          className=" relative sm:bottom-[22rem] sm:left-8"
        />
      </div>
    </section>
  );
};
export default Hero;
