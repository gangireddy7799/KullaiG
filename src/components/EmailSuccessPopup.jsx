import React from 'react';
import { CheckMark } from './icons'; // Ensure this path is correct
import { AnimatePresence, motion } from 'framer-motion';

const EmailSuccessPopup = ({ sender, isVisible }) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 35 }}
          transition={{ duration: 0.8 }}
          className="fixed bottom-0 left-0 w-full h-[50px] bg-green-100 text-green-600 font-medium flex items-center justify-center p-4"
        >
          <CheckMark className="w-6 h-6" />
          <p className="pl-2 text-sm">
            Hello <span className="font-bold">{sender}</span>, your mail was successfully received. We will get back to you soon.
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default EmailSuccessPopup;
