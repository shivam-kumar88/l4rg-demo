"use client"
import { useState } from "react";
import { FaPlus } from "react-icons/fa";

export default function ConsultancyCard({data}) {
  const [showDetail, setShowDetail] = useState(false);

  return (
    <div
      className="relative h-[350px] w-full max-w-lg mx-auto rounded-md shadow-lg overflow-hidden bg-white group"
      onClick={() => {
        if (window.innerWidth <= 768) setShowDetail((prev) => !prev);
      }}
    >
      <img
        src={data.image}
        alt="HSBC Recruiting"
        className="absolute inset-0 w-full h-full object-cover"
      />

      
        
      <div
        className={`
          absolute left-0 bottom-0 w-full 
          bg-white  shadow-lg
          transition-transform duration-400 ease-in-out
          ${showDetail ? "translate-y-0" : "translate-y-[240px]"}
          md:group-hover:translate-y-0
          md:transition-transform
        `}
        style={{
          minHeight: "150px",
        }}
        onClick={e => e.stopPropagation()} 
      >
        <div className=" relative">
            <div className="w-[110%] bg-white h-[90px] rotate-[-12deg] -mt-[50px] overflow-hidden">
                <div className="absolute top-0 right-0 w-[100px] h-[180px] bg-[#1a475e] rotate-[-55deg] -mt-[80px] -ml-[30px]"
                    
                >
                </div>
                <FaPlus className="absolute right-12 top-2 text-white text-3xl z-10 rotate-12" />
            </div>
            
            <div className="flex flex-col px-7 z-10 relative pb-3 -mt-8">
                
                <h2 className="font-bold text-2xl text-[#e94d65] mb-2">{data.title}</h2>
                <p className="text-gray-700 text-base line-clamp-3 ">{data.description}</p>
            </div>
        </div>
      </div>
    </div>
  );
}
