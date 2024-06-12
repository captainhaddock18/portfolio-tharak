import React, { useState } from 'react'
import { Link } from "react-scroll";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import {  FaInstagram, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { navLinksdata } from '../../constants';
import { useTypewriter, Cursor } from "react-simple-typewriter";

const Navbar = () => {
  const [showMenu, setShowMenu]=useState(false)
  const [text] = useTypewriter({
    words: ["Tharak Hegde", "Tharak Hegde"],
    loop: true,
    typeSpeed: 50,
    deleteSpeed: 50,
    delaySpeed: 3000,
  });
  return (
    <div className="w-full h-24 sticky top-0 z-50 bg-bodyColor mx-auto flex justify-between items-center font-titleFont border-b-[1px] border-b-gray-600">

      <div>
      <Link
                      onClick={() => setShowMenu(false)}
                      activeClass="active"
                      to="home"
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                    >
    
    <h1 className='text-2xl capitalize font-bold font-titleFont tracking-wide text-textGreen'>
      {text}
      <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
      </h1>
      </Link>

      </div>
      <div>
        <ul className="hidden mdl:inline-flex items-center gap-6 lg:gap-10 mr-5">
          {navLinksdata.map(({ _id, title, link }) => (
            <li
              className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-textGreen duration-300 "
              key={_id}
            >
              <Link
                activeClass="active"
                to={link}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>
        <span
          onClick={() => setShowMenu(!showMenu)}
          className="text-xl mdl:hidden bg-black w-10 h-10 inline-flex items-center justify-center rounded-full text-designColor cursor-pointer"
        >
          <FiMenu />
        </span>
        {showMenu && (
          <div className="w-[80%] h-screen overflow-scroll absolute top-0 left-0 bg-gray-900 p-4 scrollbar-hide">
            <div className="flex flex-col gap-8 py-2 relative">
              <div>

                <p className="text-sm text-gray-400 mt-2">
                  
                </p>
              </div>
              <ul className="flex flex-col gap-4">
                {navLinksdata.map((item) => (
                  <li
                    key={item._id}
                    className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300"
                  >
                    <Link
                      onClick={() => setShowMenu(false)}
                      activeClass="active"
                      to={item.link}
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col gap-4">
                <h2 className="text-base uppercase font-titleFont mb-4">
                  Find me in
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
              <span
                onClick={() => setShowMenu(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-textGreen duration-300 text-2xl cursor-pointer"
              >
                <MdClose />
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar