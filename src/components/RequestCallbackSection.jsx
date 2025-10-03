import { FaMoneyBillTransfer } from "react-icons/fa6";
import { FaRegCompass } from "react-icons/fa";
import { LuTrophy } from "react-icons/lu";
import Image from "next/image";


const achivements = [
    {
        number:"500",
        details:"Business advices given over 30 years",
        icon: <FaMoneyBillTransfer className="text-[#e94d65]" size={70} />,
    },
    {
        number:"170",
        details:"Businesses guided over thirty years",
        icon: <FaRegCompass className="text-[#e94d65]" size={70} />,
    },
    {
        number:"30",
        details:"Business Excellence awards achieved",
        icon: <LuTrophy className="text-[#e94d65]" size={70} />,
    },
]

export default function RequestCallbackSection() {
    return (
      <div className="w-full bg-white min-h-screen flex flex-col md:flex-row items-stretch py-10">
        {/* Left section */}
        <div className="flex-1 flex flex-col justify-center px-6 md:px-16 lg:pl-[8%] py-8">
          <div className="border-b-1 border-[#bebdbd] pb-10">
            <div className='flex items-center '>
                <div className="h-[2px] w-10 bg-[#e94d65] mr-3 -mt-1"></div>
                <span className="text-sm font-medium text-[#000] ">
                    REQUEST A CALL BACK
                </span>
            </div>
          
            <h1 className="text-3xl md:text-6xl font-extrabold mb-2 leading-tight">
                <span className="text-[#1b4962]">Get your Business</span>
                <br />
                <span className="text-[#e94d65]">Right up There</span>
            </h1>
            <p className="text-lg mt-4 text-gray-700 mb-5 max-w-xl">
                Phosfluorescently engage worldwide methodologies with web-enabled technology. Interactively coordinate proactive e-commerce via process-centric outside the box thinking.
            </p>
            <button className="bg-[#e94d65] text-white font-semibold py-4 px-8 rounded hover:bg-[#e94d65] transition w-fit mb-8 shadow-md cursor-pointer">
                Request a Call Back
            </button>
          </div>
  
          
          <div className=" flex flex-col gap-y-8 lg:flex-row  items-center lg:justify-between mt-5 lg:mt-10 mb-3 ">
            {
                achivements.map((item, index)=>{
                    return(
                        <div key={index} className="flex flex-col items-center lg:w-[160px]">
                            <div>{item.icon}</div>
                            <span className="text-3xl font-extrabold text-[#1b4962] mt-3 lg:mt-5">{item.number}+</span>
                            <span className="text-gray-700 mt-2 text-center text-sm px-1 lg:mt-3">{item.details}</span>
                        </div>
                    )
                })
            }
            
          </div>
        </div>
        
        {/* Right image/graphic section */}
        <div className="md:flex-1 flex items-center justify-center relative overflow-hidden">
          {/* <img
            src="https://avantage.bold-themes.com/business/wp-content/uploads/sites/2/2019/04/img-callback.png" // Replace with real image, optimized & hosted in /public
            alt="Business growth arrow"
            className="w-auto h-full object-cover"
          /> */}
          <Image
            src="https://avantage.bold-themes.com/business/wp-content/uploads/sites/2/2019/04/img-callback.png"
            alt="Business growth arrow"
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
        </div>
      </div>
    );
  }