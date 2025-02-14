import { useState, useEffect } from "react";
import { GoNorthStar } from "react-icons/go";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaWordpress } from 'react-icons/fa';
import { RiFirebaseLine } from "react-icons/ri";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiCanva, SiMongodb } from "react-icons/si";
import { DiIllustrator, DiPhotoshop } from "react-icons/di";
import { LiaFigma } from "react-icons/lia";
import { motion } from "framer-motion"; // Importing framer-motion for animation

const SkillsSection = () => {
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
    <div id="skills" className="p-4">
      <div className="space-y-6 w-full container mx-auto max-w-7xl items-center pt-6 md:pt-16">
        <div className="w-full text-center flex items-center flex-col">
          <h3 className="uppercase opacity-70">My Skills</h3>
          <div className="flex items-center justify-center w-full gap-4 mt-2">
            <GoNorthStar className="text-xl text-accent" />
            <h1 className="text-4xl uppercase mb-2"> Key Strengths </h1>
            <GoNorthStar className="text-xl text-accent" />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6">
          {/* Technical Skills Cards */}
          <div>
            <h3 className="uppercase text-accent font-poppins pb-4">Technical Skills</h3>
            <div className="grid grid-cols-4 gap-4">
              {/* HTML */}
              <motion.div
                className="bg-base-200 p-6 rounded-2xl flex flex-col gap-2 justify-center items-center animate-on-scroll"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
                transition={{ duration: 0.8 }}
              >
                <FaHtml5 className="text-4xl text-orange-500" />
                <h3>HTML</h3>
              </motion.div>
              {/* CSS */}
              <motion.div
                className="bg-base-200 p-6 rounded-2xl flex flex-col gap-2 justify-center items-center animate-on-scroll"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
                transition={{ duration: 0.8 }}
              >
                <FaCss3Alt className="text-4xl text-blue-500" />
                <h3>CSS</h3>
              </motion.div>
              {/* Tailwind */}
              <motion.div
                className="bg-base-200 p-6 rounded-2xl flex flex-col gap-2 justify-center items-center animate-on-scroll"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
                transition={{ duration: 0.8 }}
              >
                <RiTailwindCssFill className="text-4xl text-cyan-500" />
                <h3>Tailwind</h3>
              </motion.div>
              {/* JavaScript */}
              <motion.div
                className="bg-base-200 p-6 rounded-2xl flex flex-col gap-2 justify-center items-center animate-on-scroll"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
                transition={{ duration: 0.8 }}
              >
                <FaJs className="text-4xl text-yellow-300" />
                <h3>JavaScript</h3>
              </motion.div>
              {/* React */}
              <motion.div
                className="bg-base-200 p-6 rounded-2xl flex flex-col gap-2 justify-center items-center animate-on-scroll"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
                transition={{ duration: 0.8 }}
              >
                <FaReact className="text-4xl text-cyan-500" />
                <h3>React</h3>
              </motion.div>
              {/* Firebase */}
              <motion.div
                className="bg-base-200 p-6 rounded-2xl flex flex-col gap-2 justify-center items-center animate-on-scroll"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
                transition={{ duration: 0.8 }}
              >
                <RiFirebaseLine className="text-4xl text-orange-700" />
                <h3>Firebase</h3>
              </motion.div>
              {/* MongoDB */}
              <motion.div
                className="bg-base-200 p-6 rounded-2xl flex flex-col gap-2 justify-center items-center animate-on-scroll"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
                transition={{ duration: 0.8 }}
              >
                <SiMongodb className="text-4xl text-green-600" />
                <h3>MongoDB</h3>
              </motion.div>
              {/* WordPress */}
              <motion.div
                className="bg-base-200 p-6 rounded-2xl flex flex-col gap-2 justify-center items-center animate-on-scroll"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
                transition={{ duration: 0.8 }}
              >
                <FaWordpress className="text-4xl text-sky-600" />
                <h3>WordPress</h3>
              </motion.div>
            </div>
          </div>

          {/* Design Skills Cards */}
          <div className="rounded-box">
            <h3 className="uppercase text-accent font-poppins pb-4">Design Skills</h3>
            <div className="grid grid-cols-4 gap-4">
              {/* Photoshop */}
              <motion.div
                className="bg-base-200 p-6 rounded-2xl flex flex-col gap-2 justify-center items-center animate-on-scroll"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
                transition={{ duration: 0.8 }}
              >
                <DiPhotoshop className="text-4xl text-blue-500" />
                <h3>Photoshop</h3>
              </motion.div>
              {/* Illustrator */}
              <motion.div
                className="bg-base-200 p-6 rounded-2xl flex flex-col gap-2 justify-center items-center animate-on-scroll"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
                transition={{ duration: 0.8 }}
              >
                <DiIllustrator className="text-4xl text-orange-500" />
                <h3>Illustrator</h3>
              </motion.div>
              {/* Figma */}
              <motion.div
                className="bg-base-200 p-6 rounded-2xl flex flex-col gap-2 justify-center items-center animate-on-scroll"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
                transition={{ duration: 0.8 }}
              >
                <LiaFigma className="text-4xl text-rose-600" />
                <h3>Figma</h3>
              </motion.div>
              {/* Canva */}
              <motion.div
                className="bg-base-200 p-6 rounded-2xl flex flex-col gap-2 justify-center items-center animate-on-scroll"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
                transition={{ duration: 0.8 }}
              >
                <SiCanva className="text-4xl text-blue-600" />
                <h3>Canva</h3>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;
