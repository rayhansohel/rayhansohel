import { Link } from "react-router-dom";

const Footer = () => {


  return (
    <div className="p-4">
        <div className="text-center bg-base-200 px-4 container mx-auto max-w-7xl rounded-full">
          <p className="p-4">
           {new Date().getFullYear()}{" "}

            <span> © All rights reserved by </span>
            <Link to="/" className="text-accent font-semibold">
              Rayhan Sohel
            </Link>
          </p>
        </div>
    </div>
  );
};

export default Footer;
