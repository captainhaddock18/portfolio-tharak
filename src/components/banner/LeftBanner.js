import React from 'react'
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FaInstagram, FaGithub, FaLinkedinIn, FaReact } from "react-icons/fa";
import { SiNodedotjs, SiMongodb,SiDocker } from "react-icons/si";

const LeftBanner = () => {
    const [text] = useTypewriter({
      words: ["a Tech Enthusiast.","a Passionate Developer.",  "an AI & ML Explorer."],
      loop: true,
      typeSpeed: 50,
      deleteSpeed: 50,
      delaySpeed: 2000,
    });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h1 className="text-6xl font-bold text-white">
          Hi, I'm <span className="text-textGreen capitalize">Tharak!</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
        Passionate about technology, I am on a continuous journey of learning and exploring development and deployment. My fascination 
        with cloud computing drives me to understand 
        scalable and efficient systems. Occasionally, I delve into AI and ML, harnessing their power to create intelligent applications.
        </p>
      </div>
      <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Connect with me on
          </h2>
          <div className="flex gap-4">
           <a href='https://www.linkedin.com/in/tharakadatta-hegde-1b6041256/'> 
           <span className="bannerIcon">
              <FaLinkedinIn />
            </span></a> 
           <a href='https://github.com/captainhaddock18'>
           <span className="bannerIcon">
              <FaGithub />
            </span></a>
            <a href='https://www.instagram.com/tharak_hegde/'>
            <span className="bannerIcon">
              <FaInstagram />
            </span>
            </a>            



          </div>
        </div>
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
              Leading skill in
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <FaReact />
            </span>
            <span className="bannerIcon">
              <SiMongodb />
            </span>
            <span className="bannerIcon">
              <SiNodedotjs />
            </span>
            <span className="bannerIcon">
              <SiDocker />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftBanner