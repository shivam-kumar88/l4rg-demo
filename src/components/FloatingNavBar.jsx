"use client"
import { useEffect, useState } from "react";
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
import { GiShoppingBag } from "react-icons/gi";
import { IoLocationSharp } from "react-icons/io5";
import NavMenu from "@/components/NavMenu";
import Searchcomp from "./Searchcomp";
import SideMenu from "./SideMenu";
import Image from "next/image";


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

export default function FloatingNavbar() {
  const [showNav, setShowNav] = useState(false);
  const [sidemenu, setSidemenu] = useState(false)
  useEffect(() => {
    function handleScroll() {
      setShowNav(window.scrollY > 1200);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
    <nav
      className={`fixed top-0 left-0 w-full z-50
        transition-all duration-500 ease-in-out
        ${showNav
          ? "opacity-100 translate-y-0"
          : "opacity-0 -translate-y-8 pointer-events-none"
        }
        bg-white shadow-lg`}
    >
      <div className="container mx-auto py-0 px-2 flex justify-between items-center">
      <div className="flex items-center ">
          <CiMenuBurger onClick={()=>{setSidemenu(!sidemenu)}} size={40} color="#1c4b65" className="flex lg:hidden" />
          {/* <img
            src="https://avantage.bold-themes.com/business/wp-content/uploads/sites/2/2019/04/logo.png"
            alt="Logo"
            className="w-[130px] lg:w-[150px] ml-4 sm:ml-0"
          /> */}
          <Image
            src="https://avantage.bold-themes.com/business/wp-content/uploads/sites/2/2019/04/logo.png"
            alt="Logo"
            width={150}           
            height={ 80}  
            className="ml-4 sm:ml-0"
            priority              
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
      </div>
    </nav>
    <SideMenu
        isVisible={sidemenu}
        onClose={()=>{setSidemenu(false)}}
      />
    </>
  );
}
