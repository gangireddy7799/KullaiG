import React from 'react';
import { Warning } from './icons'; // Ensure this path is correct
import { AnimatePresence, motion } from 'framer-motion';

const EmailJSResponseError = ({ errorMsg, isVisible }) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 35 }}
          transition={{ duration: 0.8 }}
          className="fixed bottom-0 left-0 w-full h-[35px] bg-red-100 text-red-600 font-medium flex items-center justify-center p-5"
        >
          <Warning className="w-6 h-6" />
          <p className="pl-2 text-sm">
            {errorMsg || 'Something went wrong, please try again later!'}
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default EmailJSResponseError;
