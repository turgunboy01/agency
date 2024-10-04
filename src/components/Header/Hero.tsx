import React, { useContext } from "react";
import img from "../../assets/hero.png";
import img2 from "../../assets/hero1.png";
import { BlueCirvle, Dots, RedCircle } from "../../assets/ImgSvg";
import { ThemeContext } from "../../context/DarkContext";
const Hero: React.FC = () => {
  const themeContext = useContext(ThemeContext);
  if (!themeContext) {
    return null;
  }
  const { dark } = themeContext;

  return (
    <div className={` ${dark ? "bg-[#000]" : "bg-[#fff]"} relative pb-40`}>
      <div className="container max-w-[1280px] mx-auto px-5 flex justify-between items-center">
        <div className="flex justify-center items-center flex-col w-full">
          <h3
            className={` text-[28px] md:text-[40px] lg:text-[50px] xl:text-[64px] py-5 font-extrabold text-center ${
              dark ? "text-[#fff]" : "text-[#000]"
            } `}
          >
            Make your dream <br /> business goal come true
          </h3>
          <p
            className={`text-[13px] md:text-[15px] pb-4 text-[#46464696] text-center ${
              dark ? "text-[#fff]" : "text-[#000]"
            }`}
          >
            when you need us for improve your business, <br /> then come with us
            to help your business have reach it, you just sit and feel that goal
          </p>
          <div className=" py-3 group">
            <button
              className={`py-2 px-8  rounded-full font-bold ${
                dark
                  ? "group-hover:bg-[#E2E2E2] shadow-md shadow-[#fff]  bg-transparent border  group-hover:text-[#000]  text-[#fff]"
                  : "bg-[#377DFF] text-[#fff]"
              } `}
            >
              Start Project
            </button>
          </div>
          <div className="relative pt-16">
            <img src={img} alt="" className="relative z-40" />
            <img
              src={img2}
              alt=""
              className="absolute z-50 hidden lg:block  -bottom-10 -right-32"
            />

            <div className="absolute top-5 hidden lg:block -right-32">
              <BlueCirvle />
            </div>
            <div className="absolute top-60 -left-40">
              <RedCircle />
            </div>
            <div className="absolute top-12 left-16">
              <Dots />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-60 left-16">
        <BlueCirvle />
      </div>
    </div>
  );
};

export default Hero;
