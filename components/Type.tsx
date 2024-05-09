"use client";

import React, { useState } from "react";

const Type = () => {
  const [watchChecked, setWatchChecked] = useState(false);
  const [communityChecked, setCommunityChecked] = useState(false);

  const handleWatchChange = () => {
    setWatchChecked(!watchChecked);
  };
  const handleCommunityChecked = () => {
    setCommunityChecked(!communityChecked);
  };

  return (
    <section className="rounded-[20px] bg-white p-12 w-fit">
      <h1 className="font-semibold text-3xl mb-10">History Type</h1>
      <div className="flex gap-5 items-center">
        <input
          type="checkbox"
          name=""
          id="watch"
          className="hidden"
          checked={watchChecked}
          onChange={handleWatchChange}
        />

        <label
          htmlFor="watch"
          className="flex items-center cursor-pointer text-xl font-semibold"
        >
          <div className="relative w-8 h-8 border-2 border-[#0A0A20] rounded-full mr-2">
            {watchChecked && (
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-5 h-5 bg-[#0A0A20] rounded-full "></div>
            )}
          </div>
          Watch history
        </label>
      </div>

      <div className="flex gap-5 items-center mt-5">
        <input
          type="checkbox"
          name=""
          id="community"
          className="hidden"
          checked={communityChecked}
          onChange={handleCommunityChecked}
        />

        <label
          htmlFor="community"
          className="flex items-center cursor-pointer text-xl font-semibold"
        >
          <div className="relative w-8 h-8 border-2 border-[#0A0A20] rounded-full mr-2">
            {communityChecked && (
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-5 h-5 bg-[#0A0A20] rounded-full "></div>
            )}
          </div>
          Community
        </label>
      </div>
    </section>
  );
};

export default Type;
