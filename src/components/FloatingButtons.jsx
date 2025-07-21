// components/FloatingButtons.jsx
import React from "react";

const FloatingButtons = ({ tags, selected, setSelected }) => {
  return (
    <div className="fixed right-4 top-1/2 -translate-y-1/2 flex flex-col items-center gap-6 z-50">
      {tags.map((tag) => (
        <button
          key={tag}
          onClick={() => setSelected(tag)}
          className={`bg-white shadow-xl rounded-full px-2 py-4 text-sm font-medium transition duration-300 w-10 ${
            selected === tag
              ? "bg-[#F00E8D] text-white"
              : "text-gray-700 hover:bg-[#F00E8D] hover:text-white"
          }`}
          style={{
            writingMode: "vertical-rl",
            textOrientation: "mixed",
            transform: "rotate(180deg)",
          }}
        >
          {tag}
        </button>
      ))}
    </div>
  );
};

export default FloatingButtons;
