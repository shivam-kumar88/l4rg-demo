import {
  FaBalanceScale,
  FaChartPie,
  FaUserFriends,
  FaChess,
  FaMountain,
  FaUsers,
} from "react-icons/fa";

const industries = [
  {
    icon: <FaBalanceScale className="text-[#e94d65]" size={80} />,
    title: "Solicitory",
    description:
      "Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line.",
  },
  {
    icon: <FaChartPie className="text-[#e94d65]" size={80} />,
    title: "Business Planning",
    description:
      "Podcasting operational change management inside of workflows to establish a framework.",
  },
  {
    icon: <FaUserFriends className="text-[#e94d65]" size={80} />,
    title: "Human Resources",
    description:
      "Dynamically innovate resource-leveling customer service for state of the art customer service.",
  },
  {
    icon: <FaChess className="text-[#e94d65]" size={80} />,
    title: "Strategy",
    description:
      "Seamlessly visualize quality intellectual capital without superior collaboration and idea-sharing.",
  },
  {
    icon: <FaMountain className="text-[#e94d65]" size={80} />,
    title: "Start Ups",
    description:
      "Interactively coordinate proactive e-commerce via process-centric outside the box thinking.",
  },
  {
    icon: <FaUsers className="text-[#e94d65]" size={80} />,
    title: "Organisations",
    description:
      "Seamlessly empower fully researched growth strategies and interoperable internal or organic sources.",
  },
];

const ConsultancyIndustries = () => (
  <div className="px-5  bg-white rounded-xl shadow lg:px-[8%] mt-[80vh] lg:mt-0 pb-10">
    <div>
      <div className="flex items-center ">
        <div className="h-[2px] w-12 bg-[#e94d65] mr-2"></div>
        <h2 className="text-sm font-semibold text-[#333] mb-1">
          WHERE CAN WE HELP YOU
        </h2>
      </div>

      <h1 className="text-4xl font-bold text-[#1b4962] mb-2">
        Consultancy <span className="text-[#e94d65]">Industries</span>
      </h1>
      <p className="mt-4 text-[#000] max-w-2xl">
        Nanotechnology immersion along the information highway will close the
        loop on focusing solely on the bottom line. Override the digital divide
        with additional clickthroughs from DevOps.
      </p>
    </div>
    <div className="mt-10 grid gap-8 grid-cols-1 md:grid-cols-3">
      {industries.map((ind, idx) => (
        <div
          key={idx}
          className="flex items-start space-x-4 p-3  rounded-lg  transition"
        >
          <div>{ind.icon}</div>
          <div>
            <h3 className="text-lg font-semibold text-[#1b4962]">
              {ind.title}
            </h3>
            <p className="mt-1 text-[#000] text-[14px]">{ind.description}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default ConsultancyIndustries;
