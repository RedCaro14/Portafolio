import React from "react";

const FloatingButtons = ({ tags, selected, setSelected }) => {
  return (
    <div className="fixed right-4 top-1/2 -translate-y-1/2 flex flex-col items-center gap-6 z-50">
      {tags.map((tag) => (
        <button
          key={tag}
          onClick={() => setSelected(tag)}
          className={`shadow-xl rounded-full px-2 py-4 text-sm font-medium transition duration-300 w-10 ${
            selected === tag
              ? "bg-white text-[#F00E8D] dark:bg-gray-700 dark:text-[#F00E8D]"
              : "bg-white text-gray-500 dark:bg-gray-800 dark:text-gray-400 hover:bg-[#F00E8D] hover:text-white dark:hover:bg-pink-600 dark:hover:text-white"
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

