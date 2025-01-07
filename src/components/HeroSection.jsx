import { useState, useEffect } from "react";
import SocialLinks from "./SocialLinks";
import MyPhoto from "../assets/others/my-photo.jpg";
import ResumeDownloader from "./ResumeDownloader";
import { motion } from "framer-motion"; 

const HeroSection = () => {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.5 } 
    );

    const observeElements = document.querySelectorAll(".animate-on-scroll");
    observeElements.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      observeElements.forEach((element) => {
        observer.unobserve(element);
      });
    };
  }, []);

  return (
    <div id="home" className="p-4">
      <div className="md:flex gap-4 space-y-6 w-full container mx-auto max-w-7xl items-center">
        <motion.div
          className="space-y-2 flex-grow animate-on-scroll"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -100 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-7xl font-poppins uppercase font-bold opacity-70">Hello!</h1>
          <h1>
            <span className="text-xl opacity-70 ">I'm </span> <span className="text-5xl font-poppins uppercase">Rayhan Sohel</span>
          </h1>
          <h3 className="opacity-70 text-accent text-xl font-semibold">
            Web Developer & Designer
          </h3>
          <div className="max-w-[800px]">
            <p className="opacity-70 py-4">
              I’m a Creative Web Developer and Designer, as well as a
              WordPress Developer, and Logo Designer. With my
              broad range of skills and expertise, I’m always excited to take on
              new projects and create something truly unique.
            </p>
          </div>
          <ResumeDownloader />
          <SocialLinks />
        </motion.div>

        <motion.div
          className="text-center gap-4 p-6 flex flex-col items-center justify-between bg-base-200 rounded-3xl animate-on-scroll"
          initial={{ scale: .5 }}
          animate={{ scale: inView ? 1 : .5 }}
          transition={{ duration: 0.8 }}
        >
          <div className="w-full">
            <img
              className="rounded-box w-full object-cover"
              src={MyPhoto}
              alt="My-Photo"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
