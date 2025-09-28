import Image from "next/image";

const ServicesCard = ({ title, subTitle, desc, image }) => {
  return (
    <div
      style={{ backgroundImage: `url(${image})` }}
      className={`upward-move w-full bg-cover bg-center flex items-center justify-center  h-[350px] overflow-hidden shadow-[0_0_15px_5px_rgba(0,0,0,0.10)] rounded-sm hover:-mt-5 transition-all duration-300`}
    >
      <div className=" w-full max-w-md rounded-lg shadow-lg overflow-hidden h-[350px]">
        <div className=" px-5 pb-5 h-full flex flex-col mt-12 justify-center">
          <div className="flex items-center mb-2">
            <div className="w-8 h-1 bg-[#e94d65] rounded-full mr-2"></div>
            <span className="text-sm font-medium text-gray-600 tracking-widest uppercase">
              {subTitle}
            </span>
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">{title}</h2>
          <p className="text-gray-700 mb-6 line-clamp-3">{desc}</p>
          <div>
            <button className="bg-[#e94d65]  text-white font-semibold py-3 px-6 rounded-md hover:bg-red-500 transition">
              Avantage services
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesCard;
