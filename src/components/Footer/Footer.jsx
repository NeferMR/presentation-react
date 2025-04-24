import React from "react";
import { useState } from "react";

function Footer() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function handleModalClose() {
    setIsModalOpen(false);
  }
  function handleModalOpen() {
    setIsModalOpen(true);
  }

  function footerText() {
    return (
      <footer className="fixed bottom-0 left-0 right-0 bg-[#274059] text-white p-2 text-center z-50 transition-transform duration-300 ease-in-out font-mono">
        <div className="flex justify-center items-center gap-4">
          <p>Esta página está hecha con React y Tailwind</p>
          <button
            className="bg-[#416e9b] text-white border-none py-2 px-4 rounded-lg cursor-pointer transition-colors duration-300 ease-in-out"
            onClick={handleModalOpen}
          >
            Saber más
          </button>
        </div>
      </footer>
    );
  }

  function modal() {
    return (
      <div className="flex fixed top-0 left-0 right-0 w-full h-full bg-black/70 z-50 justify-center items-center font-mono">
        <div className="bg-white p-8 rounded-2xl max-w-[500px] w-[90%] text-center">
          <h3 className="text-[#274059] mb-6 text-xl">
            Esta página está hecha con React y Tailwind, pero puedes verla en
            diferentes tecnologías
          </h3>
          <div className="flex flex-col gap-4 my-6">
            {techItem("HTML y CSS base", "https://nefermr.github.io/Presentation/")}
            {techItem("Angular y Tailwind", "https://presentation-angular.vercel.app/")}
          </div>
          <button
            className="bg-[#274059] text-white border-none py-3 px-6 rounded-lg cursor-pointer mt-4 transition-colors duration-300 ease-in-out hover:bg-[#416e9b]"
            onClick={handleModalClose}
          >
            Cerrar
          </button>
        </div>
      </div>
    );
  }

  function techItem(tech, link) {
    return (
      <div className="flex justify-between items-center bg-[#f5f5f5] p-3 rounded-lg">
        <span className="font-bold text-[#274059]">{tech}</span>
        <button className="bg-[#416e9b] text-white border-none py-2 px-4 rounded-lg cursor-pointer transition-colors duration-300 ease-in-out hover:bg-[#5a8ab8]">
          <a href={link}>Ir</a>
        </button>
      </div>
    );
  }

  return isModalOpen ? modal() : footerText();
}

export default Footer;
