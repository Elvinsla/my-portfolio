import React from 'react'
import { AiFillAppstore } from "react-icons/ai";
import { FaFutbol, FaGlobe } from "react-icons/fa";
import { SiProgress, SiAntdesign } from "react-icons/si";
import Title from '../layouts/Title';
import Card from './Card';

const Features = () => {
  return (
    <section
      id="features"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <Title title="Features" des="What I Do" />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
        <Card
          title="Frontend Development"
          des="Frontend development, in my context, refers to building user interfaces and experiences using technologies like React, HTML, and CSS to create dynamic and responsive web applications."
         
        />
        <Card
          title="Backend Development"
          des="In my development context, backend development involves using Django and PostgreSQL to create robust server-side applications that manage data, handle business logic, and support frontend functionalities."
          icon={<AiFillAppstore />}
        />
        <Card
          title="SEO Optimisation"
          des="
SEO optimization is the process of enhancing a website's visibility and ranking on search engines through strategic use of keywords, content quality, and technical improvements."
          icon={<SiProgress />}
        />
        <Card
          title="Full stack Development"
          des="Full stack development encompasses both frontend and backend development, enabling a developer to build complete web applications by handling everything from user interfaces to server-side logic and databases."
          icon={<FaFutbol />}
        />
        <Card
          title="Web Development"
          des="Web development is the process of building, creating, and maintaining websites and web applications that run on the internet, encompassing both frontend and backend development."
          icon={<SiAntdesign />}
        />
        <Card
          title="Hosting Websites"
          des="Hosting websites involves storing and serving website files on servers, making them accessible to users over the internet."
          icon={<FaGlobe />}
        />
      </div>
    </section>
  );
}

export default Features