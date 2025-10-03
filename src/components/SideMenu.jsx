"use client"
import { useEffect, useRef, useState } from "react";
import { IoMdClose } from "react-icons/io";
import {
    FaSearch,
    FaPhoneAlt,
    FaRegClock,
    FaFacebookF,
    FaLinkedinIn,
    FaPinterest,
  } from "react-icons/fa";
  import { IoLocationSharp } from "react-icons/io5";
  import { FaXTwitter, FaBagShopping } from "react-icons/fa6";
  


function AccordionItem({ title, options, isOpen, onToggle }) {
    const contentRef = useRef(null);
    const [height, setHeight] = useState("0px");
  
    useEffect(() => {
      if (contentRef.current) {
        setHeight(isOpen ? `${contentRef.current.scrollHeight}px` : "0px");
      }
    }, [isOpen]);
  
    return (
      <div className={`${title == "Home" ? "border-none" : "border-t"}  border-gray-300`}>
        <button
          className="w-full text-left py-4 px-5 flex justify-between items-center font-semibold text-gray-800 hover:text-rose-600 transition-colors"
          onClick={onToggle}
          aria-expanded={isOpen}
        >
          {title}
          <svg
            className={`w-5 h-5 transition-transform duration-300 ${
              isOpen ? "rotate-180" : ""
            }`}
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        <div
          ref={contentRef}
          style={{ maxHeight: height }}
          className="overflow-hidden transition-max-height duration-300 ease-in-out px-5"
        >
          <ul className="py-2 text-gray-700 list-disc list-inside space-y-1">
            {options.map((option, i) => (
              <li key={i}>{option}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  }


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

export default function SideMenu({ isVisible, onClose }) {
    
    const [openIndex, setOpenIndex] = useState(
        headerMenus.findIndex(menu => menu.selected) ?? null
      );

    const toggle = (index) => {
    setOpenIndex((current) => (current === index ? null : index));
  };
  return (
    <>
      <div
        className={`fixed inset-0 z-40 bg-transparent bg-opacity-30 backdrop-blur-[4px] transition-opacity duration-300 ${
          isVisible ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />

      <aside
        className={`fixed inset-y-0 left-0 z-50 w-80 max-w-full overflow-y-scroll overflow-x-hidden bg-white shadow-lg transition-transform duration-300 ease-in-out ${
          isVisible ? "translate-x-0" : "-translate-x-full"
        }`}
        aria-label="Sidebar menu"
      >
        

        <div className="flex w-full justify-center items-center gap-2 px-8 py-0 ">
          <img
            src="https://avantage.bold-themes.com/business/wp-content/uploads/sites/2/2019/04/logo.png"
            alt="Logo"
            className=" w-[200px] "
          />
        </div>

        <nav className="flex flex-col gap-2 px-8 py-4">
        {headerMenus.map((menu, index) => (
            <AccordionItem
            key={index}
            title={menu.name}
            options={menu.options}
            isOpen={openIndex === index}
            onToggle={() => toggle(index)}
            />
        ))}
        
            <div className="flex items-center w-full justify-center mt-10 space-x-3">
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
            <button className="bg-[#e94d65] text-white px-3 text-sm py-3 cursor-pointer font-semibold flex items-center hover:shadow-xl hover:-mt-3 duration-300 transition-all">
                <FaPhoneAlt size={14} className=" text-[#fff] mr-2" />
                <a>{"020 7946 0020"}</a>
            </button>
            </div>
        </nav>

        
        <div className="bg-[#184157] py-10 px-2 flex flex-col items-center w-full max-w-sm mx-auto text-center text-white">
      
        <div className="mb-6 flex flex-col items-center">
            <FaRegClock className="text-[#e94d65] text-3xl mb-2" />
            <span className="font-medium text-lg">Monday - Friday</span>
            <span className="text-gray-400 text-base mt-1">8AM - 9PM</span>
        </div>
        
        
        <div className="mb-8 flex flex-col items-center">
            <IoLocationSharp className="text-[#e94d65] text-3xl mb-2" />
            <span className="font-medium text-lg">Offices</span>
            <span className="text-gray-400 text-base mt-1">Bloomsbury Square, London WC1B 4EA</span>
        </div>
        
        
        <div className="w-full border-t border-slate-400 mb-7"></div>
        
        
        <div>
            <div className="mb-3 text-lg font-medium">Visit our social pages</div>
            <div className="flex justify-center gap-6">
            <FaFacebookF className="text-[#e94d65] text-2xl hover:text-[#e94d65] transition" />
            <FaXTwitter className="text-[#e94d65] text-2xl hover:text-[#e94d65] transition" />
            <FaPinterest className="text-[#e94d65] text-2xl hover:text-[#e94d65] transition" />
            <FaLinkedinIn className="text-[#e94d65] text-2xl hover:text-[#e94d65] transition" />
            </div>
        </div>
        </div>
      </aside>
      <button
          className={`${isVisible ? "flex" : "hidden"} absolute top-2 right-2 p-3  text-2xl text-gray-700 focus:outline-none z-40`}
          aria-label="Close menu"
          onClick={onClose}
        >
          <IoMdClose size={50}/>
        </button>
    </>
  );
}
