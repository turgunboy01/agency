import React, { useContext } from "react";
import { ThemeContext } from "../../context/DarkContext";

const Portfolio: React.FC = () => {
  const themeContext = useContext(ThemeContext);
  if (!themeContext) {
    return null;
  }
  const { dark } = themeContext;

  return (
    <div
      className={`${dark ? "bg-[#000] text-[#fff]" : "bg-[#fff] text-[#000]"}`}
    >
      <div className="container max-w-[1280px] mx-auto px-5 pb-32 relative">
        <h2
          className={`${
            dark ? "text-[#fff]" : " text-[#377DFF]"
          } font-semibold text-center`}
        >
          Our Portfolio
        </h2>
        <p
          className={`text-[28px] md:text-[40px] lg:text-[55px] text-center ${
            dark ? "text-[#fff]" : "text-[#1D1D1D]"
          }  font-bold`}
        >
          What do we do
        </p>
        <p
          className={` ${
            dark ? "text-[#E2E2E2]" : "text-[#464646]"
          } pt-5  text-center md:w-[50%] mx-auto text-[15px] md;text-[17px] lg:text-[20px]`}
        >
          all projects that we have already done , proven can help to use more
          comfortable, then can used by client from our business
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3  gap-10 pt-14 px-10">
          <div className=" h-[350px] rounded-[30px] relative border overflow-hidden ">
            <img src="" alt="" className="w-full h-full" />
            <h2 className="absolute bottom-7 left-7 text-[24px] font-bold text-[#fff]">
              Design Byte App
            </h2>
          </div>
          <div className=" h-[350px]  rounded-[30px] relative border overflow-hidden">
            <img src="" alt="" className="w-full h-full" />
            <h2 className="absolute bottom-7 left-7 text-[24px] font-bold text-[#fff]">
              Cloud App
            </h2>
          </div>{" "}
          <div className=" h-[350px] rounded-[30px] relative border overflow-hidden ">
            <img src="" alt="" className="w-full h-full" />
            <h2 className="absolute bottom-7 left-7 text-[24px] font-bold text-[#fff]">
              Design Furniture App
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
