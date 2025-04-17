import image from "../../assets/IMG_5241.jpg";
import React from "react";

import Icono from "../Icono/Icono";
import "./Header.css";

function Header() {
  return (
    <header className="bg-[#274059] flex flex-col items-center justify-center h-screen text-white">
      <img src={image} alt="Foto de perfil" className="w-52 h-52 rounded-full object-cover "/>
      <h1 className="text-4xl font-normal my-4 -rotate-12">Nefer Medina</h1>
      <h3 className="font-normal mt-4 text-sm">Ingeniero de Sistemas / Desarrollador</h3>
      <div className="flex gap-6 mt-4 text-3xl">
        <Icono link={"https://nefermr.github.io/portafolio/"} icono={"icon-earth"}/>
        <Icono link={"https://github.com/neferMR"} icono={"icon-github"}/>
        <Icono link={"https://www.linkedin.com/in/nefer-medina/"} icono={"icon-linkedin2"}/>
      </div>
    </header>
  );
}

export default Header;
