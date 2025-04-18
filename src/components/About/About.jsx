import React from "react";

import Icono from "../Icono/Icono";

function About() {
  return (
    <section className="bg-white p-4 shadow-lg font-mono lg:py-4 lg:px-20 xl:py-4 xl:px-60">
      <h2 className="text-5xl font-bold text-center my-24">Sobre mí</h2>
      <div className="lg:flex flex-row">
        <div className="lg:w-2/5">
          <ul className="list-none flex flex-col gap-4 mx-auto">
            {item("Nombre", "Nefer Medina")}
            {item("Edad", "23 años")}
            {item("Estudios", "Ingeniero de Sistemas")}
            {item("Email", "nefermr5@gmail.com")}
            {item("Teléfono", "+57 300 466 7017")}
            {item(
              "Sitio Web",
              "Portafolio (click)",
              "https://nefermr.github.io/portafolio/"
            )}
          </ul>
        </div>

        <div className="mx-auto bg-[#f5f5f5] lg:ml-16">
          <h2 className="text-3xl font-bold mt-20 mb-4 pt-5 text-black lg:m-0 text-left">
            ¡Hola!
          </h2>
          <p className="mt-4">
          Soy Nefer, ingeniero de sistemas apasionado por la tecnología y el desarrollo de software. Me motiva crear soluciones innovadoras que mejoren la eficiencia de los procesos, y me destaco por ser proactivo, adaptable y con gran capacidad de aprendizaje. Disfruto trabajar en equipo, pero también me desenvuelvo muy bien de forma independiente. Me apasiona aprender constantemente y asumir nuevos desafíos que me permitan demostrar y fortalecer mis habilidades para construir soluciones cada vez más efectivas.
          </p>
          <div className="flex gap-4 mt-8">
            <Icono
              link={"https://nefermr.github.io/portafolio/"}
              icono={
                "icon-earth text-2xl text-black cursor-pointer p-2 bg-[#4d4d4d] text-white"
              }
            />
            <Icono
              link={"https://github.com/neferMR"}
              icono={
                "icon-github text-2xl text-black cursor-pointer p-2 bg-[#4d4d4d] text-white"
              }
            />
            <Icono
              link={"https://www.linkedin.com/in/nefer-medina/"}
              icono={
                "icon-linkedin2 text-2xl text-black cursor-pointer p-2 bg-[#4d4d4d] text-white"
              }
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
        <span className="text-xl font-extrabold w-2/5">{categoria}:</span>
        <span className="text-lg font-normal text-black w-3/5 text-left text-wrap">
          <a href={link}>{valor}</a>
        </span>
      </li>
    );
  }
  return (
    <li className="flex gap-4 justify-start">
      <span className="text-xl font-extrabold w-2/5">{categoria}:</span>
      <span className="text-lg font-normal text-black w-3/5 text-left text-wrap">
        {valor}
      </span>
    </li>
  );
}

export default About;
