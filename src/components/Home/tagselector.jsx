import React, { useState } from "react";

const tags = ["Arte", "Web", "Cocina", "Joyería", "Cerámica"];

export default function TagSelector() {
  const [selected, setSelected] = useState(null);

  return (
    <div className="flex flex-wrap gap-4 p-4">
      {tags.map((tag) => (
        <button
          key={tag}
          className={selected === tag ? "primary" : "secondary"}
          onClick={() => setSelected(tag)}
        >
          {tag}
        </button>
      ))}
    </div>
  );
}
