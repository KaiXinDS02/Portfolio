import React, { useState } from "react";
import Tilt from "react-tilt";
import { events } from "../constants";

const Events = () => {
  const [selected, setSelected] = useState(null);

  return (
    <div className="container mx-auto px-4 py-16">
      {/* Cards List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {events.map((event, idx) => (
          <Tilt
            className="bg-tertiary rounded-2xl shadow-lg p-6 cursor-pointer transition-transform flex flex-col"
            options={{ max: 25, scale: 1.05 }}
            key={idx}
            onClick={() => setSelected(event)}
          >
            <img
              src={event.image}
              alt={event.name}
              className="w-full h-56 object-contain rounded-lg mb-4 bg-white"
            />
            <h3 className="text-lg font-bold text-white mb-2 text-left">{event.name}</h3>
            <p className="text-secondary text-sm line-clamp-3 text-left">{event.description}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {event.tags?.map((tag) => (
                <p key={tag.name} className={`text-[14px] ${tag.color}`}>
                  #{tag.name}
                </p>
              ))}
            </div>
          </Tilt>
        ))}
      </div>

      {/* Expanded Detail Panel */}
      {selected && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="bg-[#23234d] rounded-xl shadow-2xl p-8 flex flex-col md:flex-row items-center relative max-w-3xl w-full mx-4 min-h-[300px]">
            <button
              className="absolute top-4 right-4 text-white text-2xl"
              onClick={() => setSelected(null)}
              aria-label="Close"
            >
              &times;
            </button>
            {/* Image on the left */}
            <div className="md:w-1/2 w-full flex justify-center mb-6 md:mb-0">
              <img
                src={selected.image}
                alt={selected.name}
                className="w-full max-w-xs h-auto rounded-lg shadow-lg"
              />
            </div>
            {/* Description on the right */}
            <div className="md:w-1/2 w-full md:pl-8">
              <h2 className="text-2xl font-bold text-white mb-4">{selected.name}</h2>
              <p className="text-secondary mb-4">{selected.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {selected.tags?.map((tag) => (
                  <p key={tag.name} className={`text-[14px] ${tag.color}`}>
                    #{tag.name}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Events;