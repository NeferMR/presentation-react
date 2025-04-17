function Servicios() {
  return (
    <section className="bg-[#416e9b] p-4 pb-16 shadow-lg text-center">
      <h2 className="text-white text-5xl font-bold mt-20 mb-4">Servicios</h2>
      <ul className="list-none flex flex-wrap justify-center gap-4 items-center w-full">
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
            "Cuento con experiencia y gran pasión por el desarrollo backend, conel uso de tecnologías como Node.js, Express, MongoDB, entre otras.",
        })}
        {ServiciosItem({
          icon: "cogs",
          title: "Automatización de procesos",
          description:
            "Automatización de procesos, con el uso de tecnologías como Node.js,Python, Power Automate, entre otras.",
        })}
        {ServiciosItem({
          icon: "stats-dots",
          title: "Análisis de datos",
          description:
            "Análisis de datos, con el uso de tecnologías como Python, Power BI, entre otras.",
        })}
      </ul>
    </section>
  );
}

function ServiciosItem({ icon, title, description }) {
  return (
    <li className="flex flex-col flex-wrap items-center gap-4 w-[30%] min-w-64 p-4 box-border">
      <i
        className={`icon-${icon} text-5xl text-[#416e9b] bg-white p-4 rounded-full text-center mt-4 relative`}
      ></i>
      <h3 className="text-xl text-white">{title}</h3>
      <p className="text-[#c0c0c0]">{description}</p>
    </li>
  );
}

export default Servicios;
