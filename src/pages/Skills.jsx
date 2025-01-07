import { Helmet } from "react-helmet-async";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaWordpress } from "react-icons/fa";
import { RiFirebaseLine, RiTailwindCssFill } from "react-icons/ri";
import { SiCanva, SiMongodb } from "react-icons/si";
import { DiIllustrator, DiPhotoshop } from "react-icons/di";
import { LiaFigma } from "react-icons/lia";

const Skills = () => {
  return (
    <div className="p-4">
      <Helmet>
        <title>Skills - Rayhan Sohel</title>
      </Helmet>
      <div className="container mx-auto max-w-7xl space-y-8">
        {/* Header Section */}
        <div className="text-center">
          <h3 className="uppercase opacity-70">My Skills</h3>
          <h1 className="text-4xl uppercase mt-2 mb-6">Comprehensive Skill Set</h1>
        </div>

        {/* Technical Skills Section */}
        <div>
          <h3 className="uppercase text-accent font-poppins pb-4">Technical Skills</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* HTML */}
            <div className="bg-base-200 p-6 rounded-3xl flex flex-col gap-2 justify-center items-center">
              <FaHtml5 className="text-5xl text-orange-500" />
              <h3 className="text-xl font-bold">HTML</h3>
              <p className="text-sm opacity-70 text-center">
                The backbone of web structure, used to create semantic, accessible, and well-structured layouts.
              </p>
            </div>
            {/* CSS */}
            <div className="bg-base-200 p-6 rounded-3xl flex flex-col gap-2 justify-center items-center">
              <FaCss3Alt className="text-5xl text-blue-500" />
              <h3 className="text-xl font-bold">CSS</h3>
              <p className="text-sm opacity-70 text-center">
                Enhances visual aesthetics and ensures responsive, engaging designs across devices.
              </p>
            </div>
            {/* Tailwind */}
            <div className="bg-base-200 p-6 rounded-3xl flex flex-col gap-2 justify-center items-center">
              <RiTailwindCssFill className="text-5xl text-cyan-500" />
              <h3 className="text-xl font-bold">Tailwind CSS</h3>
              <p className="text-sm opacity-70 text-center">
                A utility-first CSS framework for creating custom, fast, and responsive designs.
              </p>
            </div>
            {/* JavaScript */}
            <div className="bg-base-200 p-6 rounded-3xl flex flex-col gap-2 justify-center items-center">
              <FaJs className="text-5xl text-yellow-300" />
              <h3 className="text-xl font-bold">JavaScript</h3>
              <p className="text-sm opacity-70 text-center">
                Provides interactivity and dynamic behavior to websites and web applications.
              </p>
            </div>
            {/* React */}
            <div className="bg-base-200 p-6 rounded-3xl flex flex-col gap-2 justify-center items-center">
              <FaReact className="text-5xl text-cyan-500" />
              <h3 className="text-xl font-bold">React</h3>
              <p className="text-sm opacity-70 text-center">
                A powerful JavaScript library for building scalable, reusable components for modern UIs.
              </p>
            </div>
            {/* Firebase */}
            <div className="bg-base-200 p-6 rounded-3xl flex flex-col gap-2 justify-center items-center">
              <RiFirebaseLine className="text-5xl text-orange-700" />
              <h3 className="text-xl font-bold">Firebase</h3>
              <p className="text-sm opacity-70 text-center">
                Backend as a Service (BaaS) for real-time databases, authentication, and hosting.
              </p>
            </div>
            {/* MongoDB */}
            <div className="bg-base-200 p-6 rounded-3xl flex flex-col gap-2 justify-center items-center">
              <SiMongodb className="text-5xl text-green-600" />
              <h3 className="text-xl font-bold">MongoDB</h3>
              <p className="text-sm opacity-70 text-center">
                A NoSQL database solution for managing and storing data in a flexible, scalable format.
              </p>
            </div>
            {/* WordPress */}
            <div className="bg-base-200 p-6 rounded-3xl flex flex-col gap-2 justify-center items-center">
              <FaWordpress className="text-5xl text-sky-600" />
              <h3 className="text-xl font-bold">WordPress</h3>
              <p className="text-sm opacity-70 text-center">
                A popular CMS platform for developing fully customizable, user-friendly websites.
              </p>
            </div>
          </div>
        </div>

        {/* Design Skills Section */}
        <div>
          <h3 className="uppercase text-accent font-poppins pb-4">Design Skills</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Photoshop */}
            <div className="bg-base-200 p-6 rounded-3xl flex flex-col gap-2 justify-center items-center">
              <DiPhotoshop className="text-5xl text-blue-500" />
              <h3 className="text-xl font-bold">Photoshop</h3>
              <p className="text-sm opacity-70 text-center">
                Professional-grade image editing for creating visually captivating designs.
              </p>
            </div>
            {/* Illustrator */}
            <div className="bg-base-200 p-6 rounded-3xl flex flex-col gap-2 justify-center items-center">
              <DiIllustrator className="text-5xl text-orange-500" />
              <h3 className="text-xl font-bold">Illustrator</h3>
              <p className="text-sm opacity-70 text-center">
                Industry-standard vector graphic software for logo creation and branding.
              </p>
            </div>
            {/* Figma */}
            <div className="bg-base-200 p-6 rounded-3xl flex flex-col gap-2 justify-center items-center">
              <LiaFigma className="text-5xl text-rose-600" />
              <h3 className="text-xl font-bold">Figma</h3>
              <p className="text-sm opacity-70 text-center">
                Collaborative design tool for creating wireframes, prototypes, and interfaces.
              </p>
            </div>
            {/* Canva */}
            <div className="bg-base-200 p-6 rounded-3xl flex flex-col gap-2 justify-center items-center">
              <SiCanva className="text-5xl text-blue-600" />
              <h3 className="text-xl font-bold">Canva</h3>
              <p className="text-sm opacity-70 text-center">
                User-friendly platform for crafting stunning graphics and marketing materials.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
