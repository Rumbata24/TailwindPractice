"use client";

import Image from "next/image";
import React, { useState } from "react";
import right from "../public/Group 2 Copy.png";
import left from "../public/Group 2.png";

const sliderData = [
  { name: "Javascript", id: 1 },
  { name: "Chess", id: 2 },
  { name: "Training", id: 3 },
  { name: "Podcasts", id: 4 },
  { name: "Databases", id: 5 },
  { name: "Cryptocurrency", id: 6 },
  { name: "Design", id: 7 },
  { name: "Java", id: 8 },
];

const Slider = () => {
  const [offset, setOffset] = useState(0);

  const handleLeftArrowClick = () => {
    setOffset((prevOffset) =>
      prevOffset === 0 ? sliderData.length - 4 : prevOffset - 1
    );
  };

  const handleRightArrowClick = () => {
    setOffset((prevOffset) =>
      prevOffset === sliderData.length - 4 ? 0 : prevOffset + 1
    );
  };

  return (
    <section className="bg-white max-w-[1102px] flex gap-3 mx-auto py-5 px-6 rounded-full">
      <Image
        src={left}
        alt="left arrow"
        className="cursor-pointer"
        onClick={handleLeftArrowClick}
      />
      <div className="flex overflow-hidden items-center">
        <div
          className="flex gap-2"
          style={{
            width: `${sliderData.length * 100}%`,
            transform: `translateX(-${offset * (100 / sliderData.length)}%)`,
            transition: "transform 0.5s ease-in",
          }}
        >
          {sliderData.map((item, index) => (
            <p
              className="py-3.5 px-5 flex items-center justify-center border rounded-full font-semibold text-xl bg-basic"
              key={index}
              style={{ flex: `0 0 ${100 / sliderData.length}%` }}
            >
              {item.name}
            </p>
          ))}
        </div>
      </div>

      <Image
        src={right}
        alt="right arrow"
        className="cursor-pointer"
        onClick={handleRightArrowClick}
      />
    </section>
  );
};

export default Slider;
