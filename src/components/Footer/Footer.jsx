import React from 'react';
import Icono from '../Icono/Icono';

function Footer() {
  return (
    <footer className="relative bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white py-12 px-4 text-center overflow-hidden">
      {/* Elementos decorativos de fondo */}
      <div className="absolute inset-0 opacity-3 dark:opacity-5">
        <div className="absolute top-8 left-12 w-48 h-48 bg-blue-300 rounded-full mix-blend-multiply filter blur-2xl animate-blob" />
        <div className="absolute top-16 right-8 w-48 h-48 bg-purple-300 rounded-full mix-blend-multiply filter blur-2xl animate-blob animation-delay-2000" />
        <div className="absolute bottom-8 left-20 w-48 h-48 bg-pink-300 rounded-full mix-blend-multiply filter blur-2xl animate-blob animation-delay-4000" />
      </div>
      
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="mb-6">
          <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Nefer Medina</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
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
        
        <div className="border-t border-gray-300 dark:border-gray-600 pt-6">
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            © {new Date().getFullYear()} Nefer Medina. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
