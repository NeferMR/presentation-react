import { useEffect } from "react";

function Skills() {
  useEffect(() => {
    const animateSkills = () => {
      const skills = document.querySelectorAll(".skill-circle");

      skills.forEach((skill) => {
        const percentageElement = skill.querySelector(".skill-percentage");
        const percentage = parseInt(percentageElement.textContent);

        skill.style.setProperty("--percentage", "0%");

        setTimeout(() => {
          skill.style.setProperty("--percentage", `${percentage}%`);
        }, 100);
      });
    };

    animateSkills();
  }, []);

  return (
    <section id="skills" className="relative bg-gray-50 dark:bg-gray-800 p-4 sm:p-6 md:p-8 text-center lg:py-12 lg:px-20 xl:py-16 xl:px-60 overflow-hidden">
      {/* Elementos decorativos de fondo */}
      <div className="absolute inset-0 opacity-3 dark:opacity-5">
        <div className="absolute top-16 left-8 w-40 h-40 bg-blue-300 rounded-full mix-blend-multiply filter blur-2xl animate-blob" />
        <div className="absolute top-32 right-12 w-40 h-40 bg-purple-300 rounded-full mix-blend-multiply filter blur-2xl animate-blob animation-delay-2000" />
        <div className="absolute bottom-16 left-16 w-40 h-40 bg-pink-300 rounded-full mix-blend-multiply filter blur-2xl animate-blob animation-delay-4000" />
      </div>
      
      <div className="relative z-10">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-12 mb-8 sm:mt-20 sm:mb-12 text-[#274059] dark:text-white">
        Habilidades
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8 justify-items-center max-w-6xl mx-auto">
        {Skillitem({ percentage: "90", name: "HTML-CSS-JS" })}
        {Skillitem({ percentage: "90", name: "Python" })}
        {Skillitem({ percentage: "85", name: "React" })}
        {Skillitem({ percentage: "80", name: "Java" })}
        {Skillitem({ percentage: "70", name: "C#" })}
        {Skillitem({ percentage: "85", name: "SQL" })}
        {Skillitem({ percentage: "95", name: "Git - Github" })}
        {Skillitem({ percentage: "70", name: "Cloud" })}
      </div>
      </div>
    </section>
  );
}

function Skillitem({ percentage, name }) {
  return (
    <div className="w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 relative group">
      <div
        className="skill-circle w-full h-full rounded-full flex items-center justify-center relative before:content-[''] before:absolute before:w-[90%] before:h-[90%] before:rounded-full before:bg-[#f5f5f5] dark:before:bg-gray-700 transition-transform duration-300 group-hover:scale-105"
        style={{
          background: `conic-gradient(var(--skill-progress-color, #274059) 0% var(--percentage), var(--skill-bg-color, #e0e0e0) var(--percentage) 100%)`,
          '--skill-progress-color': '#274059',
          '--skill-bg-color': '#e0e0e0',
        }}
      >
        <div className="relative z-10 flex flex-col items-center justify-center px-2">
          <span className="skill-percentage text-lg sm:text-xl md:text-2xl font-bold text-[#274059] dark:text-white mb-1">
            {percentage}%
          </span>
          <span className="text-xs sm:text-sm text-[#274059] dark:text-white text-center leading-tight">
            {name}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Skills;
