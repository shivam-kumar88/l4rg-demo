import React from "react";
import ServicesCard from "./ServicesCard";

const cards = [
  {
    title: "SMALL TACTICS",
    subTitle: "Our Services",
    desc: "Avantage Group is all about strategy, we’re here to inform which tactics need funding and which are drains on resources.",
    img: "https://avantage.bold-themes.com/business/wp-content/uploads/sites/2/2019/04/bgn-boxes-01.jpg",
  },
  {
    title: "PLAN, THEN DO",
    subTitle: "Our Approach",
    desc: "Business we operate in is like an intricate game of chess, where every move counts and you keep score with money.",
    img: "https://avantage.bold-themes.com/business/wp-content/uploads/sites/2/2019/04/bgn-boxes-02.jpg",
  },
  {
    title: "PROFF, NO PROMISES",
    subTitle: "Our Reseults",
    desc: "Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line.",
    img: "https://avantage.bold-themes.com/business/wp-content/uploads/sites/2/2019/04/bgn-boxes-03.jpg",
  },
];

const Services = () => (
  <div className="w-full px-[8%] flex flex-col lg:flex-row lg:gap-x-8 -mt-[15vh] lg:-mt-[5vh] lg: space-y-3 h-[450px]">
    {cards.map((item, idx) => {
      return (
        <div key={idx} className="w-full lg:w-[30%]">
          <ServicesCard
            title={item.title}
            subTitle={item.subTitle}
            desc={item.desc}
            image={item.img}
          />
        </div>
      );
    })}
  </div>
);

export default Services;
