import React from "react";
import { experiences } from "../../constants";

const Experience = () => {
  const experience = experiences[0];

  return (
    <section
      id="experience"
      className="py-24 px-[8vw] lg:px-[15vw] font-sans
                 bg-gradient-to-b from-[#0f0c29] via-[#302b63] to-[#24243e]
                 text-white"
    >
      {/* Section Header */}
      <div className="text-center mb-20">
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
          Professional Experience
        </h2>
        <div className="w-28 h-1.5 bg-gradient-to-r from-purple-400 to-pink-500 mx-auto mt-5 rounded-full" />
        <p className="text-gray-400 mt-6 text-lg max-w-3xl mx-auto leading-relaxed">
          Hands-on experience building scalable backend systems and enterprise
          applications used in real-world financial platforms.
        </p>
      </div>

      {/* Experience Card */}
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        className="relative bg-[#1e1b36]/70 backdrop-blur-lg
                   border border-white/10 rounded-3xl
                   shadow-[0_20px_60px_rgba(0,0,0,0.45)]
                   max-w-6xl mx-auto p-10 md:p-14
                   transition-transform hover:scale-[1.02]"
      >
        <div className="flex flex-col md:flex-row gap-10 items-start">

          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="w-24 h-24 md:w-28 md:h-28
                            bg-white rounded-2xl
                            flex items-center justify-center
                            shadow-xl">
              <img
                src={experience.img}
                alt={experience.company}
                className="w-20 h-20 object-contain"
              />
            </div>
          </div>

          {/* Content */}
          <div className="flex-1">
            <h3 className="text-2xl md:text-3xl font-bold text-white">
              {experience.role}
            </h3>

            <div className="flex flex-col sm:flex-row sm:items-center sm:gap-3 mt-2">
              <span className="text-purple-400 font-semibold">
                {experience.company}
              </span>
              <span className="hidden sm:inline text-gray-500">•</span>
              <span className="text-gray-400 text-sm whitespace-pre-line">
                {experience.date}
              </span>
            </div>

            {/* Responsibilities */}
            <ul className="mt-6 space-y-3 text-gray-300 leading-relaxed list-disc list-inside">
              <li>
                Designed and developed scalable backend services using
                <span className="text-white font-medium"> Java and Spring Boot</span>
                for enterprise financial products.
              </li>
              <li>
                Built and optimized secure
                <span className="text-white font-medium"> RESTful APIs</span>
                for core modules including user management, billing, and reporting.
              </li>
              <li>
                Implemented
                <span className="text-white font-medium"> microservices architecture</span>
                with asynchronous communication using Kafka.
              </li>
              <li>
                Worked extensively with
                <span className="text-white font-medium"> MySQL, SQLite, and Firebase</span>
                for efficient data modeling and persistence.
              </li>
              <li>
                Deployed and monitored backend services on
                <span className="text-white font-medium"> AWS (EC2, S3)</span>,
                ensuring reliability and performance.
              </li>
              <li>
                Collaborated in Agile teams, contributing to sprint planning,
                code reviews, and production support.
              </li>
            </ul>

            {/* Tech Stack */}
            <div className="mt-8">
              <h5 className="text-lg font-semibold text-white mb-4">
                Tech Stack
              </h5>
              <div className="flex flex-wrap gap-3">
                {experience.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-4 py-1.5 text-sm
                               rounded-full
                               bg-gradient-to-r from-purple-600 to-pink-500
                               text-white shadow-md"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
