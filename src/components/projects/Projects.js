import React, { useState } from 'react';
import Title from '../layouts/Title';
import { projectOne, projectTwo, projectThree, projectFour, projectFive, projectSix } from "../../assets/index";
import ProjectsCard from './ProjectsCard';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'; // Import icons

const Projects = () => {
  // State to manage show more functionality
  const [showMore, setShowMore] = useState(false);

  // Function to toggle the project view
  const handleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <section id="projects" className="w-full py-20 border-b-[1px] border-b-black">
      <div className="flex justify-center items-center text-center">
        <Title title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK" des="My Projects" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        {/* Initially show only 3 projects */}
        <a href='https://github.com/Elvinsla/Electronics_Service'><ProjectsCard
          title="Electronics Service"
          des=" A Django-based web application for managing electronics repair services, including technician assignments, service tracking, and user authentication."
          src={projectOne}
        /></a>
        <a href='https://github.com/Elvinsla/netflix_clone'><ProjectsCard
          title="Netflix Clone"
          des=" A Django-based Netflix clone for streaming movies and shows, featuring user authentication, content management, and video playback functionality."
          src={projectTwo}
        /></a>
        <a href='https://github.com/Elvinsla/Matrimony-Website'><ProjectsCard
          title="Matrimony Website"
          des=" A Django-based matrimony website for user matchmaking, profile management, and communication between potential partners."
          src={projectThree}
        /></a>
         

        {/* Show more projects if showMore is true */}
        {showMore && (
          <>
            <a href='https://github.com/Elvinsla/Calorie-tracker'><ProjectsCard
              title="Calorie Tracker"
              des=" A Django-based calorie tracker that allows users to log meals, track calorie intake, and monitor their daily nutritional goals."
              src={projectFour}
            /></a>
            <a href='https://github.com/Elvinsla/jobforme-in-django'><ProjectsCard
              title="Job Portal "
              des=" A Django job portal website is a web application built with Django that allows users to post, search, and apply for job listings."
              src={projectFive}
            /></a>
            <a href='https://github.com/Elvinsla/Complaint-Management-System'><ProjectsCard
              title="Complaint Management"
              des=" A Django complaint management system website enables users to submit, track, and manage complaints efficiently through a centralized platform."
              src={projectSix}
            /></a>
          </>
        )}
      </div>

      {/* Styled Show More/Show Less Button with Icon */}
      <div className="flex justify-center mt-10">
        <button
          onClick={handleShowMore}
          className="flex items-center px-6 py-2 rounded-full bg-red-600 text-white hover:bg-red-800 transition-colors duration-300"
        >
          {showMore ? "Show Less" : "Show More"}
          <span className="ml-2">
            {showMore ? <FaChevronUp /> : <FaChevronDown />}
          </span>
        </button>
      </div>
    </section>
  );
};

export default Projects;
