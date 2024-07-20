"use client"
import React, { useState } from "react";
import Image from "next/image";
import Duophone from "@/public/assets/duophone.svg";
import IOS from "@/public/assets/ios.svg";
import Google from "@/public/assets/google.svg";
import { Developeds, links, Maps, stats } from "@/constant/index";

const Developed = () => {
  const [activeProject, setActiveProject] = useState("Project 1");

  const currentProject = Developeds[activeProject] || {
    title: "Not Found",
    description: "Project not found",
  };

  return (
    <section className="sm:container bg-[#F2F4F7] pt-10 pb-12 sm:px-28 px-4">
      <h2 className="font-bold sm:text-4xl text-2xl pb-5">
        Projects we are proud of
      </h2>
      <p className="font-medium text-sm sm:pb-2 pb-8">
        Our software development company is truly proud of the wonderful clients
        we have <br /> worked with. We enjoy a long-term partnership
      </p>

      <div className="flex sm:flex-row flex-col-reverse sm:gap-36 gap-14 items-center">
        <div className="flex flex-col gap-5">
          <div className="flex flex-row items-center gap-5">
            {Object.keys(Developeds).map((project) => (
              <span
                key={project}
                className={`font-medium text-lg cursor-pointer ${
                  activeProject === project
                    ? "border-b-2 border-yellow-400 w-18"
                    : ""
                }`}
                onClick={() => setActiveProject(project)}
              >
                {project}
              </span>
            ))}
          </div>

          <h2 className="font-bold text-4xl">{currentProject.title}</h2>

          <p className="text-sm font-normal leading-[20px] tracking-[-0.24px]">
            {currentProject.description}
          </p>

          <div className="flex sm:flex-row flex-wrap space-x-4 text-gray-700">
            {links.map((item, index) => (
              <div key={index}>
                <span className="text-sm sm:text-[17px]">{item.text}</span>{" "}
                {item.separator && <span className="text-yellow-500">/</span>}
              </div>
            ))}
          </div>

          <div className="flex flex-row items-center gap-8">
            {Maps.map((item, index) => (
              <div className="flex flex-row items-center gap-2" key={index}>
                <Image src={item.src} height={24} width={24} alt={item.text} />
                <p>{item.text}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-row items-center gap-8">
            {stats.map((stat, index) => (
              <div className="flex flex-col gap-2" key={index}>
                <h4 className="font-bold text-2xl">{stat.title}</h4>
                <p className="font-normal text-sm">{stat.description}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-row gap-4">
            <Image src={IOS} height={40} width={148} alt="ios" />
            <Image src={Google} height={40} width={148} alt="google" />
          </div>
        </div>
        <Image src={Duophone} height={449} width={446} alt="duophone" />
      </div>
    </section>
  );
};

export default Developed;
