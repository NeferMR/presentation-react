import React from 'react';

function LoadingSpinner({ size = 'large' }) {
  const sizeClass = size === 'large' ? 'h-24 w-24 sm:h-32 sm:w-32' : 'h-8 w-8';
  
  return (
    <div className="flex flex-col justify-center items-center py-12">
      <div className="relative mb-6">
        <div className={`${sizeClass} border-8 border-[#416e9b] rounded-full border-t-8 border-t-blue-400 animate-spin`}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
          <span className="text-gray-900 dark:text-white font-medium text-sm">Cargando</span>
        </div>
      </div>
      <p className="text-gray-900 dark:text-white font-bold text-lg sm:text-xl text-center mb-2">
        ¿Por qué puede demorar tanto?
      </p>
      <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base text-center max-w-2xl px-4">
        Debido a que el Backend y la base de datos están alojados en
        servicios gratuitos, la primera carga puede tomar tiempo
      </p>
    </div>
  );
}

export default LoadingSpinner;
