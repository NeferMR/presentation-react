import React from "react";
import "./Resumen.css";

function Resumen() {
  return (
    <section className="p-4 shadow-lg">
      <h2 className="text-3xl font-bold mt-20 mb-4 text-black text-center">
        Resumen
      </h2>
      <ul className="list-none relative">
        <h3 className="text-xl font-bold my-8 px-4 bg-[#cccccc] rounded-2xl text-black">
          EXPERIENCIA LABORAL
        </h3>
        {TimelineItem(
          "Practicas Profesionales",
          "Transelca S.A.S - 2024",
          "Durante este periodo de practicas profesionales, pude desempeñarme en el desarrollo de un sistema de gestión de proyectos de la empresa, el cual se encarga de gestionar los proyectos de la empresa, desde la creación hasta la finalización, asi como también la generación de diversos procesos automatizados que recortarán notablemente el tiempo de esfuerzo humano invertido dentro de este area, con el fin de mejorar la eficiencia y la calidad de la gestión y del análisis de estos mismos proyectos."
        )}
        {TimelineItem(
          "Tutor de algoritmia y programación",
          "Universidad del Norte - 2022 - 2023",
          "Durante este periodo, pude desempeñarme como tutor de algoritmia y programación, para los estudiantes de primeros semestre de la universidad, con el fin de mejorar su comprensión y habilidades dentro de este campo de la programación, tanto en area de programación en lenguajes como también en area de algoritmia apoyando a desarrollar su lógica de programación, para así poder tener una base sólida y poder desempeñarse de manera más eficiente en el mundo laboral."
        )}
        <h3 className="text-xl font-bold my-8 px-4 bg-[#cccccc] rounded-2xl text-black">EDUCACIÓN</h3>
        {TimelineItem(
          "Ingeniería de Sistemas",
          "Universidad del Norte - 2020 - 2025",
          "Periodo universitario donde aprendí muchísimas cosas tanto personal como profesional, ya que, aparte de aprender de cosas tan básicas como la programación, algoritmia, bases de datos, etc, hasta teorías y técnicas mas complejas como las metodologías de trabajo, la gestión de equipos, la eficiencia y eficacia de procesos, la comunicación efectiva con el cliente, etc. también aprendí de muchas otras cosas como el correcto trabajo en equipo, la importancia de la comunicación, la importancia de la resolución de problemas,la investigación, los tiempos de respuesta, etc."
        )}
      </ul>
    </section>
  );
}

function TimelineItem(title, date, description) {
  return (
    <li className="flex gap-8 my-12 relative">
      <i className="icon-briefcase text-2xl text-white cursor-pointer p-4 bg-[#274059] rounded-full text-center mt-4 relative z-10"></i>
      <div className="flex flex-col gap-4">
        <h4>{title}</h4>
        <span className="font-bold text-[#a5a5a5]">{date}</span>
        <p>{description}</p>
      </div>
    </li>
  );
}

export default Resumen;
