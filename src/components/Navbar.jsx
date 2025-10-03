"use client";
import React, { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import {
  FaSearch,
  FaPhoneAlt,
  FaRegClock,
  FaFacebookF,
  FaLinkedinIn,
  FaPinterest,
} from "react-icons/fa";
import { FaXTwitter, FaBagShopping } from "react-icons/fa6";
import { IoLocationSharp } from "react-icons/io5";
import NavMenu from "@/components/NavMenu";
import Searchcomp from "./Searchcomp";
import SideMenu from "./SideMenu";

const headerMenus = [
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

const Navbar = () => {
  const [searchopen, SetSearchOpen] = useState(false);
  const [sidemenu, setSidemenu] = useState(false)

  return (
    <>
      <div className="hidden lg:flex w-full bg-[#19435a] flex-row items-center justify-between px-[8%] py-2">
        <div className="flex items-center">
          <FaRegClock size={14} className=" mr-2 text-[#e94d65]" />
          <a className="text-[#fff] text-[13px] font-semibold">
            Monday - Friday <span className="opacity-60 ml-2">8AM - 9PM</span>
          </a>
          <IoLocationSharp size={14} className=" mr-2 text-[#e94d65] ml-4" />
          <a className="text-[#fff] text-[13px] font-semibold">
            Offices
            <span className="opacity-60 ml-2">
              Bloomsbury Square, London WC1B 4EA
            </span>
          </a>
        </div>
        <div className="flex items-center space-x-4">
          <a className="text-[#fff] text-[14px] font-semibold mr-3">
            Visit our social pages
          </a>
          <FaFacebookF
            size={14}
            className=" mr-2 text-[#e94d65] cursor-pointer"
          />
          <FaXTwitter
            size={14}
            className=" mr-2 text-[#e94d65] cursor-pointer"
          />
          <FaPinterest
            size={14}
            className=" mr-2 text-[#e94d65] cursor-pointer"
          />
          <FaLinkedinIn
            size={14}
            className=" mr-2 text-[#e94d65] cursor-pointer"
          />
        </div>
      </div>

      <nav className="flex items-center lg:justify-between w-full px-3 lg:px-[8%]  bg-white shadow-md">
        <div className="flex items-center ">
          <CiMenuBurger onClick={()=>{setSidemenu(!sidemenu)}} size={40} color="#1c4b65" className="flex lg:hidden" />
          <img
            src="https://avantage.bold-themes.com/business/wp-content/uploads/sites/2/2019/04/logo.png"
            alt="Logo"
            className="w-[160px] lg:w-[270px] ml-4 sm:ml-0"
          />
        </div>

        <NavMenu headerMenus={headerMenus} />

        <div className="hidden lg:flex items-center space-x-6">
          <FaSearch
            onClick={() => {
              SetSearchOpen(true);
            }}
            size={18}
            className="text-[#000] hover:text-[#e94d65] transition-all duration-300 cursor-pointer"
          />
          <div className="flex group">
            <FaBagShopping
              size={22}
              className="text-[#000] hover:text-[#e94d65] transition-all duration-300 cursor-pointer"
            />
            <div className=" rounded-full h-5 w-5 text-white bg-[#e94d65] -ml-2 -mt-3 text-xs group-hover:-mt-5 duration-300 transition-all flex justify-center items-center font-bold">
              {"0"}
            </div>
          </div>
          <button className="bg-[#e94d65] text-white px-4 py-3 cursor-pointer font-semibold flex items-center hover:shadow-xl hover:-mt-3 duration-300 transition-all">
            <FaPhoneAlt size={14} className=" text-[#fff] mr-2" />
            <a>{"020 7946 0020"}</a>
          </button>
        </div>
        <button className="md:hidden block">
          <svg width="24" height="24">
            <path d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>
      <Searchcomp
        isOpen={searchopen}
        onClose={() => {
          SetSearchOpen(false);
        }}
      />
      <SideMenu
        isVisible={sidemenu}
        onClose={()=>{setSidemenu(false)}}
      />
    </>
  );
};

export default Navbar;
