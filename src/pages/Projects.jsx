import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import projectsData from "../assets/Projects/projects.json";

const Projects = () => {
  return (
    <div className="p-4">
      <Helmet>
        <title>Projects - Rayhan Sohel</title>
      </Helmet>
      <div className="space-y-6 w-full container mx-auto max-w-7xl items-center">
        <div className="w-full text-center flex items-center flex-col">
          <h3 className="uppercase opacity-70">Projects</h3>
          <div className="flex items-center justify-center w-full gap-4 mt-2">
            <h1 className="text-4xl uppercase mb-2">My Works</h1>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsData.map((project) => (
            <div
              key={project.id}
              className="bg-base-200 rounded-3xl p-6 hover:shadow-xl transition-all"
            >
              <img
                src={project.image}
                alt={project.title}
                className="rounded-xl mb-4 max-h-[300px] w-full object-cover"
              />
              <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
              <p className="opacity-70 mb-4">{project.description}</p>
              <Link
                to={`/project/${project.id}`}
                className="btn btn-sm btn-primary"
              >
                View Project
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
