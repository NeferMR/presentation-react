function Servicios() {
  return (
    <section id="servicios" className="relative bg-gray-50 dark:bg-gray-800 p-4 pb-16 shadow-lg text-center lg:py-12 lg:px-20 xl:py-16 xl:px-60 overflow-hidden">
      {/* Elementos decorativos de fondo */}
      <div className="absolute inset-0 opacity-3 dark:opacity-5">
        <div className="absolute top-12 left-6 w-40 h-40 bg-blue-300 rounded-full mix-blend-multiply filter blur-2xl animate-blob" />
        <div className="absolute top-24 right-8 w-40 h-40 bg-purple-300 rounded-full mix-blend-multiply filter blur-2xl animate-blob animation-delay-2000" />
        <div className="absolute bottom-12 left-24 w-40 h-40 bg-pink-300 rounded-full mix-blend-multiply filter blur-2xl animate-blob animation-delay-4000" />
      </div>
      
      <div className="relative z-10">
      <h2 className="text-gray-900 dark:text-white text-3xl sm:text-4xl md:text-5xl font-bold mt-12 mb-8 sm:mt-20 sm:mb-12">
        Servicios
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {ServiciosItem({
          icon: "embed2",
          title: "Desarrollo Frontend",
          description:
            "Cuento con experiencia en el desarrollo de aplicaciones web, con el uso de tecnologías como HTML, CSS, JavaScript, React, Node.js, entre otras.",
        })}
        {ServiciosItem({
          icon: "tree",
          title: "Desarrollo Backend",
          description:
            "Cuento con experiencia y gran pasión por el desarrollo backend, con el uso de tecnologías como Node.js, Express, MongoDB, entre otras.",
        })}
        {ServiciosItem({
          icon: "cogs",
          title: "Automatización de procesos",
          description:
            "Automatización de procesos, con el uso de tecnologías como Node.js, Python, Power Automate, entre otras.",
        })}
        {ServiciosItem({
          icon: "stats-dots",
          title: "Análisis de datos",
          description:
            "Análisis de datos, con el uso de tecnologías como Python, Power BI, entre otras.",
        })}
      </div>
      </div>
    </section>
  );
}

function ServiciosItem({ icon, title, description }) {
  return (
    <div className="flex flex-col items-center gap-4 p-6 bg-white/80 dark:bg-white/10 rounded-lg backdrop-blur-sm hover:bg-white/90 dark:hover:bg-white/20 transition-all duration-300 transform hover:scale-105 border border-gray-200/50 dark:border-white/10 shadow-lg">
      <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white dark:bg-gray-100 rounded-full flex items-center justify-center shadow-lg flex-shrink-0">
        <i
          className={`icon-${icon} text-3xl sm:text-4xl text-[#416e9b] dark:text-gray-800 flex items-center justify-center`}
          style={{ lineHeight: 1 }}
        ></i>
      </div>
      <h3 className="text-lg sm:text-xl text-gray-900 dark:text-white font-semibold">{title}</h3>
      <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed text-center">{description}</p>
    </div>
  );
}

export default Servicios;
