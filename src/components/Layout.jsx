import React from 'react';

const Layout = ({ children, className = '' }) => {
  return (
    <div
      className={`w-full h-full inline-block z-0 mt-[88px] bg-light px-32 ${className} lg:px-16 relative z-1 md:px-12 sm:px-8`}
    >
      {children}
    </div>
  );
};

export default Layout;
