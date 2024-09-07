import React from 'react';
import { motion } from 'framer-motion';

const AnimatedText = ({ text }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {text}
    </motion.div>
  );
};

export default AnimatedText;
