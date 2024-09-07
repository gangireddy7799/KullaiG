import { motion } from 'framer-motion';
import React from 'react';

const LiIcons = ({ scrollYProgress }) => {
  return (
    <figure className="progress absolute top-1/2 left-1/2 pl-1 transform -translate-x-1/2 -translate-y-1/2 stroke-dark sm:left-[-10%]">
      <svg id="progress" width="75" height="50" viewBox="0 0 100 100">
        <circle
          cx="50"
          cy="40"
          r="20"
          pathLength="1"
          className="stroke-1 stroke-primary fill-none"
        />
        <motion.circle
          cx="50"
          cy="40"
          r="20"
          className="stroke-[5px] fill-light"
          style={{ pathLength: scrollYProgress }}
        />
        <circle
          cx="50"
          cy="40"
          r="10"
          pathLength="1"
          className="animate-pulse stroke-1 fill-primary"
        />
      </svg>
    </figure>
  );
};

export default LiIcons;
