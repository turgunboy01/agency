import React, { useContext } from "react";
import { ThemeContext } from "../../context/DarkContext";

const Testimonials: React.FC = () => {
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
            dark ? "text-[#fff]" : "text-[#377DFF]"
          } font-semibold text-center`}
        >
          Testimonial
        </h2>
        <p
          className={`text-[28px] md:text-[40px] lg:text-[55px] text-center ${
            dark ? "text-[#fff]" : "text-[#1D1D1D]"
          } font-bold`}
        >
          People Talk about us
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 p-10">
          <div className=" h-[350px] rounded-[30px] relative border overflow-hidden p-10 pt-[70px] ">
            <div className="flex items-center gap-8">
              <img src="" alt="" className="w-[70px] h-[70px] rounded-full" />
              <div className="">
                <h3
                  className={`text-[20px]  font-semibold ${
                    dark ? "text-[#E2E2E2]" : "text-[#377DFF]"
                  }`}
                >
                  Angel Rose
                </h3>
                <p
                  className={` text-[12px] ${
                    dark ? "text-[#E2E2E2]" : "text-[#4646467c]"
                  }  `}
                >
                  Creative Manager
                </p>
              </div>
            </div>
            <p
              className={`${
                dark ? "text-[#E2E2E2]" : "text-[#464646]"
              } opacity-80 text-[16px] lg:text-[18px] tracking-wide pt-5 `}
            >
              There are many variations passages of Lorem Ipsum majority some by
              words which don't look .{" "}
            </p>
          </div>
          <div className=" h-[350px] rounded-[30px] relative border overflow-hidden p-10 pt-[70px] ">
            <div className="flex items-center gap-8">
              <img src="" alt="" className="w-[70px] h-[70px] rounded-full" />
              <div className="">
                <h3
                  className={`text-[20px]  font-semibold ${
                    dark ? "text-[#E2E2E2]" : "text-[#377DFF]"
                  }`}
                >
                  Angel Rose
                </h3>
                <p
                  className={` text-[12px] ${
                    dark ? "text-[#E2E2E2]" : "text-[#4646467c]"
                  }  `}
                >
                  Creative Manager
                </p>
              </div>
            </div>
            <p
              className={`${
                dark ? "text-[#E2E2E2]" : "text-[#464646]"
              } opacity-80 text-[16px] lg:text-[18px] tracking-wide pt-5 `}
            >
              There are many variations passages of Lorem Ipsum majority some by
              words which don't look .{" "}
            </p>
          </div>
          <div className=" h-[350px] rounded-[30px] relative border overflow-hidden p-10 pt-[70px] ">
            <div className="flex items-center gap-8">
              <img src="" alt="" className="w-[70px] h-[70px] rounded-full" />
              <div className="">
                <h3
                  className={`text-[20px]  font-semibold ${
                    dark ? "text-[#E2E2E2]" : "text-[#377DFF]"
                  }`}
                >
                  Angel Rose
                </h3>
                <p
                  className={` text-[12px] ${
                    dark ? "text-[#E2E2E2]" : "text-[#4646467c]"
                  }  `}
                >
                  Creative Manager
                </p>
              </div>
            </div>
            <p
              className={`${
                dark ? "text-[#E2E2E2]" : "text-[#464646]"
              } opacity-80 text-[16px] lg:text-[18px] tracking-wide pt-5 `}
            >
              There are many variations passages of Lorem Ipsum majority some by
              words which don't look .{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
