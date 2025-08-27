import React from "react";

import Icono from "../Icono/Icono";

function About() {
  return (
    <section id="about" className="bg-white dark:bg-gray-800 p-4 sm:p-6 md:p-8 shadow-lg lg:py-12 lg:px-20 xl:py-16 xl:px-60">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center my-12 sm:my-16 md:my-24 text-[#274059] dark:text-white">
        Sobre mí
      </h2>
      <div className="lg:flex flex-row gap-8">
        <div className="lg:w-2/5 mb-8 lg:mb-0">
          <ul className="list-none flex flex-col gap-4 mx-auto">
            {item("Nombre", "Nefer Medina")}
            {item("Edad", "23 años")}
            {item("Estudios", "Ingeniero de Sistemas")}
            {item("Email", "nefermr5@gmail.com", "mailto:nefermr5@gmail.com")}
            {item("Teléfono", "+57 300 466 7017", "tel:+573004667017")}
          </ul>
        </div>

        <div className="lg:w-3/5 bg-[#f5f5f5] dark:bg-gray-700 p-6 rounded-lg">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-[#274059] dark:text-white text-left">
            ¡Hola!
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            Soy Nefer, ingeniero de sistemas apasionado por la tecnología y el desarrollo de software. Me motiva crear soluciones innovadoras que mejoren la eficiencia de los procesos, y me destaco por ser proactivo, adaptable y con gran capacidad de aprendizaje. Disfruto trabajar en equipo, pero también me desenvuelvo muy bien de forma independiente. Me apasiona aprender constantemente y asumir nuevos desafíos que me permitan demostrar y fortalecer mis habilidades para construir soluciones cada vez más efectivas.
          </p>
          <div className="flex gap-4">
            <Icono
              link="https://github.com/neferMR"
              icono="icon-github text-2xl cursor-pointer p-3 bg-[#274059] dark:bg-blue-600 text-white rounded-lg hover:bg-[#416e9b] dark:hover:bg-blue-700 transition-colors duration-300"
            />
            <Icono
              link="https://www.linkedin.com/in/nefer-medina/"
              icono="icon-linkedin2 text-2xl cursor-pointer p-3 bg-[#274059] dark:bg-blue-600 text-white rounded-lg hover:bg-[#416e9b] dark:hover:bg-blue-700 transition-colors duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function item(categoria, valor, link) {
  if (link) {
    return (
      <li className="flex gap-4 justify-start">
        <span className="text-xl font-extrabold w-2/5 text-gray-800 dark:text-gray-200">{categoria}:</span>
        <span className="text-lg font-normal text-black dark:text-gray-300 w-3/5 text-left text-wrap">
          <a href={link} className="hover:text-blue-600 dark:hover:text-blue-400">{valor}</a>
        </span>
      </li>
    );
  }
  return (
    <li className="flex gap-4 justify-start">
      <span className="text-xl font-extrabold w-2/5 text-gray-800 dark:text-gray-200">{categoria}:</span>
      <span className="text-lg font-normal text-black dark:text-gray-300 w-3/5 text-left text-wrap">
        {valor}
      </span>
    </li>
  );
}

export default About;
