import { NavLink } from "react-router-dom";

const Menu = () => {

  return (
    <>
      {/* Common Menu Items */}
      <NavLink
        to="/"
        className={({ isActive }) =>
          `btn btn-sm w-full bg-transparent border-none shadow-none ${
            isActive ? "text-[#ff0055]" : "transition"
          }`
        }
      >
        Home
      </NavLink>

      <NavLink
        to="/about"
        className={({ isActive }) =>
          `btn btn-sm w-full bg-transparent border-none shadow-none whitespace-nowrap  ${
            isActive ? "text-[#ff0055]" : "transition"
          }`
        }
      >
        About
      </NavLink>

      <NavLink
        to="/skills"
        className={({ isActive }) =>
          `btn btn-sm w-full bg-transparent border-none shadow-none whitespace-nowrap  ${
            isActive ? "text-[#ff0055]" : "transition"
          }`
        }
      >
        Skill
      </NavLink>

      <NavLink
        to="/projects"
        className={({ isActive }) =>
          `btn btn-sm w-full bg-transparent border-none shadow-none whitespace-nowrap  ${
            isActive ? "text-[#ff0055]" : "transition"
          }`
        }
      >
        Project
      </NavLink>

      <NavLink
        to="/contact"
        className={({ isActive }) =>
          `btn btn-sm w-full bg-transparent border-none shadow-none whitespace-nowrap  ${
            isActive ? "text-[#ff0055]" : "transition"
          }`
        }
      >
        Contact
      </NavLink>

    </>
  );
};

export default Menu;
