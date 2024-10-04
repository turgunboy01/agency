import React from "react";
import img from "../../assets/logo.png";
import {
  Email,
  Facebook,
  Instagram,
  Linkeidin,
  Twitter,
} from "../../assets/ImgSvg";
const Footer: React.FC = () => {
  return (
    <div className="bg-[#383638] pt-32 pb-10 px-10">
      <div className="max-w-[1280px] mx-auto px-5">
        <div className=" gap-10 text-[#fff] sm:flex ">
          <div className="bg-[#fff] rounded-[15px] py-3 px-5 w-[187px] h-[88px] flex items-center justify-center">
            <img src={img} alt="" />
          </div>
          <div className="flex justify-between flex-wrap gap-10 pt-10 sm:pt-0">
            <div className="flex flex-col gap-2">
              <h2 className="text-[22px] font-semibold">Terms & policies</h2>
              <a href="#" className="text-[18px] font-thin tracking-wider">
                Terms of Service
              </a>
              <a href="#" className="text-[18px] font-thin tracking-wide">
                Privacy Policy
              </a>
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="text-[22px] font-semibold">Company</h2>
              <a href="#" className="text-[18px] font-thin tracking-wider">
                Home
              </a>
              <a href="#" className="text-[18px] font-thin tracking-wide">
                About Us
              </a>
              <a href="#" className="text-[18px] font-thin tracking-wide">
                Contact Us
              </a>
            </div>

            <div className="flex flex-col gap-2">
              <h2 className="text-[22px] font-semibold">Contact</h2>
              <a href="#" className="text-[18px] font-thin tracking-wider">
                (+62) 893912392190
              </a>
              <a href="#" className="text-[18px] font-thin tracking-wide">
                agecnycr@gmail.com
              </a>
            </div>

            <ul className="flex flex-col gap-4">
              <h2 className="text-[22px] font-semibold">Location</h2>
              <li className="text-[18px] font-thin tracking-wider">
                PT Osiris Real Estate Internasional
              </li>
              <li className="text-[18px] font-thin tracking-wide">
                Jl. KH. Wahid Hasyim Kel No.10D
              </li>
              <li className="text-[18px] font-thin tracking-wider">
                Jakarta, Indonesia
              </li>
              <li className="text-[18px] font-thin tracking-wide">
                team@OsirisRealEstate.com
              </li>
            </ul>
          </div>
        </div>
        <div className="w-full sm:w-[80%] lg:w-[50%] mx-auto flex justify-center items-center flex-col pt-10 text-[#fff] ">
          <ul className="flex gap-6">
            <li className="w-[40px] h-[40px] rounded-full bg-[#fff] flex justify-center items-center">
              <a href="#" className="">
                <Facebook />
              </a>
            </li>
            <li className="w-[40px] h-[40px] rounded-full bg-[#fff] flex justify-center items-center">
              <a href="#" className="">
                <Instagram />
              </a>
            </li>{" "}
            <li className="w-[40px] h-[40px] rounded-full bg-[#fff] flex justify-center items-center">
              <a href="#" className="">
                <Linkeidin />
              </a>
            </li>{" "}
            <li className="w-[40px] h-[40px] rounded-full bg-[#fff] flex justify-center items-center">
              <a href="#" className="">
                <Email />
              </a>
            </li>{" "}
            <li className="w-[40px] h-[40px] rounded-full bg-[#fff] flex justify-center items-center">
              <a href="#" className="">
                <Twitter />
              </a>
            </li>
          </ul>
          <div className="w-full h-[1px] bg-[#fff] mb-2 mt-3"></div>
          <div className="">
            <p className="font-thin tracking-wider text-[18px] text-center">
              Copyright @ 2024 Agency Creative. All Right Reserved
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
