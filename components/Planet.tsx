import React from "react";
import Image from "next/image";
import Planets from "@/public/assets/planet.svg";
import Side from "@/public/assets/side.svg";
import { course, WEB_TECH, MOBILE_TECH } from "@/constant/index";


const Planet = () => {
  const planetsArray = new Array(6).fill(null);

  return (
    <section className="sm:container sm:px-14 sm:py-16 px-4 py-6">
      <div className="flex flex-row flex-wrap justify-between items-center border-t border-b border-custom-gray sm:py-14 py-5">
        {planetsArray.map((_, index) => (
          <Image
            key={index}
            src={Planets}
            width={163}
            height={72}
            alt="planet"
          />
        ))}
      </div>

      <div className="mx-auto sm:px-16 sm:py-10 px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 sm:gap-52 gap-10">
          <div>
            <h2 className="text-2xl font-bold mb-4">Full development cycle</h2>
            <p className="text-gray-600 mb-4">We use proven technologies</p>
            <h3 className="text-xl font-semibold mb-2">Web</h3>
            <p className="text-gray-800 mb-4">
              PHP <span className="text-[#91b65f]">/</span> Javascript{" "}
              <span className="text-[#91b65f]">/</span> Node.JS{" "}
              <span className="text-[#91b65f]">/</span> Web Socket{" "}
              <span className="text-[#91b65f]">/</span> Socket.Io{" "}
              <span className="text-[#91b65f]">/</span> Vue.js{" "}
              <span className="text-[#91b65f]">/</span>
              Nuxt <span className="text-[#91b65f]">/</span> MySQL{" "}
              <span className="text-[#91b65f]">/</span> Laravel{" "}
              <span className="text-[#91b65f]">/</span> GO lang
              <span className="text-[#91b65f]">/</span> django
              <span className="text-[#91b65f]">/</span> Python
            </p>
            <h3 className="text-xl font-semibold mb-2">Mobile</h3>
            <p className="text-gray-800">
              Swift <span className="text-[#91b65f]">/</span> Kotlin{" "}
              <span className="text-[#91b65f]">/</span> Alamofire{" "}
              <span className="text-[#91b65f]">/</span> Firebase{" "}
              <span className="text-[#91b65f]">/</span> CoreData{" "}
              <span className="text-[#91b65f]">/</span> Room{" "}
              <span className="text-[#91b65f]">/</span> Realm{" "}
              <span className="text-[#91b65f]">/</span>
              Coroutines <span className="text-[#91b65f]">/</span> RxJava{" "}
              <span className="text-[#91b65f]">/</span> RxSwift{" "}
              <span className="text-[#91b65f]">/</span> Unit Test{" "}
              <span className="text-[#91b65f]">/</span> Navigation
            </p>
          </div>
          <div>
            <ul className="space-y-4">
              {course.map((item, index) => (
                <li key={index} className="flex flex-row gap-2">
                  <a href="#" className="text-black hover:underline">
                    {item}
                  </a>
                  <Image src={Side} width={7} height={12} alt="side" />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Planet;
