import React, { useContext } from "react";
import logo from "../../assets/logo.png";
import logoDark from "../../assets/darkLogo.png";
import { ThemeContext } from "../../context/DarkContext";
import { IoSunnyOutline } from "react-icons/io5";
import { MdDarkMode } from "react-icons/md";

const Header: React.FC = () => {
  const themeContext = useContext(ThemeContext);

  if (!themeContext) {
    return null;
  }

  const { dark, handleClick } = themeContext;

  return (
    <div className={`py-8 ${dark ? "bg-[#000]" : ""}`}>
      <div className="container max-w-[1280px] mx-auto px-5  flex justify-between items-center ">
        <a href="#" className="">
          {dark ? (
            <img src={logoDark} alt="" />
          ) : (
            <img src={logo} className="" alt="" />
          )}
        </a>
        <ul
          className={`flex items-center gap-5 ${
            dark ? "text-[#E2E2E2]" : "text-[#1D1D1D]"
          }`}
        >
          <li className="group ">
            <a href="#" className=" group-hover:font-bold text-[14px] ">
              Home
            </a>
          </li>
          <li className="group">
            <a href="#" className=" text-[14px] group-hover:font-bold ">
              About
            </a>
          </li>{" "}
          <li className="group">
            <a href="#" className=" text-[14px] group-hover:font-bold ">
              Sevices
            </a>
          </li>{" "}
          <li className="group">
            <a href="#" className=" text-[14px] group-hover:font-bold ">
              Projects
            </a>
          </li>
        </ul>
        <div className="flex items-center gap-4">
          <button onClick={handleClick}>
            {dark ? (
              <IoSunnyOutline size={20} color="#fff" />
            ) : (
              <MdDarkMode size={20} />
            )}
          </button>
          <button
            className={`py-2 px-5 ${
              dark
                ? "border-[#E2E2E2] text-[#E2E2E2]"
                : "border-[#377DFF] text-[#377DFF]"
            }  border rounded-full`}
          >
            Contact us
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
