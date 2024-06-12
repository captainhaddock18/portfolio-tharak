import React from 'react';
import { FaInstagram, FaGithub, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full py-20 h-auto border-b-[1px] border-b-black grid grid-cols-2 md:grid-cols-2 lgl:grid-cols-2 gap-10">
      <div className="w-full h-full flex flex-col gap-8">
        <h1 className='text-3xl capitalize font-bold font-titleFont tracking-wide text-textGreen'>Tharak Hegde</h1>
        <div className="flex justify-between items-center w-full">
          <div className="flex gap-5">
            <a href='https://www.linkedin.com/in/tharakadatta-hegde-1b6041256/'> 
              <span className="bannerIcon">
                <FaLinkedinIn />
              </span>
            </a> 
            <a href='https://github.com/captainhaddock18'>
              <span className="bannerIcon">
                <FaGithub />
              </span>
            </a>
            <a href='https://www.instagram.com/tharak_hegde/'>
              <span className="bannerIcon">
                <FaInstagram />
              </span>
            </a> 
          </div>

        </div>
      </div>
      <div className="flex-1 text-right">
      <p className="text-base text-gray-400">
      I am very interested in learning new technologies and evolving with them. Please feel free to contact me if you believe
       I am capable of taking up any opportunity. I am eager to contribute and grow professionally in a dynamic environment.
            </p>
          </div>
    </div>
  );
}

export default Footer;
