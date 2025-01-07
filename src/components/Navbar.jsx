import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import ThemeContext from "../contexts/ThemeContext";
import BrandLogoLight from "../assets/logo/rs-logo-light.png";
import BrandLogoDark from "../assets/logo/rs-logo-dark.png";
import Lottie from "lottie-react";
import loadingAnimation from "../assets/animations/Loading.json";
import Menu from "./Menu";
import Dropdown from "./Dropdown";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const { loading } = useContext(AuthContext);
  const { theme } = useContext(ThemeContext);

  if (loading) {
    return (
      <div className="navbar">
        <Lottie animationData={loadingAnimation} className="w-32" />
      </div>
    );
  }

  return (
    <div className="p-4">
      <div className="container mx-auto max-w-7xl bg-base-200/60 backdrop-blur flex justify-between items-center rounded-full px-4 py-2">
        <div className="flex md:hidden">
          <Dropdown />
        </div>
        {/* Brand Logo */}
        <div className="flex items-center">
          <Link to="/">
            <div className="flex items-center justify-center gap-2">
              <img
                src={theme === "dark" ? BrandLogoLight : BrandLogoDark}
                alt="Logo"
                className="w-6"
              />
            </div>
          </Link>
        </div>

        {/* Menu Items */}
        <div className="hidden md:grid grid-flow-col-dense gap-2">
          <Menu />
        </div>

        {/* buttons */}
        <div className="flex space-x-2 items-center">
          {/* Theme Toggle buttons */}
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
