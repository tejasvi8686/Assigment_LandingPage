import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Faq = () => {
  return (
    <div className="sm:container sm:px-28 sm:py-20 px-4 py-16">
      <h1 className="font-bold sm:text-4xl text-2xl pb-8">FAQ</h1>
      <div className="flex sm:flex-row flex-col  sm:gap-5 gap-0">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>
              What is the cost of a mobile application?
            </AccordionTrigger>
            <AccordionContent>
              Development terms directly depend on the requirements for the
              mobile application, the characteristics of the company, as well as
              the wishes of the customer. Average development time from start to
              finished application: Medium projects up to 3 months. Large
              projects about 4-6 months. To get a more accurate estimate of the
              project completion time, it is necessary to determine the main
              task of the application, think over its logic and functionality.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>
              Do you provide a guarantee for the mobile application?
            </AccordionTrigger>
            <AccordionContent>
              Development terms directly depend on the requirements for the
              mobile application, the characteristics of the company, as well as
              the wishes of the customer. Average development time from start to
              finished application: Medium projects up to 3 months. Large
              projects about 4-6 months. To get a more accurate estimate of the
              project completion time, it is necessary to determine the main
              task of the application, think over its logic and functionality.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-3">
            <AccordionTrigger>How long will development take?</AccordionTrigger>
            <AccordionContent>
              Development terms directly depend on the requirements for the
              mobile application, the characteristics of the company, as well as
              the wishes of the customer. Average development time from start to
              finished application: Medium projects up to 3 months. Large
              projects about 4-6 months. To get a more accurate estimate of the
              project completion time, it is necessary to determine the main
              task of the application, think over its logic and functionality.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>
              I will not tell my idea, do you guarantee confidentiality?
            </AccordionTrigger>
            <AccordionContent>
              Development terms directly depend on the requirements for the
              mobile application, the characteristics of the company, as well as
              the wishes of the customer. Average development time from start to
              finished application: Medium projects up to 3 months. Large
              projects about 4-6 months. To get a more accurate estimate of the
              project completion time, it is necessary to determine the main
              task of the application, think over its logic and functionality.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default Faq;
