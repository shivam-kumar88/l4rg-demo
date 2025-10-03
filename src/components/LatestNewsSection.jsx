// components/LatestNewsSection.jsx

import Image from "next/image";

const newsData = [
    {
      type: "PROJECTS",
      title: "Consulting Project",
      description: "Dynamically target high-payoff intellectual capital for customized technologies. Objectively integrate emerging core competencies before process-centric communities. Dramatically evisculate holistic innovation rather than client-centric...",
      date: { day: "4", month: "APR" },
      image: "https://avantage.bold-themes.com/business/wp-content/uploads/sites/2/2019/04/blog-post-01-640x640.jpg", // Replace with path to your image
      link: "#"
    },
    {
      type: "ANNOUNCEMENTS NEWS",
      title: "Latest Client",
      description: "Progressively maintain extensive infomediaries via extensible niches. Dramatically disseminate...",
      date: { day: "19", month: "MAR" },
      link: "#"
    },
    {
      type: "NEWS PROJECTS",
      title: "Management Project",
      description: "Proactively fabricate one-to-one materials via effective e-business. Completely synergize scalable e-...",
      date: { day: "4", month: "MAR" },
      link: "#"
    }
  ];
  
  export default function LatestNewsSection() {
    return (
      <section className="w-full py-12 bg-white">
        <div className="lg:px-[8%] mx-auto px-4">
          {/* Header */}
          <div className="mb-6">
            <div className="flex items-center mb-2">
              <span className="w-16 h-0.5 bg-red-500 mr-3" />
              <span className="text-black font-semibold text-lg tracking-wide">OUR ANNOUNCEMENTS</span>
            </div>
            <h2 className="text-4xl font-bold">
              <span className="text-[#205876]">Latest </span>
              <span className="text-[#e94d65]">News</span>
            </h2>
          </div>
  
          {/* News Cards */}
          <div className="flex flex-col gap-8 md:flex-row">
            {/* Desktop: show all cards, Mobile: show vertical stack */}
            {newsData.map((item, idx) => {
                return(
                <div key={idx} className="flex flex-row">
              <div className={`flex-1 bg-[#f3f3f3] rounded-lg shadow-md relative overflow-hidden ${item.image ?"lg:w-[45%]": "lg:w-[28%]"} `}>
                
                {/* <div className="absolute top-0 right-0 w-24 h-24 bg-white z-10" style={{
                  clipPath: "polygon(0 0, 100% 0, 100% 100%)"
                }}></div> */}
                <div className="w-[200px] h-[100px] -mt-12 -mr-10 bg-[#fff]  rotate-[30deg] absolute top-0 right-0 z-10"></div>
                
                <div className="absolute top-2 right-4  text-black text-3xl font-extrabold text-right z-20">
                  {item.date.day}
                  <div className="text-base font-normal">{item.date.month}</div>
                </div>
                {/* Content */}
                <div className={`p-0 ${item.image ? "bg-black/60 flex flex-col justify-end h-96" : ""}`}>
                  {item.image && (
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      style={{
                        objectFit: 'cover',
                        filter: 'blur(0px) brightness(0.7)'
                      }}
                      priority
                    />
                    // <img src={item.image} alt={item.title} className="absolute inset-0 w-full h-full object-cover z-0" style={{ filter: "blur(0px) brightness(0.7)" }} />
                  )}
                  {
                    item.image
                    &&
                    <div className={`p-6 shadow-lg bg-gradient-to-b from-white/0 to-black/60 relative z-10 ${!item.image && "bg-[#f3f3f3]"}`}>
                        <div className="absolute  "></div>
                    <div className="mb-2 text-white font-semibold text-xs tracking-wide">{item.type}</div>
                    <h3 className="font-bold text-2xl mb-2 text-white">{item.title}</h3>
                    <p className="text-base text-white mb-4">
                      {item.description}
                    </p>
                    <a href={item.link} className="text-[#e94d65] font-semibold flex items-center">
                      Read more
                      <span className="ml-2">&rarr;</span>
                    </a>
                  </div>
                  }
                </div>
                {!item.image && (
                  <div className="p-6 mt-[100px] bg-[#f3f3f3]">
                    <div className="mb-2 text-black font-semibold text-xs tracking-wide">{item.type}</div>
                    <h3 className="font-bold text-2xl mb-2 text-[#e94d65]">{item.title}</h3>
                    <p className="text-base text-black/90 mb-4">
                      {item.description}
                    </p>
                    <a href={item.link} className="text-[#e94d65] font-semibold flex items-center">
                      Read more
                      <span className="ml-2">&rarr;</span>
                    </a>
                  </div>
                )}
              </div>
              {/* <div className="w-[200] h-[80] skew-12 bg-[#000] rotate-[25deg] -ml-[170px] -mt-7 z-10"></div> */}
              </div>
                )
            })}
          </div>
        </div>
      </section>
    );
  }
  