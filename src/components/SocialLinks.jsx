import { LuLinkedin } from "react-icons/lu";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FiFacebook } from "react-icons/fi";
import { PiGithubLogoBold } from "react-icons/pi";

const SocialLinks = () => {
  return (
    <div className="pt-4">
      {/* social icons */}
      <div className="flex gap-3 items-center">
        <a
          href="https://github.com/RayhanSohel"
          target="_blank"
          rel="noopener noreferrer"
          className="w-9 h-9 flex bg-base-200 items-center justify-center rounded-full hover:text-accent transition-colors"
        >
          <PiGithubLogoBold className="text-lg" />
        </a>
        <a
          href="https://www.linkedin.com/in/arayhansohel"
          target="_blank"
          rel="noopener noreferrer"
          className="w-9 h-9 flex bg-base-200 items-center justify-center rounded-full hover:text-accent transition-colors"
        >
          <LuLinkedin className="text-lg" />
        </a>
        <a
          href="https://www.facebook.com/RayhanSohel"
          target="_blank"
          rel="noopener noreferrer"
          className="w-9 h-9 flex bg-base-200 items-center justify-center rounded-full hover:text-accent transition-colors"
        >
          <FiFacebook className="text-lg" />
        </a>
        <a
          href="https://x.com/rrayhanSohel"
          target="_blank"
          rel="noopener noreferrer"
          className="w-9 h-9 flex bg-base-200 items-center justify-center rounded-full hover:text-accent transition-colors"
        >
          <FaXTwitter />
        </a>
        <a
          href="https://www.instagram.com/arayhansohel/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-9 h-9 flex bg-base-200 items-center justify-center rounded-full hover:text-accent transition-colors"
        >
          <FaInstagram className="text-lg" />
        </a>
      </div>
    </div>
  );
};

export default SocialLinks;
