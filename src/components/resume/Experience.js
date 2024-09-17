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
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2019 - 2024</p>
          <h2 className="text-3xl md:text-4xl font-bold">Certifications</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Full Stack Python Developer Internship"
            subTitle="iGeekS Technologies - (2024)"
            result="Bangalore"
            des="An internship at iGeeks Technologies offers hands-on experience in software development, allowing interns to apply technical skills and gain industry insights."
          />
          <ResumeCard
            title="Web Developer"
            subTitle="Microsoft - (2024)"
            result="Remote"
            des="Web development in a Microsoft training program focuses on building and deploying web applications using Microsoft's tools, frameworks, and cloud services."
          />
          <ResumeCard
            title="Introduction to SQL"
            subTitle="Simplilearn SkillUp - (2024)"
            result="Remote"
            des="Simplilearn SkillUp SQL provides free foundational training in SQL, teaching essential database querying and management skills."
          />
        </div>
      </div>
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2019 - 2024</p>
          <h2 className="text-3xl md:text-4xl font-bold">Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Python for Beginners"
            subTitle="Simplilearn SkillUp (2024)"
            result="Remote"
            des="Simplilearn SkillUp Python offers free beginner-level training, covering the fundamentals of Python programming for various applications."
          />
          <ResumeCard
            title="JavaScript for Beginners Course"
            subTitle="Simplilearn SkillUp (2024)"
            result="Remote"
            des="Simplilearn SkillUp JavaScript provides free training on the basics of JavaScript, enabling learners to develop interactive web applications."
          />
          <ResumeCard
            title="Version Control"
            subTitle="Simplilearn SkillUp (2024)"
            result="remote"
            des="Simplilearn SkillUp GitHub offers free training on using GitHub for version control, collaboration, and managing code repositories."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
