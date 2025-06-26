import React, { useState } from "react";
import Tilt from "react-tilt";
import { projects } from "../constants";

const Projects = () => {
  const [selected, setSelected] = useState(null);

  return (
    <div className="container mx-auto px-4 py-16">
      {/* Cards List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, idx) => (
          <Tilt
            className="bg-tertiary rounded-2xl shadow-lg p-6 cursor-pointer transition-transform flex flex-col"
            options={{ max: 25, scale: 1.05 }}
            key={idx}
            onClick={() => setSelected(project)}
          >
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-56 object-contain rounded-lg mb-4 bg-white"
            />
            <h3 className="text-lg font-bold text-white mb-2 text-left">{project.name}</h3>
            <p className="text-secondary text-sm line-clamp-2 text-left">{project.description}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {project.tags?.map((tag) => (
                <p key={tag.name} className={`text-[14px] ${tag.color}`}>
                  #{tag.name}
                </p>
              ))}
            </div>
          </Tilt>
        ))}
      </div>

      {/* Description Popup */}
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
            {/* Description on the left */}
            <div className="md:w-1/2 w-full md:pr-8 mb-6 md:mb-0">
              <h2 className="text-2xl font-bold text-white mb-4">{selected.name}</h2>
              <p className="text-secondary mb-4">{selected.description}</p>
              {selected.link && (
                <a
                  href={selected.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#915EFF] font-semibold hover:underline"
                >
                  Visit Project
                </a>
              )}
              <div className="mt-4 flex flex-wrap gap-2">
                {selected.tags?.map((tag) => (
                  <p key={tag.name} className={`text-[14px] ${tag.color}`}>
                    #{tag.name}
                  </p>
                ))}
              </div>
            </div>
            {/* Image on the right */}
            <div className="md:w-1/2 w-full flex justify-center">
              <img
                src={selected.image}
                alt={selected.name}
                className="w-full max-w-xs h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default Projects;