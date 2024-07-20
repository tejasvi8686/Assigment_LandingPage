import React from "react";
import Image from "next/image";
import { projects } from "@/constant/index";

const Projects = () => {
  return (
    <section className="sm:container bg-[#F2F4F7] pt-20 pb-10 sm:px-28 px-4">
      <h2 className="font-bold sm:text-3xl text-2xl leading-[144%] tracking-[0.33px]">
        Developed more than <span className="text-[#80A948]">100</span> <br />{" "}
        projects in <span className="text-[#80A948]">15</span> industries
      </h2>

      <div className="flex sm:flex-row flex-col sm:gap-0 gap-8 justify-between py-10">
        {[0, 1, 2].map((index) => (
          <div className="space-y-4" key={index}>
            {projects.slice(index * 5, index * 5 + 5).map((item, idx) => (
              <div className="flex items-center space-x-2" key={idx}>
                <div className="text-yellow-500">
                  <Image
                    src={item.imageSrc}
                    height={44}
                    width={44}
                    alt="social"
                  />
                </div>
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
