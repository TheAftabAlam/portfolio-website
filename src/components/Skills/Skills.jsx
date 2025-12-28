import React from "react";
import { SkillsInfo } from "../../constants";
import Tilt from "react-parallax-tilt";

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative py-24 px-[8vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom"
    >
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-wide">
          Skills
        </h2>
        <div className="w-20 h-1 bg-[#8245ec] mx-auto mt-3 rounded-full" />
        <p className="text-gray-400 mt-5 text-base sm:text-lg leading-relaxed">
          A collection of my technical skills and expertise honed through
          real-world projects and professional experience.
        </p>
      </div>

      {/* Skill Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {SkillsInfo.map((category, index) => (
          <div
            key={category.title}
            data-aos="fade-up"
            data-aos-delay={index * 100}
            className="rounded-2xl border border-white/10 bg-gray-900/80 backdrop-blur-md 
            px-6 sm:px-8 py-8 
            shadow-[0_0_25px_rgba(130,69,236,0.25)]
            hover:shadow-[0_0_40px_rgba(130,69,236,0.4)]
            transition-shadow duration-300"
          >
            {/* Category Title */}
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-300 mb-6 text-center">
              {category.title}
            </h3>

            {/* Tilt Wrapper */}
            <Tilt
              tiltMaxAngleX={15}
              tiltMaxAngleY={15}
              perspective={900}
              scale={1.04}
              transitionSpeed={800}
              gyroscope
            >
              {/* Skills Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center gap-3
                    w-full h-12 px-4
                    rounded-full border border-gray-700/70
                    bg-gray-800/40
                    hover:border-[#8245ec] hover:bg-[#8245ec]/10
                    transition-all duration-300"
                  >
                    {/* Fixed Logo Box */}
                    <div className="w-8 h-8 flex items-center justify-center shrink-0">
                      <img
                        src={skill.logo}
                        alt={skill.name}
                        className="w-6 h-6 object-contain"
                      />
                    </div>

                    {/* Fixed Text */}
                    <span className="text-sm text-gray-300 truncate">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </Tilt>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
