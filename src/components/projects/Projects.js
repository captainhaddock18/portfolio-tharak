import React from 'react'
import Title from '../layouts/Title'
import { projectTwo, projectThree , react, stream, Java, Praise} from "../../assets/index";
import ProjectsCard from './ProjectsCard';


const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="These projects highlight my journey in learning different technologies."
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="Temple Ticketing System"
          des=" This project aims to provide a
                seamless and user-friendly platform for booking tickets to various temples. With a great user 
                interface and a single platform for ticket booking, users can easily purchase tickets to their 
                desired temples without hassle."
          src={projectThree}
          href = "https://github.com/captainhaddock18/Temple_Ticketing_System"
        />
        <ProjectsCard
          title="Text Transformer VS-Code Extension"
          des="A versatile Visual Studio Code extension that enhances your text editing 
          experience. Effortlessly insert sample texts in 12 Indian languages, perform precise search and replace operations, and 
          count word occurrences with accuracy. Transform your workflow with Text Transformer!"
          src={projectTwo}
          href = "https://github.com/captainhaddock18/TextTransformer-VS-Code-Extension"
        />
        <ProjectsCard
          title="Tab Help Google Extension"
          des="Tab Help is a versatile Google Chrome extension designed to enhance your browsing experience
           by providing convenient tools to save important points, take notes, and capture tab links from webpages. Stay organized and 
           productive while exploring the web with Tab Help!"
          src={react}
          href ="https://github.com/captainhaddock18/Tab-Help-Google-Extension"
        />
        <ProjectsCard
          title="Project PRAISE"
          des="The PRAISE team specializes in Personality Recognition Using AI on Semantics, 
           employing machine learning models to predict personality traits based on handwriting patterns.
           By analyzing and interpreting handwritten text, the team aims to provide valuable insights into 
           individuals' personalities."
          src={Praise}
          href = "https://github.com/captainhaddock18/PRAISE"
        />
        <ProjectsCard
          title="Java-Aiven Project"
          des="This repository contains a Java Spring Boot project where I explored building a web 
          application using the Spring Boot framework. The application is designed to connect to a 
          cloud-hosted MySQL database provided by Aiven, a cloud database service provider."
          src={Java}
          href = "https://github.com/captainhaddock18/Java-Aiven"
        />
        <ProjectsCard
          title="Stream Data Analysis"
          des="developing a framework and interface for a C++ application designed to analyze various graph-based algorithms. 
          This project involves implementing efficient data structures and optimizing algorithmic performance to 
          ensure comprehensive analysis."
          src={stream}
        />
      </div>
    </section>
  );
}

export default Projects