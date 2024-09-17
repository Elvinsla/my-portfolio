import React from 'react'
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FaGithub, FaWhatsapp, FaLinkedinIn, FaReact, FaInstagram } from "react-icons/fa";
import { SiDjango, SiCss3, SiHtml5 } from "react-icons/si";


const LeftBanner = () => {
    const [text] = useTypewriter({
      words: ["Django Developer.", "Python Developer.", "Web Developer."],
      loop: true,
      typeSpeed: 20,
      deleteSpeed: 10,
      delaySpeed: 2000,
    });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">WELCOME TO MY WORLD</h4>
        <h1 className="text-5xl font-bold text-white">
          Hi, I'm <span className="text-designColor capitalize">Vasanthkumar</span>
        </h1>
        <h2 className="text-3xl font-bold text-white">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
          Python developer with expertise in Django for backend development and React for frontend. Proficient in HTML, CSS, and SQLite. Committed to delivering high-quality web applications with a strong foundation in software development principles.
        </p>
      </div>
      <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me in
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <a href='https://github.com/Elvinsla'><FaGithub /></a>
            </span>
            <span className="bannerIcon">
              <a href='https://wa.me/919361947506'><FaWhatsapp /></a>
            </span>
            <span className="bannerIcon">
              <a href='https://www.linkedin.com/in/vasanthkumar-p-89a048301/'><FaLinkedinIn /></a>
            </span>
            <span className="bannerIcon">
              <a href='https://www.instagram.com/mr_devil_admire/'><FaInstagram /></a>
            </span>
          </div>
        </div>
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            BEST SKILL ON
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <FaReact />
            </span>
            <span className="bannerIcon">
              <SiDjango />
            </span>
            <span className="bannerIcon">
              <SiHtml5 />
            </span>
            <span className="bannerIcon">
              <SiCss3 />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftBanner