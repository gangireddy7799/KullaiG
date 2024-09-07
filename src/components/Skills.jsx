import React from "react";
import { skills } from "../constants/constant";
import { motion } from "framer-motion";
import Image from "next/image";

const Skills = () => {
  return (
    <section id="skills">
      <div className="my-6">
        <h2 className="font-bold text-8xl mb-32 w-full text-center lg:text-6xl lg:mt-10 xs:text-4xl md:mb-16">
          Skills
        </h2>
        <div className="relative flex flex-wrap justify-center items-center gap-10 w-[75%] mx-auto lg:w-[90%] md:w-full md:gap-9 md:items-start">
          {skills.map(({ name, img }, index) => (
            <motion.div
              key={`${name}-${index}`}
              className="flex items-center justify-center"
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1 + 0.1 * index,
                staggerChildren: 0.08,
              }}
            >
              <div className="h-[35px] w-[35px]">
                <Image
                  src={img}
                  alt={name}
                  width={30}
                  height={30}
                  className="w-30 h-auto lg:w-25 md:w-20 sm:w-10"
                />
              </div>
              <div className="pl-3 md:pl-2">
                <p>{name}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
