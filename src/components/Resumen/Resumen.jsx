import React from "react";
import "./Resumen.css";

function Resumen() {
  return (
    <section className="relative bg-gray-50 dark:bg-gray-800 py-12 px-4 sm:px-6 md:px-8 overflow-hidden" id="resumen">
      {/* Elementos decorativos de fondo */}
      <div className="absolute inset-0 opacity-3 dark:opacity-5">
        <div className="absolute top-20 left-10 w-40 h-40 bg-blue-300 rounded-full mix-blend-multiply filter blur-2xl animate-blob" />
        <div className="absolute top-40 right-10 w-40 h-40 bg-purple-300 rounded-full mix-blend-multiply filter blur-2xl animate-blob animation-delay-2000" />
        <div className="absolute bottom-20 left-20 w-40 h-40 bg-pink-300 rounded-full mix-blend-multiply filter blur-2xl animate-blob animation-delay-4000" />
      </div>
      
      <div className="relative z-10 max-w-6xl mx-auto">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-12 mb-8 sm:mt-20 sm:mb-12 text-[#274059] dark:text-white text-center">
        Resumen
      </h2>
      <div className="max-w-4xl mx-auto lg:px-8">
        <ul className="list-none relative">
          <h3 className="text-lg sm:text-xl font-bold my-6 sm:my-8 px-4 py-2 bg-[#cccccc] dark:bg-gray-600 rounded-2xl text-black dark:text-white">
            EXPERIENCIA LABORAL
          </h3>
          {TimelineItem(
            "Prácticas Profesionales",
            "Transelca S.A.S - 2024",
            "Durante este periodo de prácticas profesionales, pude desempeñarme en el desarrollo de un sistema de gestión de proyectos de la empresa, el cual se encarga de gestionar los proyectos desde la creación hasta la finalización, así como también la generación de diversos procesos automatizados que recortarán notablemente el tiempo de esfuerzo humano invertido dentro de esta área, con el fin de mejorar la eficiencia y la calidad de la gestión y del análisis de estos mismos proyectos."
          )}
          {TimelineItem(
            "Tutor de algoritmia y programación",
            "Universidad del Norte - 2022 - 2023",
            "Durante este periodo, pude desempeñarme como tutor de algoritmia y programación para los estudiantes de primeros semestres de la universidad, con el fin de mejorar su comprensión y habilidades dentro de este campo de la programación, tanto en el área de programación en lenguajes como también en el área de algoritmia, apoyando a desarrollar su lógica de programación para así poder tener una base sólida y poder desempeñarse de manera más eficiente en el mundo laboral."
          )}
          <h3 className="text-lg sm:text-xl font-bold my-6 sm:my-8 px-4 py-2 bg-[#cccccc] dark:bg-gray-600 rounded-2xl text-black dark:text-white">
            EDUCACIÓN
          </h3>
          {TimelineItem(
            "Ingeniería de Sistemas",
            "Universidad del Norte - 2020 - 2025",
            "Periodo universitario donde aprendí muchísimas cosas tanto personal como profesionalmente, ya que, aparte de aprender cosas tan básicas como la programación, algoritmia, bases de datos, etc., hasta teorías y técnicas más complejas como las metodologías de trabajo, la gestión de equipos, la eficiencia y eficacia de procesos, la comunicación efectiva con el cliente, etc. También aprendí muchas otras cosas como el correcto trabajo en equipo, la importancia de la comunicación, la importancia de la resolución de problemas, la investigación, los tiempos de respuesta, etc."
          )}
        </ul>
      </div>
      </div>
    </section>
  );
}

function TimelineItem(title, date, description) {
  return (
    <li className="flex gap-4 sm:gap-6 md:gap-8 my-8 sm:my-12 relative">
      <i className="icon-briefcase text-xl sm:text-2xl text-white cursor-default p-3 sm:p-4 bg-[#274059] dark:bg-blue-600 rounded-full text-center mt-2 sm:mt-4 relative z-10 flex-shrink-0"></i>
      <div className="flex flex-col gap-2 sm:gap-4 flex-1">
        <h4 className="text-lg sm:text-xl font-semibold text-[#274059] dark:text-white">{title}</h4>
        <span className="font-bold text-[#a5a5a5] dark:text-gray-400 text-sm sm:text-base">{date}</span>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm sm:text-base">{description}</p>
      </div>
    </li>
  );
}

export default Resumen;
