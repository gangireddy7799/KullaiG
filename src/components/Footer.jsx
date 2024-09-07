import React from 'react';

const Footer = () => {
  return (
    <footer className="relative py-8 w-full px-32 text-sm font-light lg:px-16 md:px-12 sm:px-8 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-100">
      <hr className="absolute top-0 left-0 w-full border-t border-gray-300 dark:border-gray-600" />
      <div className="relative z-10 text-center">
        &copy; {new Date().getFullYear()} All Rights Reserved
      </div>
    </footer>
  );
}

export default Footer;
