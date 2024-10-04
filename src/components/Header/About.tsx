import React, { useContext } from "react";
import { DotsOrange, DotsRed, PlayerIcon } from "../../assets/ImgSvg";
import img from "../../assets/about.png";
import { ThemeContext } from "../../context/DarkContext";

const About: React.FC = () => {
  const themeContext = useContext(ThemeContext);

  if (!themeContext) {
    return null;
  }

  const { dark } = themeContext;
  return (
    <div className={`${dark ? "bg-[#000]" : "bg-[#fff]"}`}>
      <div className="container max-w-[1280px] mx-auto px-5 pb-32">
        <h2
          className={` ${
            dark ? "text-[#E2E2E2]" : "text-[#377DFF]"
          }  font-semibold text-center`}
        >
          About Us
        </h2>
        <p
          className={`text-[28px] md:text-[40px] lg:text-[55px]  text-center ${
            dark ? "text-[#fff]" : "text-[#1D1D1D] "
          } font-bold`}
        >
          Our Teammate
        </p>
        <div className="grid md:grid-cols-2 gap-20 pt-10">
          <div className="relative order-1 md:-order-1">
            <img src={img} alt="" className="w-full sm:h-[400px]  relative z-50 " />
            <div className="absolute -top-5 -left-10">
              <DotsOrange />
            </div>
            <div className="absolute hidden md:block -bottom-4 -right-10">
              <DotsRed />
            </div>
          </div>
          <div className="">
            <p
              className={`${
                dark ? "text-[#E2E2E2]" : "text-[#464646]"
              } tracking-wider`}
            >
              We move with make a Creative Strategy for help your business goal,
              we help to improve your income by a services we have. make your
              content look interesting and make people look for your business
            </p>
            <p
              className={`${
                dark ? "text-[#E2E2E2]" : "text-[#464646]"
              } tracking-wider mt-5`}
            >
              We move with make a Creative Strategy for help your business goal,
              we help to improve your income by a services we have. make your
              content look interesting and make people look for your business
            </p>
            <div className="flex gap-4 pt-5">
              <div className="group">
                <button
                  className={`py-2 px-8  rounded-full ${
                    dark
                      ? "group-hover:bg-[#E2E2E2] bg-transparent border  group-hover:text-[#000]  text-[#fff]"
                      : "bg-[#377DFF] text-[#fff]"
                  } `}
                >
                  About Us
                </button>
              </div>
              <div className="group">
                <button
                  className={`py-2 px-8  rounded-full flex items-center gap-2 ${
                    dark
                      ? "group-hover:bg-[#E2E2E2] bg-transparent border  group-hover:text-[#000]  text-[#fff]"
                      : "bg-[#377DFF] text-[#fff]"
                  } `}
                >
                  <PlayerIcon color={dark ? "#fff" : "#377DFF"} />
                  Our Story
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
