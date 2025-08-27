import React, { useState, useEffect } from "react";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [technologies, setTechnologies] = useState([]);
  const [stacks, setStacks] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedTechnology, setSelectedTechnology] = useState(null);
  const [selectedStack, setSelectedStack] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    fetch("https://mongodbapi.glitch.me/api/items")
      .then((res) => res.json())
      .then((data) => setProjects(data))
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    const allTechs = projects.flatMap((item) => item.Tecnologia);
    const uniqueTechs = Array.from(new Set(allTechs));
    setTechnologies(uniqueTechs);
    const allStacks = projects.flatMap((item) => item.Stack);
    const uniqueStacks = Array.from(new Set(allStacks));
    setStacks(uniqueStacks);
  }, [projects]);

  const openModal = (project) => {
    setSelectedProject(project);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedProject(null);
  };

  return (
    <section className="bg-[#416e9b] dark:bg-gray-900 py-10 px-4 sm:px-6 md:px-8" id="projects">
      <h2 className="text-center text-3xl sm:text-4xl md:text-5xl font-bold my-12 sm:my-16 text-white">
        Proyectos
      </h2>
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-8 max-w-4xl mx-auto">
        <select
          className="border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg p-3 w-full sm:w-auto min-w-[200px] focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={selectedTechnology || ""}
          onChange={(e) => setSelectedTechnology(e.target.value)}
        >
          <option value="">Filtrar por Tecnología</option>
          {technologies.map((tech, index) => (
            <option key={index} value={tech}>
              {tech}
            </option>
          ))}
        </select>
        <select
          className="border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg p-3 w-full sm:w-auto min-w-[200px] focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={selectedStack || ""}
          onChange={(e) => setSelectedStack(e.target.value)}
        >
          <option value="">Filtrar por Stack</option>
          {stacks.map((stack, index) => (
            <option key={index} value={stack}>
              {stack}
            </option>
          ))}
        </select>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {projects.length === 0 ? (
          <div className="sm:col-span-2 lg:col-span-3">
            <LoadingSpinner />
          </div>
        ) : (
          projects.map((proj) =>
            (selectedTechnology &&
              !proj.Tecnologia.includes(selectedTechnology)) ||
            (selectedStack && proj.Stack !== selectedStack) ? null : (
              <div
                key={proj._id}
                onClick={() => openModal(proj)}
                className="cursor-pointer bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <img
                  src={proj.Imagen}
                  alt={`Imagen del proyecto ${proj.Nombre}`}
                  className="rounded-lg mb-4 w-full h-40 sm:h-48 object-cover"
                />
                <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">{proj.Nombre}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-3 text-sm line-clamp-3">{proj.Descripcion}</p>
                <div className="flex flex-wrap gap-1 mb-3">
                  {proj.Tecnologia.map((tech, index) => (
                    <span
                      key={index}
                      className="inline-block bg-blue-100 dark:bg-blue-900 text-blue-500 dark:text-blue-300 text-xs font-semibold px-2.5 py-0.5 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <p className="text-cyan-600 font-bold text-sm hover:text-cyan-700">
                  Ver proyecto →
                </p>
              </div>
            )
          )
        )}

        {isOpen && selectedProject && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
            onClick={closeModal}
          >
            <div 
              className="bg-white dark:bg-gray-800 rounded-xl shadow-xl max-w-lg w-full max-h-[90vh] overflow-y-auto p-6 relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 text-2xl font-bold w-8 h-8 flex items-center justify-center"
                aria-label="Cerrar modal"
              >
                ×
              </button>
              <h2 className="text-xl sm:text-2xl font-bold mb-3 pr-8 text-gray-900 dark:text-white">
                {selectedProject.Nombre}
              </h2>
              <p className="mb-4 text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                {selectedProject.LongText}
              </p>
              <div className="mb-3">
                <span className="font-semibold text-sm text-gray-900 dark:text-white">Tecnologías:</span>{" "}
                <span className="text-sm text-gray-700 dark:text-gray-300">{selectedProject.Tecnologia.join(", ")}</span>
              </div>
              <div className="mb-4">
                <span className="font-semibold text-sm text-gray-900 dark:text-white">Stack:</span>{" "}
                <span className="text-sm text-gray-700 dark:text-gray-300">{selectedProject.Stack}</span>
              </div>
              {selectedProject.Imagen && (
                <img
                  src={selectedProject.Imagen}
                  alt={`Imagen del proyecto ${selectedProject.Nombre}`}
                  className="mt-4 rounded w-full h-40 sm:h-48 object-cover"
                />
              )}
              {selectedProject.Link ? (
                <a
                  href={selectedProject.Link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors duration-300 text-sm"
                >
                  Ver proyecto
                </a>
              ) : (
                <p className="mt-4 text-gray-500 dark:text-gray-400 text-sm">No hay link disponible</p>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
