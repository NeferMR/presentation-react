import React, { useState, useEffect } from "react";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [technologies, setTechnologies] = useState([]);
  const [stacks, setStacks] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedTechnology, setSelectedTechnology] = useState(null);
  const [selectedStack, setSelectedStack] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  // Llamado a la API usando useEffect
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
    <section className="bg-[#416e9b] py-10" id="projects">
      <h2 className="text-center text-5xl font-bold my-16 text-white">
        Proyectos
      </h2>
      <div className="flex justify-center mb-6">
        <select
          className="border border-gray-300 rounded-lg p-2 mr-4"
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
          className="border border-gray-300 rounded-lg p-2"
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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-12">
        {projects.map((proj) =>
          (selectedTechnology &&
            !proj.Tecnologia.includes(selectedTechnology)) ||
          (selectedStack && proj.Stack !== selectedStack) ? null : (
            <div
              key={proj._id}
              onClick={() => openModal(proj)}
              className="cursor-pointer bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition"
            >
              <img
                src={proj.Imagen}
                alt={proj.Nombre}
                className="rounded-lg mb-4"
              />
              <h3 className="text-lg font-semibold">{proj.Nombre}</h3>
              <p className="text-gray-600">{proj.Descripción}</p>
            </div>
          )
        )}

        {isOpen && selectedProject && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-xl shadow-xl max-w-md w-full p-6 relative">
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
              >
                ×
              </button>
              <h2 className="text-2xl font-bold mb-2">
                {selectedProject.Nombre}
              </h2>
              <p className="mb-4 text-gray-700">{selectedProject.LongText}</p>
              <p>
                <span className="font-semibold">Tecnologías:</span>{" "}
                {selectedProject.Tecnologia.join(", ")}
              </p>
              <p>
                <span className="font-semibold">Stack:</span>{" "}
                {selectedProject.Stack}
              </p>
              {selectedProject.Imagen && (
                <img
                  src={selectedProject.Imagen}
                  alt={selectedProject.Nombre}
                  className="mt-4 rounded"
                />
              )}
              {selectedProject.Link ? (
                <a
                  href={selectedProject.Link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block text-blue-600 hover:underline"
                >
                  Ver más
                </a>
              ) : (
                <p className="mt-4 text-gray-500">No hay link disponible</p>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
