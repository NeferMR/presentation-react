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
    <section className="bg-[#f5f5f5] p-4 text-center font-mono lg:py-4 lg:px-20 xl:py-4 xl:px-60">
      <h2 className="text-5xl font-bold mt-20 mb-4">Habilidades</h2>
      <div className="flex justify-center gap-32 flex-wrap p-8">
        {Skillitem({ percentage: "90", name: "HTML-CSS-JS" })}
        {Skillitem({ percentage: "90", name: "Python" })}
        {Skillitem({ percentage: "85", name: "React" })}
        {Skillitem({ percentage: "80", name: "Java" })}
        {Skillitem({ percentage: "70", name: "C#" })}
        {Skillitem({ percentage: "85", name: "SQL" })}
        {Skillitem({ percentage: "95", name: "Git - Github" })}
        {Skillitem({ percentage: "70", name: "Cloud" })}
      </div>
    </section>
  );
}

function Skillitem({ percentage, name }) {
  return (
    <div className="w-36 h-36 relative">
      <div
        className="skill-circle w-full h-full rounded-full flex items-center justify-center relative before:content-[''] before:absolute before:w-[90%] before:h-[90%] before:rounded-full before:bg-[#f5f5f5]"
        style={{
          background: `conic-gradient(#274059 0% var(--percentage), #e0e0e0 var(--percentage) 100%)`,
        }}
      >
        <div className="relative z-10 flex flex-col items-center justify-center">
          <span className="skill-percentage text-2xl font-bold text-[#274059]">
            {percentage}%
          </span>
          <span className="text-base text-[#274059] text-center">{name}</span>
        </div>
      </div>
    </div>
  );
}

export default Skills;
