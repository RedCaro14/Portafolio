import React, { useState } from "react";

const GameProjectCard = ({ image, title, year, team, role, summary, details, itchLink }) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="bg-white shadow-lg rounded-3xl overflow-hidden max-w-md mx-auto hover:shadow-2xl transition-shadow duration-300">
      <img src={image} alt={title} className="w-full h-56 object-cover" />

      <div className="p-6">
        <h3 className="text-2xl font-bold text-gray-900">{title}</h3>
        <p className="text-sm text-gray-500 mt-1">{year} · {team}</p>
        <p className="mt-3 text-gray-700"><strong>Rol:</strong> {role}</p>
        <p className="mt-3 text-gray-600 italic">{summary}</p>

        <div className="mt-5 flex justify-between items-center">
          <button
            onClick={() => setShowDetails(!showDetails)}
            className="text-pink-600 font-semibold hover:underline text-base transition-colors"
          >
            {showDetails ? "Ocultar detalles" : "Ver más"}
          </button>

          {itchLink && (
            <a
              href={itchLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-pink-600 text-white px-4 py-2 rounded-full font-medium hover:bg-pink-700 transition-colors text-base"
              aria-label={`Ver ${title} en Itch.io`}
            >
              Itch.io
            </a>
          )}
        </div>

        {showDetails && (
          <div className="mt-5 text-gray-800 text-sm border-t pt-4 whitespace-pre-line">
            {details}
          </div>
        )}
      </div>
    </div>
  );
};

export default GameProjectCard;

