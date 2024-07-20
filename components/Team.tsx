import React from "react";
import Image from "next/image";
import People from "@/public/assets/people.svg";

const Team = () => {
  return (
    <section className="sm:container sm:px-28 sm:py-20 px-4 py-16 bg-[#F2F4F7]">
      <div className="flex sm:flex-row flex-col-reverse items-center sm:gap-0 gap-8 justify-between">
        <div className="flex flex-col gap-8">
          <h1 className="font-bold sm:text-4xl text-3xl">Our team</h1>
          <p className="text-sm font-medium">
            Thousand is a full-cycle digital production company with its own
            product analytics, <br /> design, web and mobile development.
          </p>

          <div className="flex flex-row justify-between items-center">
            <div className="flex flex-col gap-2 ">
              <h3 className="font-bold sm:text-4xl text-3xl">28</h3>
              <p className="text-[#667085] font-medium text-sm">team members</p>
            </div>
            <div className="flex flex-col gap-2 ">
              <h3 className="font-bold sm:text-4xl text-3xl">+100</h3>
              <p className="text-[#667085] font-medium text-sm">Projects</p>
            </div>
            <div className="flex flex-col gap-2 ">
              <h3 className="font-bold sm:text-4xl text-3xl">7 Years</h3>
              <p className="text-[#667085] font-medium text-sm">in IT sphere</p>
            </div>
          </div>

          <p className="text-sm font-medium">
            All the necessary specialists - from a designer to a tester - are on
            our staff. We hire the <br /> best specialists in the market. It's
            expensive but worth it
          </p>
        </div>
        <div>
          <Image src={People} height={400} width={500} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Team;
