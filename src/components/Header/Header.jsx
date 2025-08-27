import image from "../../assets/IMG_5241.jpg";
import React from "react";
import Icono from "../Icono/Icono";
import FloatingParticles from "../FloatingParticles/FloatingParticles";
import TypewriterEffect from "../TypewriterEffect/TypewriterEffect";
import "./Header.css";

function Header() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="bg-[#274059] flex flex-col items-center justify-center min-h-screen text-white px-4 py-8 relative overflow-hidden dark:bg-gray-900" id="inicio">
      <FloatingParticles count={15} />
      
      <nav className="fixed top-0 left-0 right-0 bg-[#274059]/90 backdrop-blur-sm z-50 py-4 px-4 hidden md:block dark:bg-gray-900/90">
        <div className="max-w-6xl mx-auto flex justify-center">
          <ul className="flex gap-8 text-sm font-medium">
            <li><button onClick={() => scrollToSection('inicio')} className="hover:text-blue-300 transition-colors">Inicio</button></li>
            <li><button onClick={() => scrollToSection('about')} className="hover:text-blue-300 transition-colors">Sobre mí</button></li>
            <li><button onClick={() => scrollToSection('resumen')} className="hover:text-blue-300 transition-colors">Resumen</button></li>
            <li><button onClick={() => scrollToSection('servicios')} className="hover:text-blue-300 transition-colors">Servicios</button></li>
            <li><button onClick={() => scrollToSection('skills')} className="hover:text-blue-300 transition-colors">Habilidades</button></li>
            <li><button onClick={() => scrollToSection('projects')} className="hover:text-blue-300 transition-colors">Proyectos</button></li>
            <li><button onClick={() => scrollToSection('contacto')} className="hover:text-blue-300 transition-colors">Contacto</button></li>
          </ul>
        </div>
      </nav>
      
      <div className="text-center max-w-2xl mx-auto relative z-10">
        <img 
          src={image} 
          alt="Foto de perfil de Nefer Medina" 
          className="w-40 h-40 sm:w-48 sm:h-48 md:w-52 md:h-52 rounded-full object-cover mx-auto mb-6 border-4 border-white/20 shadow-2xl" 
        />
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-normal my-4 -rotate-12 font-['Kaushan_Script'] text-white relative">
          Nefer Medina
        </h1>
        <h3 className="font-normal mt-4 text-sm sm:text-base md:text-lg text-gray-200 mb-6 min-h-[2rem]">
          <TypewriterEffect 
            texts={[
              "Ingeniero de Sistemas",
              "Desarrollador Full Stack", 
              "Especialista en Automatización",
              "Analista de Datos"
            ]} 
            speed={100}
            deleteSpeed={50}
            pauseTime={2000}
          />
        </h3>
        <div className="flex gap-6 mt-4 text-2xl sm:text-3xl justify-center">
          <Icono 
            link="https://github.com/neferMR" 
            icono="icon-github hover:text-blue-400 transition-colors duration-300"
          />
          <Icono 
            link="https://www.linkedin.com/in/nefer-medina/" 
            icono="icon-linkedin2 hover:text-blue-400 transition-colors duration-300"
          />
        </div>
        <button 
          onClick={() => scrollToSection('about')}
          className="mt-8 bg-white/10 text-white px-6 py-3 rounded-full hover:bg-white/20 transition-all duration-300 backdrop-blur-sm"
        >
          Conoce más sobre mí ↓
        </button>
      </div>
    </header>
  );
}

export default Header;
