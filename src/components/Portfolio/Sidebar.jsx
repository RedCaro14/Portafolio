// src/components/Portfolio/Sidebar.jsx
export default function Sidebar({ selectedCategory, setSelectedCategory, categories }) {
  return (
    <aside className="sticky top-24 left-0 h-fit flex flex-col space-y-4 p-4 bg-white dark:bg-gray-900 rounded-xl shadow-lg md:w-32 z-10">
      {categories.map(cat => (
        <button
          key={cat}
          onClick={() => setSelectedCategory(cat)}
          className={`text-base font-semibold rounded-full px-3 py-1 transition
            ${selectedCategory === cat ? 'bg-pink-600 text-white' : 'text-gray-600 dark:text-gray-300 hover:bg-pink-100 dark:hover:bg-gray-800'}`}>
          {cat}
        </button>
      ))}
    </aside>
  );
}

