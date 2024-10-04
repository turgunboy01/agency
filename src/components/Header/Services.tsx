import React, { useContext } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { Service1, Service2, Service3, Service4 } from "../../assets/ImgSvg";
import { ThemeContext } from "../../context/DarkContext";

const Services: React.FC = () => {
  const themeContext = useContext(ThemeContext);
  if (!themeContext) {
    return null;
  }
  const { dark } = themeContext;

  return (
    <div
      className={`${dark ? "bg-[#000] text-[#fff]" : "bg-[#fff] text-[#000]"}`}
    >
      <div className="max-w-[1280px] mx-auto px-5 pb-32 grid  xl:grid-cols-2 gap-40 items-center justify-between ">
        <div className="">
          <p className=" text-[#377DFF] text-center xl:text-lef font-semibold ">Our Services</p>
          <h2 className="text-[28px] text-center xl:text-left md:text-[40px] lg:text-[55px] font-bold leading-[71px]">
            Perfect and Fast Movement
          </h2>
          <p className="pt-5 text-center xl:text-lef tracking-wide text-[20px] font-normal">
            We move with make a Creative Strategy for help your business goal,
            we help to improve your income by a services we have. make your
            content look interesting and make people look for your business
          </p>
          <div className="flex justify-start xl:justify-end ">
            <a
              href="#"
              className="text-[#377DFF] font-semibold text-[20px] flex items-center gap-3"
            >
              Read more <FaArrowRightLong color="#377DFF" />
            </a>
          </div>
        </div>
        <div className="grid  sm:grid-cols-2 md:grid-cols-4 xl:grid-cols-2 gap-5 px-10">
          <div className="group">
            <div className="border border-[gray]  h-[270px] rounded-[30px] group-hover:shadow-lg shadow flex justify-center items-center flex-col p-5 text-center">
              <div className="w-[100px] h-[100px] rounded-full bg-[#377DFF] flex  justify-center items-center">
                <Service1 />
              </div>
              <p className="text-[20px] font-bold pt-5 ">
                Social Media Management
              </p>
            </div>
          </div>
          <div className="group">
            <div className="border border-[gray]  h-[270px] rounded-[30px] group-hover:shadow-lg shadow flex justify-center items-center flex-col p-5 text-center">
              <div className="w-[100px] h-[100px] rounded-full bg-[#FF2D2D] flex justify-center items-center">
                <Service2 />
              </div>
              <p className="text-[20px] font-bold pt-5">
                Search Engine Opimization
              </p>
            </div>
          </div>
          <div className="group">
            <div className="border border-[gray] h-[270px] rounded-[30px] group-hover:shadow-lg shadow flex justify-center items-center flex-col p-5 text-center">
              <div className="w-[100px] h-[100px] rounded-full bg-[#7CE761] flex justify-center items-center">
                <Service3 />
              </div>
              <p className="text-[20px] font-bold pt-5 ">Design</p>
            </div>
          </div>
          <div className="group">
            <div className="border border-[gray]  h-[270px]  rounded-[30px] group-hover:shadow-lg shadow flex justify-center items-center flex-col p-5 text-center">
              <div className="w-[100px] h-[100px] rounded-full bg-[#FFA800] flex justify-center items-center">
                <Service4 />
              </div>
              <p className="text-[20px] font-bold  pt-5">Ads</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
