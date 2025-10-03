import { FaHourglassHalf, FaChartLine, FaGlobe } from "react-icons/fa";
import { IoHourglassOutline } from "react-icons/io5";
import { AiOutlineLineChart } from "react-icons/ai";
import AnimatedCircularBar from "./AnimatedCircularBar";
import { HiOutlineUserGroup } from "react-icons/hi";
import Image from "next/image";


export default function ExperienceSection() {
  return (
    <section className=" w-full bg-white mt-16  mb-5">
      <div className="flex flex-col lg:flex-row items-center lg:items-start  lg:justify-between">
        {/* Left Side - Image */}
        <div className="lg:w-[50%] z-10">
          <div className="">
            {/* <img
              src="https://avantage.bold-themes.com/business/wp-content/uploads/sites/2/2019/04/img-experience.png" // replace with your image path
              alt="Our Team"
              className="h-[450px] lg:h-[110vh]  object-cover"
            /> */}
            <Image
              src="https://avantage.bold-themes.com/business/wp-content/uploads/sites/2/2019/04/img-experience.png"
              alt="Our Team"
              width={1920}       
              height={1170}      
              className="h-[450px] lg:h-[110vh] object-cover"
              style={{ objectFit: 'cover', height: '450px',  }}
              priority           
            />
          </div>
        </div>

        {/* Right Side - Content */}
        <div className="lg:w-[50%] pt-10 w-full px-8 z-10">
          <p className="text-lg font-medium text-[#000]  flex items-center gap-2">
            <span className="w-10 h-[2px] bg-[#e94d65] inline-block"></span>
            GROWING WITH OUR CLIENTS
          </p>

          <h2 className="text-4xl lg:text-6xl font-extrabold mt-4 text-[#1b4962]">
            30 Years of <br/> <span className="text-[#e94d65]">Experience</span>
          </h2>

          <div className="flex flex-col lg:flex-row gap-x-[5%]">
            <p className="mt-6 text-[#000] lg:w-[40%] font-medium">
                Capitalize on low hanging fruit to identify a ballpark value added
                activity to beta test. Override the digital divide with additional
                clickthroughs from DevOps. Nanotechnology immersion along the
                information highway will close the loop on focusing solely on the
                bottom line.
            </p>

            <p className="mt-6 text-[#000] lg:w-[40%] font-medium">
                Leverage agile frameworks to provide a robust synopsis for high
                level overviews. Iterative approaches to corporate strategy foster
                collaborative thinking to further the overall value proposition.
                Organically grow the holistic world view of disruptive innovation
                diversity.
            </p>
          </div>
          

          {/* Icons Section */}
          <div className="flex flex-col lg:flex-row gap-10 mt-10">
            <div className="flex flex-col items-center">
                <AnimatedCircularBar percentage={95} size={180}>
                    <IoHourglassOutline size={80} className=" text-gray-700" />
                </AnimatedCircularBar>
                <h3 className="text-[#1b4962] text-2xl font-bold mt-2 ">
                    Consistency
                </h3>
                <p className="text-[#000] mt-2 lg:max-w-[170px] text-center text-[16px]">
                Podcasting operational change management inside of workflow.
                </p>
            </div>
            <div className="flex flex-col items-center">
                <AnimatedCircularBar percentage={88} size={180}>
                    <AiOutlineLineChart size={80} className=" text-gray-700" />
                </AnimatedCircularBar>
                <h3 className="text-[#1b4962] text-2xl font-bold mt-2 ">
                Improvement
                </h3>
                <p className="text-[#000] mt-2 lg:max-w-[170px] text-center text-[16px]">
                Dynamically innovate customer service for state of the art customer.
                </p>
            </div>
            <div className="flex flex-col items-center">
                <AnimatedCircularBar percentage={90} size={180}>
                    <HiOutlineUserGroup size={65} className=" text-gray-700" />
                </AnimatedCircularBar>
                <h3 className="text-[#1b4962] text-2xl font-bold mt-2 ">
                Branching
                </h3>
                <p className="text-[#000] mt-2 lg:max-w-[170px] text-center text-[16px]">
                Pursue scalable customer service through sustainable potentialities.
                </p>
            </div>
            

            

            
          </div>
        </div>
      </div>

      {/* Custom Clip Path */}
      {/* <style jsx>{`
        .clip-diagonal {
          clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
        }
      `}</style> */}
    </section>
  );
}
