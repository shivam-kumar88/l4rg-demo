// components/HeroSection.jsx
"use client";
import { useEffect, useState } from "react";

const HeroSection = () => {
  const [showComponent, setShowComponent] = useState(false);

  useEffect(() => {
    // Set interval to toggle the component visibility every 3 seconds
    const interval = setInterval(() => {
      setShowComponent((prev) => !prev);
    }, 3000);

    // Cleanup interval on unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {showComponent ? (
        <section className="relative flex h-[70vh] lg:h-auto md:flex-row items-center justify-between min-h-screen bg-gradient-to-r bg-[url('https://avantage.bold-themes.com/business/wp-content/uploads/sites/2/2019/04/img-slider-01.jpg')] bg-cover bg-center backdrop-brightness-150 lg:backdrop-brightness-100 from-gray-50 to-white px-6 md:px-[8%] py-10">
          {/* Left Content */}
          <div
            className={`${showComponent ? "upward-move" : ""} w-full md:w-1/2 flex flex-col items-start max-w-xl z-10 -mt-40 lg:mt-0 `}
          >
            <div className="flex flex-row items-center">
              <div className="h-[2px] w-12 bg-[#e94d65]"></div>
              <p className="text-sm font-medium text-gray-600 mb-2  pl-2 ">
                WE WANT TO SEE YOU SUCCEED
              </p>
            </div>

            <h1 className="text-4xl md:text-7xl font-bold mb-2 text-[#1b4962]">
              Find <span className="text-[#1b4962] ">that</span>
              <br />
              <span className="text-[#e94d65] ">missing peices</span>
            </h1>
            <p className="text-base md:text-lg text-[#000] my-5">
              Energistically myocardiinate clicks-and-mortar testing procedures
              whereas next-generation manufactured products.
            </p>
            <div className="flex flex-row gap-4 mt-2">
              <button className="bg-[#e94d65] hover:opacity-70 text-white px-3 lg:px-6 py-2 lg:py-3 text-[14px] lg:text-[18px] rounded font-semibold transition cursor-pointer">
                View our Solutions
              </button>
              <button className="bg-[#1b4962] hover:opacity-70 text-white px-3 lg:px-6 py-2 lg:py-3 text-[14px] lg:text-[18px] rounded font-semibold transition cursor-pointer">
                <a>View our Team</a>
              </button>
            </div>
          </div>
        </section>
      ) : (
        <section className="relative flex h-[70vh] lg:h-auto md:flex-row items-center justify-between min-h-screen bg-gradient-to-r bg-[url('https://avantage.bold-themes.com/business/wp-content/uploads/sites/2/2019/04/img-slider-03.jpg')] bg-cover bg-center backdrop-brightness-150 lg:backdrop-brightness-100 from-gray-50 to-white px-6 md:px-[8%] py-10">
          {/* Left Content */}
          <div
            className={`${!showComponent ? "upward-move" : ""} w-full md:w-1/2 flex flex-col items-start max-w-xl z-10 -mt-40 lg:mt-0 `}
          >
            <div className="flex flex-row items-center">
              <div className="h-[2px] w-12 bg-[#e94d65]"></div>
              <p className="text-sm font-medium text-gray-600 mb-2  pl-2 ">
                WE WANT TO SEE YOU SUCCEED
              </p>
            </div>

            <h1 className="text-4xl md:text-7xl font-bold mb-2 text-[#1b4962]">
              Your <span className="text-[#1b4962]">success</span>
              <br />
              <span className="text-[#e94d65]">Our business</span>
            </h1>
            <p className="text-base md:text-lg text-[#000] my-5">
              Energistically myocardiinate clicks-and-mortar testing procedures
              whereas next-generation manufactured products.
            </p>
            <div className="flex flex-row gap-4 mt-2">
              <button className="bg-[#e94d65] hover:opacity-70 text-white px-3 lg:px-6 py-2 lg:py-3 text-[14px] lg:text-[18px] rounded font-semibold transition cursor-pointer">
                View our Solutions
              </button>
              <button className="bg-[#1b4962] hover:opacity-70 text-white px-3 lg:px-6 py-2 lg:py-3 text-[14px] lg:text-[18px] rounded font-semibold transition cursor-pointer">
                <a>View our Team</a>
              </button>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default HeroSection;
