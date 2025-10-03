"use client";
import { useEffect, useState } from "react";

const backgrounds = [
  "",
  ""
  // "bg-[url('https://avantage.bold-themes.com/business/wp-content/uploads/sites/2/2019/04/img-slider-01.jpg')]",
  // "bg-[url('https://avantage.bold-themes.com/business/wp-content/uploads/sites/2/2019/04/img-slider-03.jpg')]"
];

const HeroSection = () => {
  const [showFirst, setShowFirst] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowFirst(prev => !prev);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className={`relative flex h-[70vh] lg:h-auto md:flex-row items-center justify-between min-h-screen bg-gradient-to-r bg-cover bg-center backdrop-brightness-150 lg:backdrop-brightness-100 from-gray-50 to-white px-6 md:px-[8%] py-10 ${
        showFirst ? backgrounds[0] : backgrounds[1]
      }`}
    >
      {/* Left Content */}
      <div
        className={`w-full md:w-1/2 flex flex-col items-start max-w-xl z-10 -mt-40 lg:mt-0 ${
          showFirst ? "upward-move" : ""
        }`}
      >
        <div className="flex flex-row items-center">
          <div className="h-[2px] w-12 bg-[#e94d65]"></div>
          <p className="text-sm font-medium text-gray-600 mb-2 pl-2">
            WE WANT TO SEE YOU SUCCEED
          </p>
        </div>

        {showFirst ? (
          <>
            <h1 className="text-4xl md:text-7xl font-bold mb-2 text-[#1b4962]">
              Find <span className="text-[#1b4962] ">that</span>
              <br />
              <span className="text-[#e94d65] ">missing peices</span>
            </h1>
            <p className="text-base md:text-lg text-[#000] my-5">
              Energistically myocardiinate clicks-and-mortar testing procedures
              whereas next-generation manufactured products.
            </p>
          </>
        ) : (
          <>
            <h1 className="text-4xl md:text-7xl font-bold mb-2 text-[#1b4962]">
              Your <span className="text-[#1b4962]">success</span>
              <br />
              <span className="text-[#e94d65]">Our business</span>
            </h1>
            <p className="text-base md:text-lg text-[#000] my-5">
              Energistically myocardiinate clicks-and-mortar testing procedures
              whereas next-generation manufactured products.
            </p>
          </>
        )}

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
  );
};

export default HeroSection;

// //bg-[url('https://avantage.bold-themes.com/business/wp-content/uploads/sites/2/2019/04/img-slider-01.jpg')]

// //bg-[url('https://avantage.bold-themes.com/business/wp-content/uploads/sites/2/2019/04/img-slider-03.jpg')]








// "use client";

// const HeroSection = () => {
//   return (
//     <section className="relative h-[70vh] md:flex-row min-h-screen overflow-hidden px-6 md:px-[8%] py-10">
//       {/* Backgrounds */}
//       <div className="absolute inset-0 bg-cover bg-center  backdrop-brightness-150 lg:backdrop-brightness-100 animate-fade1"></div>
//       <div className="absolute inset-0 bg-cover bg-center  backdrop-brightness-150 lg:backdrop-brightness-100 animate-fade2"></div>

//       <div className="relative w-full md:w-1/2 max-w-xl flex flex-col items-start z-10 -mt-40 lg:mt-0">
//         <div className="flex items-center mb-2 pl-2 gap-2">
//           <div className="h-[2px] w-12 bg-[#e94d65]" />
//           <p className="text-sm font-medium text-gray-600">WE WANT TO SEE YOU SUCCEED</p>
//         </div>

//         <div className="animate-fade1">
//           <h1 className="text-4xl md:text-7xl font-bold mb-2 text-[#1b4962]">
//             Find <span>that</span><br />
//             <span className="text-[#e94d65]">missing peices</span>
//           </h1>
//           <p className="text-base md:text-lg text-[#000] my-5">
//             Energistically myocardiinate clicks-and-mortar testing procedures whereas next-generation manufactured products.
//           </p>
//         </div>

//         <div className="animate-fade2 absolute top-0 left-0 opacity-0 pointer-events-none">
//           <h1 className="text-4xl md:text-7xl font-bold mb-2 text-[#1b4962]">
//             Your <span>success</span><br />
//             <span className="text-[#e94d65]">Our business</span>
//           </h1>
//           <p className="text-base md:text-lg text-[#000] my-5">
//             Energistically myocardiinate clicks-and-mortar testing procedures whereas next-generation manufactured products.
//           </p>
//         </div>

//         <div className="flex flex-row gap-4 mt-2 z-10">
//           <button className="bg-[#e94d65] hover:opacity-70 text-white rounded px-3 lg:px-6 py-2 lg:py-3 text-[14px] lg:text-[18px] font-semibold transition cursor-pointer">
//             View our Solutions
//           </button>
//           <button className="bg-[#1b4962] hover:opacity-70 text-white rounded px-3 lg:px-6 py-2 lg:py-3 text-[14px] lg:text-[18px] font-semibold transition cursor-pointer">
//             <a>View our Team</a>
//           </button>
//         </div>
//       </div>

//       <style jsx>{`
//         @keyframes fade1 {
//           0%, 49.99% { opacity: 1; }
//           50%, 100% { opacity: 0; }
//         }
//         @keyframes fade2 {
//           0%, 49.99% { opacity: 0; }
//           50%, 100% { opacity: 1; }
//         }
//         .animate-fade1 {
//           animation: fade1 6s linear infinite;
//         }
//         .animate-fade2 {
//           animation: fade2 6s linear infinite;
//           position: absolute;
//           top: 0;
//           left: 0;
//         }
//       `}</style>
//     </section>
//   );
// };

// export default HeroSection;