import { Helmet } from "react-helmet-async";
import MyPhoto from "../assets/others/my-photo-squire.jpg";
import ResumeDownloader from "../components/ResumeDownloader";

const About = () => {
  return (
    <div className="flex justify-center items-center gap-4 flex-col">
      <Helmet>
        <title>About - Rayhan Sohel</title>
      </Helmet>
      <div>
        <div className="p-4">
          <div className="container mx-auto max-w-7xl space-y-8">
            {/* Header Section */}
            <div className="w-full text-center flex items-center flex-col">
              <h3 className="uppercase opacity-70">About Me</h3>
              <h1 className="text-4xl uppercase mt-2 mb-6">
                
                A Little More About Me
              </h1>
            </div>

            {/* Content Section */}
            <div className="md:flex gap-6 items-center">
              {/* Photo Section */}
              <div className="hidden md:flex">
                <div className="p-4 bg-base-200 rounded-3xl w-72">
                  <img
                    className="rounded-box object-cover overflow-hidden"
                    src={MyPhoto}
                    alt="My Photo"
                  />
                </div>
              </div>

              {/* Introduction Section */}
              <div className="space-y-4">
                <h1 className="text-2xl font-bold">
                  Rayhan Sohel
                </h1>
                <h3 className="opacity-70 text-accent text-xl font-semibold">
                  Web Developer & Designer
                </h3>
                <p className="opacity-70 leading-relaxed">
                  I am a creative, detail-oriented Freelance Web Designer and
                  Developer who specializes in building unique, visually
                  appealing, and functional websites. My passion lies in
                  crafting user-friendly designs that prioritize user experience
                  (UI/UX). I bring ideas to life through custom solutions and
                  innovative thinking.
                </p>
                <p className="opacity-70 leading-relaxed">
                  Alongside my web development expertise, I have a knack for
                  branding and identity design. I create memorable logos that
                  embody the essence of a brand and help businesses establish a
                  recognizable presence.
                </p>
                <ResumeDownloader />
              </div>
            </div>

            {/* Education and Experience Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Education */}
              <div className="bg-base-200 rounded-box px-6 py-4">
                <h3 className="uppercase text-accent font-poppins pb-4">
                  Education
                </h3>
                <p className="opacity-70 mb-2">2007-2011</p>
                <h2 className="text-lg font-bold">
                  Bachelor Degree in Electrical & Electronics Engineering
                </h2>
                <p className="opacity-70">
                  Ahsanullah University of Science & Technology
                </p>
                <p className="mt-2 opacity-70">
                  During my undergraduate years, I gained a strong foundation in
                  engineering principles, problem-solving, and analytical
                  thinking, which have been instrumental in my transition to the
                  tech world.
                </p>
              </div>

              {/* Experience */}
              <div className="bg-base-200 rounded-box px-6 py-4">
                <h3 className="uppercase text-accent font-poppins pb-4">
                  Experience
                </h3>
                <p className="opacity-70 mb-2">2022-Present</p>
                <h2 className="text-lg font-bold">
                  Freelance Web Developer and Designer
                </h2>
                <p className="opacity-70">Freelancing Marketplace</p>
                <p className="mt-2 opacity-70">
                  As a freelancer, I have worked with diverse clients to design
                  and develop websites that align with their goals and enhance
                  their online presence. My projects range from WordPress
                  development to custom web applications.
                </p>
              </div>
            </div>

            {/* Additional Information Section */}
            <div className="bg-base-200 rounded-box p-6 mt-6">
              <h3 className="uppercase text-accent font-poppins pb-4">
                My Goals
              </h3>
              <p className="opacity-70 leading-relaxed">
                My ultimate goal is to continually enhance my skills in both
                design and development to provide top-notch services to my
                clients. I aim to build solutions that are not just functional
                but also visually appealing and aligned with the latest industry
                standards.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
