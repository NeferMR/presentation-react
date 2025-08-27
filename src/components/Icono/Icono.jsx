import React from 'react';

function Icono({ link, icono }) {
  const getAriaLabel = () => {
    if (icono.includes('github')) return 'Visitar perfil de GitHub';
    if (icono.includes('linkedin')) return 'Visitar perfil de LinkedIn';
    if (icono.includes('earth')) return 'Enviar correo electrónico';
    return 'Enlace externo';
  };

  return (
    <a 
      href={link} 
      target="_blank" 
      rel="noopener noreferrer"
      aria-label={getAriaLabel()}
    >
      <i className={icono}></i>
    </a>
  );
}

export default Icono;
