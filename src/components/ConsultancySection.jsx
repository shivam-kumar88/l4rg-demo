"use client";
import React, { useState } from "react";
import ConsultancyCard from "./ConsultancyCard";

const categories = [
  "All",
  "Financial",
  "Human Resources",
  "Solitory",
  "Start Ups",
  "Strategy"
];

const cases = [
  {
    image: "https://avantage.bold-themes.com/business/wp-content/uploads/sites/2/2019/04/portfolio-05-1280x1280.jpg", // update with local image path
    category: "Strategy",
    title:"HSBC Recuriting",
    description:"Objectively integrate enterprise-wide strategic theme areas with functionalized infrastructures. Interactively productize premium technologies whereas interdependent quality vectors. via 24/7 markets."
  },
  {
    image: "https://avantage.bold-themes.com/business/wp-content/uploads/sites/2/2019/04/blog-post-26-1280x1280.jpg",
    category: "Strategy",
    title:"Miller Solutions",
    description:"Objectively integrate enterprise-wide strategic theme areas with functionalized infrastructures. Interactively productize premium technologies whereas interdependent quality vectors. Rapaciously utilize enterprise experiences via 24/7 markets."
  },
  {
    image: "https://avantage.bold-themes.com/business/wp-content/uploads/sites/2/2019/04/portfolio-04-1280x1280.jpg",
    category: "Strategy",
    title:"Scalepay",
    description:"Objectively integrate enterprise-wide strategic theme areas with functionalized infrastructures. Interactively productize premium technologies whereas interdependent quality vectors."
  }
];

export default function ConsultancySection() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredCases =
    activeCategory === "All"
      ? cases
      : cases.filter((c) => c.category === activeCategory);

  return (
    <section className="bg-white py-10 px-6 md:px-16">
        <div className='flex items-center '>
            <div className="h-[2px] w-10 bg-[#e94d65] mr-3 -mt-1"></div>
            <h2 className="text-gray-800 font-medium text-lg mb-2">
                SEE WHAT WE DO
            </h2>
        </div>
      
      <h1 className="text-3xl lg:text-6xl font-bold mb-6">
        <span className="text-[#1b4962]">Consultancy</span>
        <span className="text-[#e94d65]"> Cases</span>
      </h1>

      {/* Categories */}
      <div className="flex flex-wrap items-center gap-4 mb-8">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`text-lg font-semibold cursor-pointer ${
              activeCategory === cat
                ? "text-[#e94d65] border-b-2 border-[#e94d65] "
                : "text-gray-900"
            }`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Case Images */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {filteredCases.map((caseItem, idx) => (
          <ConsultancyCard key={idx} data={caseItem} />
        ))}
      </div>
    </section>
  );
}
