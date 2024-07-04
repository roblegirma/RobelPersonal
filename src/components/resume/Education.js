import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">JULY, 2019 G.C</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="BSc in Computer Science"
            subTitle="University of Bahir Dar JULY, 2019 G.C"
            result="CGPA 3.24/4"
            des="Learning is provided by university to prepare students to study in various sectors to work in the real world."
          />
          <ResumeCard
            title="Office Machine Maintenance"
            subTitle="APP TECH July 10, 2021 G.C"
            result="5/5"
            des="Premier Training Institutes in Addis Ababa with detail experience in the field of IT and Non IT trainings."
          />
          <ResumeCard
            title="Service Delivery and Professional Ethics"
            subTitle="Addis Ababa Leadership Academy Oct 24 -28/022 G.C."
            result="5/5"
            des="International Leadership Institute is a major research-intensive higher institution specializing in leadership and management studies in Addis Ababa, Ethiopia."
          />
        </div>
      </div>
      {/* part Two */}

     
    </motion.div>
  );
};

export default Education;
