import React, { useEffect } from 'react';
import { aboutText } from '../constants/constant';
import AnimatedText from './AnimatedText'; // Ensure this is correctly imported if used
import { animate, motion, useMotionValue, useTransform } from 'framer-motion';

const About = ({ className }) => {
  const { p1, p2, p3, yearOfExperience, projectsCounts } = aboutText;
  const countYOE = useMotionValue(0);
  const countProj = useMotionValue(0);
  const animYOE = useTransform(countYOE, value => Math.round(value));
  const animProj = useTransform(countProj, value => Math.round(value));

  useEffect(() => {
    const controlYOE = animate(countYOE, yearOfExperience, { duration: 1 });
    const controlProj = animate(countProj, projectsCounts, { duration: 1.8 });

    return () => {
      controlYOE.stop();
      controlProj.stop();
    };
  }, [countYOE, countProj, yearOfExperience, projectsCounts]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className={`flex flex-col place-content-center z-5 bg-light scroll-mt-[88px] ${className}`}
      id="about"
    >
      <motion.div
        initial={{ y: 20, opacity: 0.3 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="flex flex-col"
      >
        <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">BIOGRAPHY</h2>
      </motion.div>
      <div className="flex flex-col h-full">
        <div className="w-full flex flex-col gap-3 md:order-2 md:col-span-8">
          <motion.div
            initial={{ y: 20, opacity: 0.2 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="font-medium md:text-lg sm:text-base xs:text-sm"
          >
            {p1}
          </motion.div>
          <motion.div
            initial={{ y: 20, opacity: 0.1 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="font-medium md:text-lg sm:text-base xs:text-sm"
          >
            {p2}
          </motion.div>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="font-medium md:text-lg sm:text-base xs:text-sm"
          >
            {p3}
          </motion.div>
        </div>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.8 }}
          className="w-full mt-6 flex items-center justify-center gap-4"
        >
          <div className="w-full h-full flex flex-col justify-center items-center">
            <span className="inline-block text-7xl font-bold lg:text-6xl sm:text-5xl xs:text-4xl">
              <motion.span>{animProj}</motion.span>+
            </span>
            <h2 className="mb-4 text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
              Projects Completed
            </h2>
          </div>
          <div className="w-full h-full flex flex-col justify-center items-center">
            <span className="inline-block text-7xl font-bold lg:text-6xl sm:text-5xl xs:text-4xl">
              <motion.span>{animYOE}</motion.span>+
            </span>
            <h2 className="mb-4 text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
              Year of Experience
            </h2>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;
