import React, { useState } from "react";
import FloatingButtons from "../components/FloatingButtons";
import ProjectContent from "../components/Portfolio/ProjectContent";

const tags = ["Principal", "Videojuegos", "Diseño", "Arte", "Desarrollo"];

export default function ProjectScreen() {
  const [selected, setSelected] = useState("Principal");

  return (
    <div className="bg-gray-50 dark:bg-gray-900 relative pr-16 min-h-screen">
      <FloatingButtons tags={tags} selected={selected} setSelected={setSelected} />
      <div className="pt-8">
        <ProjectContent selectedCategory={selected} />
      </div>
    </div>
  );
}
