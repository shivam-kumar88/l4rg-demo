// components/Footer.js

import Image from "next/image";
import {
  FaPhoneAlt,
  FaFacebookF,
  FaLinkedinIn,
  FaPinterest,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoMail, IoLocationSharp } from "react-icons/io5";
import { FaEarthAmericas } from "react-icons/fa6";

var headerMenus = [
  {
    name: "Home",
    selected: true,
    options: [
      "Landing",
      "Features",
      "Testimonials",
      "Contact",
      "Landing",
      "Features",
      "Testimonials",
      "Contact",
    ],
  },
  {
    name: "About us",
    selected: false,
    options: [
      "Our Team",
      "Our Story",
      "Mission & Vision",
      "Careers",
      "Our Team",
      "Our Story",
      "Mission & Vision",
      "Careers",
    ],
  },
  {
    name: "Services",
    selected: false,
    options: ["Consulting", "Development", "Design", "Support"],
  },
  {
    name: "Cases",
    selected: false,
    options: [
      "Case Studies",
      "Client Success",
      "Industries",
      "Testimonials",
      "Case Studies",
      "Client Success",
      "Industries",
      "Testimonials",
    ],
  },
  {
    name: "Blog",
    selected: false,
    options: [
      "Latest Posts",
      "Categories",
      "Guides & Tutorials",
      "News & Updates",
    ],
  },
  {
    name: "Shop",
    selected: false,
    options: ["All Products", "Categories", "Deals", "Cart"],
  },
];

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#205876] to-[#15394c] text-white pt-12 ">
      <div className="flex flex-col lg:flex-row mx-auto  px-[8%]  gap-5">
        {/* Headquarters Section */}
        <div className="w-full lg:w-[25%]">
          <div className="mb-3 text-[#fff] font-semibold tracking-wider flex items-center">
            <span className="w-8 h-[2px] bg-[#e84d65] mr-3 inline-block" />{" "}
            AVANTAGE
          </div>
          <h2 className="text-2xl font-bold text-[#e84d65] mb-2">
            Headquarters
          </h2>
          <p className="mb-4 text-[14px]">
            Organically grow the holistic world view of disruptive innovation
            via empowerment.
          </p>
          <ul className="space-y-2">
            <li className="flex items-center text-[14px]">
              <FaPhoneAlt
                size={14}
                className=" mr-2 text-[#fff] cursor-pointer"
              />{" "}
              020 7946 0020
            </li>
            <li className="flex items-center text-[14px]">
              <IoMail size={14} className=" mr-2 text-[#fff] cursor-pointer" />{" "}
              info@avantage.co.uk
            </li>
            <li className="flex items-center text-[14px]">
              <FaEarthAmericas
                size={14}
                className=" mr-2 text-[#fff] cursor-pointer"
              />{" "}
              avantage.co.uk
            </li>
          </ul>
        </div>

        {/* Locations Section */}
        <div className="mt-14 lg:mt-0">
          <div className="mb-3 text-[#fff] font-semibold tracking-wider flex items-center">
            <span className="w-8 h-[2px] bg-[#e84d65] mr-3 inline-block" /> OUR
            LOCATIONS
          </div>
          <h2 className="text-2xl font-bold text-[#e84d65] mb-2">
            Where to find us?
          </h2>
          {/* <img src="/map-image.png" className="w-full mb-4" alt="World Map" /> */}
          <div className=" flex flex-col lg:flex-row gap-2">
            <div>
              <img
                src="https://avantage.bold-themes.com/business/wp-content/uploads/sites/2/2019/04/img-footer-map.png"
                alt="Footer Map"
                width={280}
                height={142}
                loading="lazy"
              />
            </div>
            <ul className="space-y-1 text-[14px] mt-1 lg:mt-12">
              <li className="flex items-center">
                <IoLocationSharp
                  size={14}
                  className=" mr-2 text-[#e94d65] ml-4"
                />
                London: 020 7946 0020
              </li>
              <li className="flex items-center">
                <IoLocationSharp
                  size={14}
                  className=" mr-2 text-[#e94d65] ml-4"
                />
                Ontario: 613 285 5534
              </li>
              <li className="flex items-center">
                <IoLocationSharp
                  size={14}
                  className=" mr-2 text-[#e94d65] ml-4"
                />
                Tokyo: 0428 298 114
              </li>
            </ul>
          </div>
        </div>

        {/* Social Links Section */}
        <div className="w-full mt-14 lg:mt-0 lg:w-[25%] lg:ml-15">
          <div className="mb-3 text-[#fff] font-semibold tracking-wider flex items-center">
            <span className="w-8 h-[2px] bg-[#e84d65] mr-3 inline-block" /> GET
            IN TOUCH
          </div>
          <h2 className="text-2xl font-bold text-[#e84d65] mb-2">
            Avantage Social links
          </h2>
          <p className="mb-4">
            Taking seamless key performance indicators offline to maximise the
            long tail.
          </p>
          <div className="flex space-x-4 mt-4">
            <a
              href="#"
              className="bg-[#e84d65] rounded-full w-10 h-10 flex items-center justify-center text-2xl"
            >
              <FaFacebookF size={25} className="  text-[#fff] cursor-pointer" />
            </a>
            <a
              href="#"
              className="bg-[#e84d65] rounded-full w-10 h-10 flex items-center justify-center text-2xl"
            >
              <FaXTwitter size={25} className="  text-[#fff] cursor-pointer" />
            </a>
            <a
              href="#"
              className="bg-[#e84d65] rounded-full w-10 h-10 flex items-center justify-center text-2xl"
            >
              <FaPinterest size={25} className="  text-[#fff] cursor-pointer" />
            </a>
            <a
              href="#"
              className="bg-[#e84d65] rounded-full w-10 h-10 flex items-center justify-center text-2xl"
            >
              <FaLinkedinIn
                size={25}
                className="  text-[#fff] cursor-pointer"
              />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#e84d65] text-white text-center mt-16 py-6 flex flex-col lg:flex-row items-center justify-center lg:justify-between px-[8%]">
        <a className="text-[12px] lg:text-[15px]">
          Copyright by{" "}
          <span className="font-bold text-[12px] lg:text-[15px]">
            BoldThemes
          </span>
          . All rights reserved.
        </a>
        <div className="flex lg:items-center justify-center lg:justify-start gap-x-8 flex-wrap mt-3 lg:mt-0">
          {headerMenus.map((item, idx) => {
            return (
              <a
                key={idx}
                className="font-medium text-lg cursor-pointer hover:opacity-60 transition-all duration-300"
              >
                {item.name}
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
}
