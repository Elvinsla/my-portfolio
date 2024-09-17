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
          <p className="text-sm text-designColor tracking-[4px]">2019 - 2024</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Master of Computer Application"
            subTitle="Anna Univercity (2022 - 2024)"
            result="8.25/10"
            des="The training provided by universities in order to prepare people to work in various sectors of the economy or areas of culture."
          />
          <ResumeCard
            title="Bachelore of Computer Application"
            subTitle="Islamiah College (2019 - 2024)"
            result="8.0/10"
            des="Higher education is tertiary education leading to award of an academic degree. Higher education, also called post-secondary education."
          />
          <ResumeCard
            title="Secondary School Education"
            subTitle="HHSS (2018 - 2019)"
            result="7.0/10"
            des="Secondary education or post-primary education covers two phases on the International Standard Classification of Education scale."
          />
        </div>
      </div>
      {/* part Two */}

      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2019 - 2024</p>
          <h2 className="text-3xl md:text-4xl font-bold">Internship & Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Python Full Stack Developer"
            subTitle="IGeekS Technologies - (2024)"
            result="Bangalore"
            des="As a Python full stack developer, I create complete web applications using Python for the backend and React for the frontend, ensuring efficient data handling and user experiences."
          />
          <ResumeCard
            title="Diploma in Computer Application"
            subTitle="CSC - (2019)"
            result="Ambur"
            des="A diploma in computer applications equips students with foundational skills in software development and database management, preparing them for entry-level tech positions."
          />
          <ResumeCard
            title="Ethical Hacking "
            subTitle="Islamiah College - (2021)"
            result="Vaniyambadi"
            des="An ethical hacking workshop provides participants with hands-on training in cybersecurity techniques to identify vulnerabilities and protect systems from malicious attacks."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Education;
