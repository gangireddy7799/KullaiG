import React, { useEffect, useState } from "react";
import { navBarItems } from "../constants/constant";
import { motion } from "framer-motion";
import { GithubIcon, LinkedInIcon, TwitterIcon } from "./icons";
import { Link } from "react-scroll";

const MotionLink = motion(Link);

const CustomLink = ({ dragTo, text, closeSideBar, className = "" }) => {
  return (
    <MotionLink
      to={dragTo}
      smooth={true}
      offset={-100}
      onClick={closeSideBar}
      className={`${className} relative group hover:cursor-pointer sm:flex sm:flex-col sm:my-5`}
    >
      {text}
      <span
        className="h-[1px] inline-block w-0 bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300"
      >
        &nbsp;
      </span>
    </MotionLink>
  );
};

const NavBar = () => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const [isMidScreen, setIsMidScreen] = useState(false);

  useEffect(() => {
    const updateIsMidScreen = () => {
      setIsMidScreen(window.innerWidth < 640);
    };

    updateIsMidScreen(); // Initialize the state

    window.addEventListener("resize", updateIsMidScreen);

    return () => window.removeEventListener("resize", updateIsMidScreen);
  }, []);

  return (
    <>
      <div
        className="hidden fixed w-full p-5 pt-10 z-10 items-right justify-center sm:fixed sm:flex sm:flex-col sm:px-8 backdrop-blur-md"
        onClick={() => setIsSideBarOpen(!isSideBarOpen)}
        aria-expanded={isSideBarOpen}
        aria-label="Toggle Sidebar"
      >
        <span
          className={`w-5 h-1 pr-5 block absolute bg-black rounded-sm transition-transform duration-500 ${
            isSideBarOpen ? "rotate-45 translate-y-1" : "-translate-y-1.5"
          }`}
        />
        <span
          className={`w-5 h-1 pr-5 block absolute bg-black rounded-sm transition-opacity duration-500 ${
            isSideBarOpen ? "opacity-0 left-0" : "opacity-100 left-8"
          }`}
        />
        <span
          className={`w-5 h-1 pr-5 block absolute bg-black rounded-sm transition-transform duration-500 ${
            isSideBarOpen ? "-rotate-45 translate-y-1" : "translate-y-1.5"
          }`}
        />
      </div>

      {(isMidScreen ? isSideBarOpen : !isMidScreen) && (
        <header
          className="w-full px-32 py-8 z-10 font-medium flex justify-between items-center fixed backdrop-blur-md bg-opacity-50 bg-red lg:px-16 z-1 md:px-12 sm:left-1/2 sm:top-[52%] sm:transform sm:-translate-x-1/2 sm:-translate-y-1/2 sm:w-[80%] sm:h-[85%] sm:flex-col sm:justify-center sm:backdrop-blur-lg sm:rounded sm:px-8"
          onClick={(e) => e.stopPropagation()}
        >
          <nav>
            {navBarItems.map(({ dragTo, text }, ind) => (
              <CustomLink
                className={`${
                  ind === 0 ? "mr-5 md:mx-3" : "mx-5 md:mx-3"
                }`}
                key={ind}
                dragTo={dragTo}
                text={text}
                closeSideBar={() => setIsSideBarOpen(false)}
              />
            ))}
          </nav>
          <nav className="flex items-center justify-center flex-wrap sm:mt-10 sm:gap-5">
            <motion.a
              className="mr-5 h-6 w-6 sm:h-8 sm:w-8"
              href="https://github.com/vinov1999"
              target="_blank"
              whileTap={{ scale: 0.9 }}
              whileHover={{ y: -2 }}
              aria-label="Github"
            >
              <GithubIcon className="w-6" />
            </motion.a>
            <motion.a
              className="mr-5 h-6 w-6 sm:h-8 sm:w-8"
              href="https://www.linkedin.com/in/vinoth-kumar-v281099/"
              target="_blank"
              whileTap={{ scale: 0.9 }}
              whileHover={{ y: -2 }}
              aria-label="LinkedIn"
            >
              <LinkedInIcon className="w-6" />
            </motion.a>
            <motion.a
              className="mr-5 h-6 w-6 sm:h-8 sm:w-8"
              href="https://twitter.com/Vinoth281099"
              target="_blank"
              whileTap={{ scale: 0.9 }}
              whileHover={{ y: -2 }}
              aria-label="Twitter"
            >
              <TwitterIcon className="w-6" />
            </motion.a>
          </nav>
        </header>
      )}
    </>
  );
};

export default NavBar;
