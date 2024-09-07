import React, { useEffect, useRef, useState } from "react";
import { projects } from "@/constants/constant";
import { useScroll, motion } from "framer-motion";
import LiIcons from "./LiIcons";

const ProjectDetails = ({ project, index, isSmallWindow }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["center end", "center center"]
  });

  const { projectName, codeLink, company, description } = project;

  return (
    <motion.li
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className={`my-8 first:mt-0 last:mb-0 mx-auto flex flex-col justify-between md:w-[70%] ${index % 2 === 0 ? 'items-start justify-end' : 'items-end justify-start'}`}
    >
      <div ref={ref} className={`flex flex-col ${isSmallWindow ? 'items-start justify-end' : index % 2 === 0 ? 'items-start justify-end' : 'items-end justify-start'}`}>
        <div className={`w-full relative flex ${index % 2 === 1 && 'justify-end'}`}>
          <h3 className={`capitalize font-bold text-2xl sm:text-xl xs:text-lg ${isSmallWindow ? 'text-left ml-2 w-full' : index % 2 === 0 ? 'text-right' : 'text-left ml-2'}`}>
            <LiIcons scrollYProgress={scrollYProgress} />
            {codeLink ? <a href={codeLink} target="_blank" rel="noopener noreferrer">{projectName}</a> : projectName} - {company}
          </h3>
        </div>
        <p className={`font-medium mt-2 md:text-sm ${isSmallWindow ? 'text-left w-full' : index % 2 === 0 ? 'text-right' : 'text-left'}`}>
          {description}
        </p>
      </div>
    </motion.li>
  );
};

const Projects = () => {
  const ref = useRef(null);
  const [innerWidth, setInnerWidth] = useState(0);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'center start']
  });

  useEffect(() => {
    const updateWindowDimensions = () => {
      setInnerWidth(window.innerWidth);
    };

    // Set initial window dimensions
    updateWindowDimensions();

    window.addEventListener("resize", updateWindowDimensions);

    // Clean up event listener on component unmount
    return () => window.removeEventListener("resize", updateWindowDimensions);
  }, []);

  return (
    <section id="projects">
      <div>
        <div className="my-6">
          <h2 className="font-bold text-8xl mb-32 w-full text-center lg:text-6xl lg:mt-10 xs:text-4xl md:mb-16">
            Projects
          </h2>
          <div className="relative w-[75%] mx-auto lg:w-[90%] md:w-full">
            <div ref={ref} className="absolute left-1/2 top-20 transform -translate-x-1/2 -translate-y-1/2 w-[40px] h-full"></div>
            <motion.div
              style={{ scaleY: scrollYProgress }}
              className={`absolute left-1/2 top-0 transform -translate-x-1/2 -translate-y-1/2 w-[4px] h-full bg-dark origin-top ${innerWidth < 480 ? 'left-[10.5%]' : innerWidth < 640 ? 'left-[8%]' : ''}`}
            ></motion.div>
            <ul className="w-full flex flex-col items-start justify-between xs:ml-2">
              {projects.map((project, index) => (
                <ProjectDetails
                  key={index}
                  project={project}
                  index={index}
                  isSmallWindow={innerWidth < 640}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
