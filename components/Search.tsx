import React from "react";

const Search = () => {
  return (
    <section className="max-w-[495px] bg-white py-6 px-4 rounded-full flex items-center justify-between  ">
      <div className="flex items-center gap-2">
        <svg
          width="44"
          height="44"
          viewBox="0 0 44 44"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g opacity="0.5">
            <circle
              cx="18.3333"
              cy="18.3333"
              r="12.8333"
              stroke="#0A0A20"
              stroke-width="2.75"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M38.5 38.5L27.5 27.5"
              stroke="#0A0A20"
              stroke-width="2.75"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </g>
        </svg>

        <input
          type="text"
          name=""
          id=""
          placeholder="Enter keywords to search"
          className="focus:outline-none"
        />
      </div>
      <button className="bg-hover text-white py-3 px-5 rounded-full text-xl">
        Search
      </button>
    </section>
  );
};

export default Search;
