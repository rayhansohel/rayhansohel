import { useState, useRef, useEffect } from "react";
import { HiMenu } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import Menu from "./Menu";

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  // Close dropdown if click is outside of the dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={toggleDropdown}
        className="btn btn-sm shadow-none h-9 w-9"
      >
        {isOpen ? (
          <span className="text-xl">
            <IoClose />
          </span>
        ) : (
          <span className="text-xl">
            <HiMenu />
          </span>
        )}
      </button>

      {isOpen && (
        <div className=" absolute top-14 -left-4 min-w-40 shadow-lg">
          <div className="p-4 bg-base-200 rounded-box">
            <div className="space-y-2">
              {/* Pass closeDropdown to MenuItems */}
              <Menu closeDropdown={closeDropdown} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
