import React from "react";
import Form from "./Form";

const Discuss = () => {
  return (
    <section className="sm:container sm:px-24 sm:py-14 px-4 py-6 bg-custom-gradient">
      <div className="flex sm:flex-row flex-col justify-between">
        <div className="sm:pb-0 pb-4">
          <h2 className="font-bold text-3xl text-white leading-[144%] tracking-[0.33%] pb-6">
            Let's discuss <br /> Your project
          </h2>
          <p className="text-sm font-medium text-white">
            Let's figure out how to create an effective application, <br /> its
            cost and terms of its development
          </p>
        </div>
        <div className="">
          <Form containerClass="p-6 rounded-lg shadow-custom sm:w-[500px]" prop="Discuss the Project" bgclass="bg-[#FFB900] hover:bg-yellow" />
        </div>
      </div>
    </section>
  );
};

export default Discuss;
