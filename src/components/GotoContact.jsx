import React from "react";
import { Link } from "react-scroll";

const GotoContact = () => {
  return (
    <Link
      to="contact"
      smooth={true}
      offset={-100}
      className="ml-4 text-lg font-medium capitalize cursor-pointer text-dark underline dark:text-light md:text-base"
      aria-label="Go to contact section"
    >
      Contact Me
    </Link>
  );
};

export default GotoContact;
