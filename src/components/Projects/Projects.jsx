import React, { useState, useEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import { supabase } from "../../utils/supabase/client";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [technologies, setTechnologies] = useState([]);
  const [stacks, setStacks] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedTechnology, setSelectedTechnology] = useState(null);
  const [selectedStack, setSelectedStack] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  
  // Estados para el carousel de imágenes
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [imageInterval, setImageInterval] = useState(null);

  useEffect(() => {
    async function fetchProjects() {
      try {
        setLoading(true);
        const { data, error } = await supabase
          .from('projects')
          .select('*');
        
        if (error) {
          console.error('Error fetching projects:', error);
          return;
        }
        
        setProjects(data || []);
      } catch (err) {
        console.error('Error:', err);
      } finally {
        setLoading(false);
      }
    }

    fetchProjects();


  }, []);

    console.log(projects);
  useEffect(() => {
    // Adaptar datos de Supabase: convertir strings separadas por comas a arrays
    const allTechs = projects.flatMap((item) => 
      item.Tecnologia ? item.Tecnologia.split(',').map(tech => tech.trim()) : []
    );
    const uniqueTechs = Array.from(new Set(allTechs));
    setTechnologies(uniqueTechs);
    
    const allStacks = projects.flatMap((item) => 
      item.stack ? item.stack.split(',').map(stack => stack.trim()) : []
    );
    const uniqueStacks = Array.from(new Set(allStacks));
    setStacks(uniqueStacks);
  }, [projects]);

  // Limpiar el scroll del body si el componente se desmonta con modal abierto
  useEffect(() => {
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  const openModal = (project) => {
    setSelectedProject(project);
    setIsOpen(true);
    setCurrentImageIndex(0); // Resetear a la primera imagen
    // Prevenir scroll del body cuando el modal está abierto
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedProject(null);
    setCurrentImageIndex(0);
    // Limpiar interval si existe
    if (imageInterval) {
      clearInterval(imageInterval);
      setImageInterval(null);
    }
    // Restaurar scroll del body
    document.body.style.overflow = 'unset';
  };

  // Funciones para el carousel de imágenes
  const getProjectImages = (project) => {
    if (!project?.Imagen) return [];
    return project.Imagen.split(',').map(img => img.trim()).filter(img => img);
  };

  const resetImageTimer = useCallback((images) => {
    // Limpiar interval existente
    if (imageInterval) {
      clearInterval(imageInterval);
    }
    
    // Solo crear nuevo interval si hay más de una imagen
    if (images.length > 1) {
      const newInterval = setInterval(() => {
        setCurrentImageIndex((prevIndex) => 
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
      }, 10000); // 10 segundos
      setImageInterval(newInterval);
    }
  }, [imageInterval]);

  const nextImage = useCallback((images) => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
    resetImageTimer(images);
  }, [resetImageTimer]);

  const prevImage = useCallback((images) => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
    resetImageTimer(images);
  }, [resetImageTimer]);

  // Effect para iniciar el timer cuando se abre el modal
  useEffect(() => {
    if (isOpen && selectedProject) {
      const images = getProjectImages(selectedProject);
      resetImageTimer(images);
    }
    
    return () => {
      if (imageInterval) {
        clearInterval(imageInterval);
      }
    };
  }, [isOpen, selectedProject, imageInterval, resetImageTimer]);

  return (
    <section className="relative bg-gray-50 dark:bg-gray-800 py-10 px-4 sm:px-6 md:px-8 overflow-hidden" id="projects">
      {/* Elementos decorativos de fondo */}
      <div className="absolute inset-0 opacity-3 dark:opacity-5">
        <div className="absolute top-20 left-10 w-40 h-40 bg-blue-300 rounded-full mix-blend-multiply filter blur-2xl animate-blob" />
        <div className="absolute top-40 right-10 w-40 h-40 bg-purple-300 rounded-full mix-blend-multiply filter blur-2xl animate-blob animation-delay-2000" />
        <div className="absolute bottom-20 left-20 w-40 h-40 bg-pink-300 rounded-full mix-blend-multiply filter blur-2xl animate-blob animation-delay-4000" />
      </div>
      
      <div className="relative z-10">
      <h2 className="text-center text-3xl sm:text-4xl md:text-5xl font-bold my-12 sm:my-16 text-gray-900 dark:text-white">
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
        {loading ? (
          <div className="col-span-1 sm:col-span-2 lg:col-span-3 flex justify-center items-center min-h-[300px]">
            <LoadingSpinner />
          </div>
        ) : (
          projects.map((proj) => {
            // Convertir strings a arrays para filtrado
            const projTechnologies = proj.Tecnologia ? proj.Tecnologia.split(',').map(tech => tech.trim()) : [];
            const projStacks = proj.stack ? proj.stack.split(',').map(stack => stack.trim()) : [];
            
            // Aplicar filtros
            if (selectedTechnology && !projTechnologies.includes(selectedTechnology)) return null;
            if (selectedStack && !projStacks.includes(selectedStack)) return null;
            
            return (
              <div
                key={proj.id}
                onClick={() => openModal(proj)}
                className="cursor-pointer bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                {/* Placeholder para imagen cuando la añadas */}
                <div className="rounded-lg mb-4 w-full h-40 sm:h-48 bg-gray-200 dark:bg-gray-600 flex items-center justify-center">
                  <span className="text-gray-500 dark:text-gray-400 text-sm">Sin imagen</span>
                </div>
                <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">{proj.Nombre}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-3 text-sm line-clamp-3">{proj.Descripcion}</p>
                <div className="flex flex-wrap gap-1 mb-3">
                  {projTechnologies.map((tech, index) => (
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
            );
          })
        )}
      </div>
      
      {/* Modal renderizado en el body usando portal */}
      {isOpen && selectedProject && createPortal(
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
              {selectedProject.LongText || selectedProject.Descripcion}
            </p>
            <div className="mb-3">
              <span className="font-semibold text-sm text-gray-900 dark:text-white">Tecnologías:</span>{" "}
              <span className="text-sm text-gray-700 dark:text-gray-300">{selectedProject.Tecnologia}</span>
            </div>
            <div className="mb-4">
              <span className="font-semibold text-sm text-gray-900 dark:text-white">Stack:</span>{" "}
              <span className="text-sm text-gray-700 dark:text-gray-300">{selectedProject.stack}</span>
            </div>
            
            {/* Carousel de Imágenes */}
            {(() => {
              const images = getProjectImages(selectedProject);
              
              if (images.length === 0) {
                return (
                  <div className="mt-4 rounded w-full h-40 sm:h-48 bg-gray-200 dark:bg-gray-600 flex items-center justify-center">
                    <span className="text-gray-500 dark:text-gray-400 text-sm">No hay imágenes aún</span>
                  </div>
                );
              }
              
              return (
                <div className="mt-4 relative">
                  {/* Imagen principal */}
                  <div className="relative w-full h-40 sm:h-48 bg-gray-200 dark:bg-gray-600 rounded overflow-hidden">
                    <img
                      src={images[currentImageIndex]}
                      alt={`${selectedProject.Nombre} - Imagen ${currentImageIndex + 1}`}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZGRkIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjE0IiBmaWxsPSIjOTk5IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjNlbSI+SW1hZ2VuIG5vIGRpc3BvbmlibGU8L3RleHQ+PC9zdmc+';
                      }}
                    />
                    
                    {/* Overlay para botones si hay más de una imagen */}
                    {images.length > 1 && (
                      <>
                        {/* Botón anterior */}
                        <button
                          onClick={() => prevImage(images)}
                          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-70 text-white rounded-full w-8 h-8 flex items-center justify-center transition-all duration-200"
                          aria-label="Imagen anterior"
                        >
                          ←
                        </button>
                        
                        {/* Botón siguiente */}
                        <button
                          onClick={() => nextImage(images)}
                          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-70 text-white rounded-full w-8 h-8 flex items-center justify-center transition-all duration-200"
                          aria-label="Imagen siguiente"
                        >
                          →
                        </button>
                        
                        {/* Indicadores de imagen */}
                        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
                          {images.map((_, index) => (
                            <button
                              key={index}
                              onClick={() => {
                                setCurrentImageIndex(index);
                                resetImageTimer(images);
                              }}
                              className={`w-2 h-2 rounded-full transition-all duration-200 ${
                                index === currentImageIndex 
                                  ? 'bg-white' 
                                  : 'bg-white bg-opacity-50 hover:bg-opacity-70'
                              }`}
                              aria-label={`Ir a imagen ${index + 1}`}
                            />
                          ))}
                        </div>
                      </>
                    )}
                  </div>
                  
                  {/* Contador de imágenes */}
                  {images.length > 1 && (
                    <div className="text-center mt-2">
                      <span className="text-xs text-gray-500 dark:text-gray-400">
                        {currentImageIndex + 1} de {images.length}
                      </span>
                    </div>
                  )}
                </div>
              );
            })()}
          </div>
        </div>,
        document.body
      )}
      </div>
    </section>
  );
}
