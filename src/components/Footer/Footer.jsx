import React from 'react';
import Icono from '../Icono/Icono';

function Footer() {
  return (
    <footer className="bg-[#274059] text-white py-12 px-4 text-center">
      <div className="max-w-6xl mx-auto">
        <div className="mb-6">
          <h3 className="text-2xl font-bold mb-4">Nefer Medina</h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Ingeniero de Sistemas apasionado por crear soluciones innovadoras y efectivas.
            Siempre dispuesto a nuevos desafíos y oportunidades de aprendizaje.
          </p>
        </div>
        
        <div className="flex justify-center gap-6 mb-8">
          <Icono 
            link="https://github.com/neferMR" 
            icono="icon-github text-2xl hover:text-blue-400 transition-colors duration-300"
          />
          <Icono 
            link="https://www.linkedin.com/in/nefer-medina/" 
            icono="icon-linkedin2 text-2xl hover:text-blue-400 transition-colors duration-300"
          />
          <Icono 
            link="mailto:nefermr5@gmail.com" 
            icono="icon-earth text-2xl hover:text-blue-400 transition-colors duration-300"
          />
        </div>
        
        <div className="border-t border-gray-600 pt-6">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Nefer Medina. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
