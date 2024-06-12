import React from 'react'
import { FaInstagram, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { Contact } from "../../assets/index";

const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[45%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-7 justify-center">
      <img
        className="w-full h-64 object-cover rounded-lg mb-2"
        src={ Contact}
        alt="contactImg"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">Tharakadatta Hegde</h3>
        <p className="text-lg font-normal text-gray-400">
          A Passionate Developer.
        </p>
        <p className="text-base text-gray-400 tracking-wide">
          You can contact me on any of the following mediums!
        </p>

        <p className="text-base text-gray-400 flex items-center gap-2">
          Email: <span className="text-lightText">b22es007@iitj.ac.in</span>
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-base uppercase font-titleFont mb-4">Connect with me on</h2>
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
    </div>
  );
}

export default ContactLeft