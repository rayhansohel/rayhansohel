import { useState, useEffect } from "react";
import { GoNorthStar } from "react-icons/go";
import MyPhoto from "../assets/others/my-photo-squire.jpg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const AboutSection = () => {
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
    <div id="about" className="p-4">
      <div className="space-y-6 w-full container mx-auto max-w-7xl items-center py-6 md:py-16">
        <motion.div
          className="w-full text-center flex items-center flex-col animate-on-scroll"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="uppercase opacity-70">About me</h3>
          <div className="flex items-center justify-center w-full gap-4 mt-2">
            <GoNorthStar className="text-xl text-accent" />
            <h1 className="text-4xl uppercase mb-2"> Self Summery </h1>
            <GoNorthStar className="text-xl text-accent" />
          </div>
        </motion.div>

        <motion.div
          className="md:flex gap-6 items-center animate-on-scroll"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -100 }}
          transition={{ duration: 0.8 }}
        >
          <div className="hidden md:flex">
            <div className="p-4 bg-base-200 rounded-3xl w-60">
              <img
                className="rounded-box object-cover overflow-hidden"
                src={MyPhoto}
                alt="My-Photo"
              />
            </div>
          </div>
          <div className="space-y-4">
            <motion.h1
              className="text-2xl animate-on-scroll"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
              transition={{ duration: 0.8 }}
            >
              "Great things begin with an even better story."
            </motion.h1>
            <motion.p
              className="opacity-70 animate-on-scroll"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
              transition={{ duration: 0.8 }}
            >
              As a Creative Freelance Web Designer and Developer, I create
              custom, user-friendly websites with a focus on UI/UX design. I
              specialize in WordPress development to give clients full control
              over their online presence.
            </motion.p>
            <motion.p
              className="opacity-70 animate-on-scroll"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
              transition={{ duration: 0.8 }}
            >
              As a Logo Designer, I craft memorable and timeless logos that
              accurately represent a brand and leave a lasting impression.
            </motion.p>
            <Link to="/about" className="btn btn-sm btn-primary">
              Explore More
            </Link>
          </div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-on-scroll"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 100 }}
          transition={{ duration: 0.8 }}
        >
          <div className="bg-base-200 rounded-box px-6 py-4">
            <h3 className="uppercase text-accent font-poppins pb-4">Education</h3>
            <p className="opacity-70">2007-2011</p>
            <h2 className="text-lg">Bachelor Degree in EEE</h2>
            <p className="opacity-70">Ahsanullah University of Science & Technology</p>
          </div>
          <div className="bg-base-200 rounded-box px-6 py-4">
            <h3 className="uppercase text-accent font-poppins pb-4">Experience</h3>
            <p className="opacity-70">2022-Present</p>
            <h2 className="text-lg">Freelance Web Developer and Designer</h2>
            <p className="opacity-70">Freelancing Marketplace</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutSection;
