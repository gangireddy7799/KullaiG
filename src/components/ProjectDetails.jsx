import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcons from "./LiIcons";

// Component to display details of each project
const ProjectDetails = ({ project, index, isSmallWindow }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });

  if (!scrollYProgress) {
    return null; // Return null if scrollYProgress is undefined
  }

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
            {codeLink ? (
              <a href={codeLink} target="_blank" rel="noopener noreferrer">{projectName}</a>
            ) : (
              projectName
            )} - {company}
          </h3>
        </div>
        <p className={`font-medium mt-2 md:text-sm ${isSmallWindow ? 'text-left w-full' : index % 2 === 0 ? 'text-right' : 'text-left'}`}>
          {description}
        </p>
      </div>
    </motion.li>
  );
};

export default ProjectDetails;
