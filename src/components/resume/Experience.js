import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div>

      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">OCT 12, 2023 TO PRESENT</p>
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Security Engineer III"
            subTitle="GOVERNMENT OFFICE (OCT 12, 2023 TO PRESENT)"
            result="Addis Ababa, Bole"
            des="Ethiopian government offices provide administrative support, regulatory functions, and citizen services, including civil registration and licensing, to enhance governance and public sector efficiency. They implement national policies, facilitate development, and ensure legal compliance"
          />
          <ResumeCard
            title="IT Professional I and Front-end Developer"
            subTitle="GOVERNMENT OFFICE (JUNE 29, 2020 TO MAY 08 , 2022 G.C)"
            result="Addis Ababa, Bole"
            des="Ethiopian government offices provide administrative support, regulatory functions, and citizen services, including civil registration and licensing, to enhance governance and public sector efficiency. They implement national policies, facilitate development, and ensure legal compliance"
          />
          <ResumeCard
            title="Graphics Designer"
            subTitle="Private Company - (Aug 2021 - Aug 2022)"
            result="Addis Ababa, 22 Golagol  "
            des="QR Anbessa provides software solutions to restaurants and hotels to help improve operations, increase sales, create a better guest experience, and much much more."
          />
        </div>
      </div>
<div>
        </div>
      </div>
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">March 25, 2024 G.C</p>
          <h2 className="text-3xl md:text-4xl font-bold">Trainer Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="ASSET MANAGEMENT SYSTEM TRAINING"
            subTitle="(March 25, 2024 G.C)"
            result="At Addis Ababa University 4 kilo Campus"
            des="This is a 12-day training that has been organized by the Addis Ababa City Administration, and we have seen how to register items, users, generate monthy report and more using the system."
          />
          <ResumeCard
            title="BASIC COMPUTER TRAINING"
            subTitle="(April 7 - April 11, 2023 G.C)"
            result="At Bole City Administration "
            des="5 days of training by the Bole Sub City Administration to improve the personal skills of employees and make them more efficient at work."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
