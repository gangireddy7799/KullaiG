"use client";
import React, { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import EmailJSResponseStatus from "./EmailSuccessPopup.jsx";
import EmailJSResponseError from "./EmailJSResponseError.jsx";
import AnimatedText from "./AnimatedText.jsx";

const Contact = () => {
  const form = useRef();
  const [showSuccessMsg, setShowSuccessMsg] = useState(false);
  const [inView, setInView] = useState(false);
  const [showErrorMsg, setShowErrorMsg] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [userName, setUserName] = useState('');

  useEffect(() => {
    const updateWindowDimensions = () => {
      const newY = window.scrollY;
      const multiplier = window.innerWidth < 640 ? 1.2 : 1.3;
      setInView(newY > Math.ceil(window.innerHeight * 2 * multiplier) && newY < 1000);
    };

    window.addEventListener("scroll", updateWindowDimensions);

    // Clean up the event listener on component unmount
    return () => window.removeEventListener("scroll", updateWindowDimensions);
  }, []);

  const sendEmail = async (e) => {
    e.preventDefault();

    if (showErrorMsg) return; // Prevent sending email if there's an error message

    const name = e.target.user_name.value.trim();
    const email = e.target.user_email.value.trim();
    const message = e.target.message.value.trim();

    // Basic validation
    if (!name) {
      handleError('Kindly enter your Name');
      return;
    }
    if (!email) {
      handleError('Kindly enter your Email');
      return;
    }
    if (!message) {
      handleError('Kindly leave some message to me!');
      return;
    }

    setUserName(name);

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAIL_JS_SERVICE,
        process.env.NEXT_PUBLIC_EMAIL_JS_TEMPLATE,
        form.current,
        process.env.NEXT_PUBLIC_EMAIL_JS_FORM
      );
      e.target.reset();
      setShowSuccessMsg(true);
      setTimeout(() => {
        setShowSuccessMsg(false);
        setUserName('');
      }, 4500);
    } catch (error) {
      handleError('Something went wrong. Please try again later.');
    }
  };

  const handleError = (message) => {
    setErrorMsg(message);
    setShowErrorMsg(true);
    setTimeout(() => setShowErrorMsg(false), 2500);
  };

  return (
    <section className="my-20" id="contact">
      <div className="mt-16">
        <h2 className="font-bold text-8xl mb-32 w-full text-center lg:text-6xl xs:text-4xl md:mb-16">
          Contact me
        </h2>
      </div>
      <div className="w-full flex gap-4 items-center md:flex-col-reverse">
        <div className="w-1/2 h-full flex flex-col lg:w-full md:w-[90%] md:w-full">
          <form className="w-full h-full flex flex-col" ref={form} onSubmit={sendEmail}>
            <div className="w-auto flex flex-col mx-5 my-3 mt-2 gap-2">
              <label htmlFor="user_name">Name</label>
              <input
                type="text"
                id="user_name"
                name="user_name"
                className="w-full h-[35px] focus:outline-none focus:outline-dark rounded-lg px-3"
              />
            </div>
            <div className="w-auto flex flex-col mx-5 my-3 mt-2 gap-2 lg:w-[80%]">
              <label htmlFor="user_email">Email</label>
              <input
                type="email"
                id="user_email"
                name="user_email"
                className="w-full h-[35px] focus:outline-none focus:outline-dark rounded-lg px-3"
              />
            </div>
            <div className="w-auto flex flex-col mx-5 my-5 mt-2 gap-2 lg:w-[90%]">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                className="w-full h-[200px] focus:outline-none focus:outline-dark rounded-lg p-3"
              />
            </div>
            <div className="flex flex-col mx-5 my-5 mt-2 lg:w-[90%]">
              <input
                className="flex w-fit items-center rounded-lg border-2 border-solid bg-dark p-2.5 px-6 text-lg font-semibold capitalize text-light hover:border-dark hover:bg-transparent hover:text-dark dark:bg-light dark:text-dark dark:hover:border-light dark:hover:bg-dark dark:hover:text-light md:p-2 md:px-4 md:text-base"
                type="submit"
                value="Send"
              />
            </div>
          </form>
        </div>
        <div className="w-1/2 h-full flex ml-6 justify-center items-center lg:w-[80%] lg:mb-[30px] md:w-full">
          {inView && (
            <AnimatedText
              text="Share your dream, we'll make it a breathtaking reality together"
              className="!text-5xl text-center lg:!text-4xl sm:!text-2xl"
            />
          )}
        </div>
      </div>

      <EmailJSResponseStatus sender={userName} isVisible={showSuccessMsg} />
      <EmailJSResponseError errorMsg={errorMsg} isVisible={showErrorMsg} />
    </section>
  );
};

export default Contact;
