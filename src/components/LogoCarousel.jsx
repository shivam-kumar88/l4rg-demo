"use client";

import React, { useEffect, useRef, useState } from 'react';
import { SlArrowLeft } from "react-icons/sl";
import { SlArrowRight } from "react-icons/sl";


const companies = [
    { name: 'Target', icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSymFifoDSGPLe_JYO8n_Wjh78vwuVnOJYf6g&s' },    // Replace with actual SVGs or components
    { name: 'FedEx', icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuF93GqbNc1UPvz0h5tcp9m7zXjfW6gR3yzQ&s' },
    { name: 'UPS', icon: 'https://brandmark.io/logo-rank/random/ups.png' },
    { name: 'Adidas', icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3Vlgdbtq7w4yKGX3YyZnZmaOnTH41YN2zDg&s' },
    { name: 'Shell', icon: 'https://res.cloudinary.com/vistaprint/images/c_scale,w_448,h_415,dpr_2/f_auto,q_auto/v1719942431/ideas-and-advice-prod/blogadmin/shell-logo/shell-logo.png?_i=AA' },
    { name: 'Company ABC', icon: 'https://img.pikbest.com/png-images/company-logo-design-idea_1755796.png!sw800' },
  ];

//   const carouselData = [...companies, ...companies];
export default function InfiniteCarousel() {
    const listRef = useRef(null);
    const slideWidth = 220; // width of each card + margin
    const companiesCount = companies.length;
  
    const [position, setPosition] = useState(0);
    const [isManual, setIsManual] = useState(false);
    let autoScrollInterval = useRef(null);
  
    // Auto scroll every 2 seconds
    useEffect(() => {
      if (!isManual) {
        autoScrollInterval.current = setInterval(() => {
          moveSlide(1);
        }, 2000);
      }
      return () => clearInterval(autoScrollInterval.current);
    }, [position, isManual]);
  
    // Move slide function (1 = one card left shift)
    const moveSlide = (step) => {
      setPosition((prev) => {
        let newPos = prev - step * slideWidth;
        if (Math.abs(newPos) >= companiesCount * slideWidth) {
          // Reset instantly to start for smooth infinite scroll effect
          if (listRef.current) {
            listRef.current.style.transition = 'none';
            listRef.current.style.transform = 'translateX(0px)';
            // Force reflow before applying new transition
            listRef.current.offsetHeight;
            listRef.current.style.transition = 'transform 0.8s ease-in-out';
          }
          return 0;
        }
        return newPos;
      });
    };
  
    // Handle manual control - pause auto scroll for 5s on manual click
    const handleArrowClick = (direction) => {
      setIsManual(true);
      clearInterval(autoScrollInterval.current);
      moveSlide(direction);
      setTimeout(() => setIsManual(false), 5000); // resume auto scroll after 5 sec
    };
  
    // Update transform on position change
    useEffect(() => {
      if (listRef.current) {
        listRef.current.style.transition = 'transform 0.8s ease-in-out';
        listRef.current.style.transform = `translateX(${position}px)`;
      }
    }, [position]);
  
    const carouselItems = [...companies, ...companies]; // duplicate for infinite
  
    return (
        <div className=' py-4 lg:py-10 lg:pb-30 w-full flex items-center justify-center z-10 -mt-[30px] lg:-mt-[85px] bg-[#f5f5f5]'>
            <button
          onClick={() => handleArrowClick(-1)}
          className=" hidden md:flex   bg-opacity-80 mr-10 p-2  hover:bg-opacity-100 cursor-pointer"
          aria-label="Scroll Left"
        >
          <SlArrowLeft size={30} color='#000'/>
        </button>
      <div className="relative lg:w-[80%] overflow-hidden  lg:px-6">
        {/* Left Arrow */}
        
  
        {/* Carousel */}
        <div
          ref={listRef}
          className="flex items-center space-x-10"
          style={{ willChange: 'transform' }}
        >
          {carouselItems.map((company, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center justify-center min-w-1/3 md:min-w-[200px] h-[120px]  "
            >
              <img src={company.icon} alt={company.name} className=" h-16 mb-3 object-contain" />
              {/* <span className="text-blue-900 text-lg font-semibold">{company.name}</span> */}
            </div>
          ))}
        </div>
  
        {/* Right Arrow */}
        
      </div>
      <button
          onClick={() => handleArrowClick(1)}
          className=" hidden md:flex bg-opacity-80 ml-10   hover:bg-opacity-70 cursor-pointer"
          aria-label="Scroll Right"
        >
          <SlArrowRight size={30} color='#000' className=''/>
        </button>
      </div>
    );
  }