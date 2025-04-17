import React from 'react';

function Icono({ link, icono }) {
  return (
    <a href={link}>
      <i className={icono}></i>
    </a>
  );
}

export default Icono;
