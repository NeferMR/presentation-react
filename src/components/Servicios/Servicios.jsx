function Servicios() {
  return (
    <section id="servicios" className="bg-[#416e9b] dark:bg-gray-900 p-4 pb-16 shadow-lg text-center font-mono lg:py-12 lg:px-20 xl:py-16 xl:px-60">
      <h2 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold mt-12 mb-8 sm:mt-20 sm:mb-12">
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
    </section>
  );
}

function ServiciosItem({ icon, title, description }) {
  return (
    <div className="flex flex-col items-center gap-4 p-6 bg-white/5 dark:bg-white/10 rounded-lg backdrop-blur-sm hover:bg-white/10 dark:hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
      <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white dark:bg-gray-100 rounded-full flex items-center justify-center shadow-lg flex-shrink-0">
        <i
          className={`icon-${icon} text-3xl sm:text-4xl text-[#416e9b] dark:text-gray-800 flex items-center justify-center`}
          style={{ lineHeight: 1 }}
        ></i>
      </div>
      <h3 className="text-lg sm:text-xl text-white font-semibold">{title}</h3>
      <p className="text-[#c0c0c0] dark:text-gray-300 text-sm leading-relaxed text-center">{description}</p>
    </div>
  );
}

export default Servicios;
