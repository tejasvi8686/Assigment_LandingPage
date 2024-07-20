import React from "react";
import Image from "next/image";
import Heros from "@/public/assets/Hero Img.svg";
import Form from "./Form";



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

          <Form prop="Get Consultation" bgclass="bg-[#91b65f] hover:bg-[#91b65f]" />
        </div>
      </div>
      <div className="hidden lg:block">
        <Image
          src={Heros}
          height={200}
          width={2000}
          alt="heros"
          className=" relative sm:bottom-[22rem] sm:left-8"
          loading="lazy"
        />
      </div>
    </section>
  );
};
export default Hero;
