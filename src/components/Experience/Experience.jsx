import React from "react";
import { experiences } from "../../constants";

const Experience = () => {
  const experience = experiences[0];

  return (
    <section
      id="experience"
      className="relative py-28 px-[8vw] lg:px-[15vw] font-sans
                 bg-gradient-to-b from-[#0b0a1f] via-[#1a1640] to-[#141432]
                 text-white overflow-hidden"
    >
      {/* Subtle Background Glow */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl" />
      <div className="absolute top-1/2 -right-40 w-96 h-96 bg-pink-600/20 rounded-full blur-3xl" />

      {/* Section Header */}
      <div className="relative text-center max-w-4xl mx-auto mb-24">
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
          Professional Experience
        </h2>

        <div className="w-24 h-[3px] bg-gradient-to-r from-purple-400 to-pink-500 mx-auto mt-6 rounded-full" />

        <p className="text-gray-400 mt-6 text-base md:text-lg leading-relaxed">
          Building scalable, secure backend systems for enterprise-grade
          financial and business platforms.
        </p>
      </div>

      {/* Experience Card */}
      <div
        data-aos="fade-up"
        className="relative max-w-6xl mx-auto
                   rounded-[2.5rem]
                   border border-white/10
                   bg-white/5 backdrop-blur-xl
                   shadow-[0_25px_80px_rgba(0,0,0,0.6)]
                   p-8 sm:p-10 md:p-14
                   transition-all duration-500
                   hover:shadow-[0_30px_100px_rgba(130,69,236,0.45)]
                   hover:-translate-y-1"
      >
        <div className="flex flex-col md:flex-row gap-12 items-start">

          {/* Logo + Timeline */}
          <div className="relative shrink-0">
            <div className="w-28 h-28 rounded-3xl bg-white
                            flex items-center justify-center
                            shadow-2xl">
              <img
                src={experience.img}
                alt={experience.company}
                className="w-20 h-20 object-contain"
              />
            </div>

            {/* Timeline Line */}
            <span className="hidden md:block absolute top-32 left-1/2 -translate-x-1/2
                             w-px h-full bg-gradient-to-b from-purple-500/60 to-transparent" />
          </div>

          {/* Content */}
          <div className="flex-1">
            {/* Role */}
            <h3 className="text-2xl md:text-3xl font-bold leading-tight">
              {experience.role}
            </h3>

            {/* Company + Date */}
            <div className="flex flex-wrap items-center gap-2 mt-3 text-sm">
              <span className="text-purple-400 font-semibold">
                {experience.company}
              </span>
              <span className="text-gray-500">•</span>
              <span className="text-gray-400 whitespace-pre-line">
                {experience.date}
              </span>
            </div>

            {/* Divider */}
            <div className="w-20 h-[2px] bg-gradient-to-r from-purple-500/70 to-pink-500/70 mt-6 rounded-full" />

            {/* Responsibilities */}
            <ul className="mt-6 space-y-4 text-gray-300 leading-relaxed list-disc list-inside">
              <li>
                Designed and developed scalable backend services using
                <span className="text-white font-medium"> Java & Spring Boot</span>
                for enterprise financial products.
              </li>
              <li>
                Built secure and optimized
                <span className="text-white font-medium"> RESTful APIs</span>
                for billing, reporting, and user management modules.
              </li>
              <li>
                Implemented
                <span className="text-white font-medium">
                  {" "}microservices architecture
                </span>
                with Kafka-based asynchronous communication.
              </li>
              <li>
                Designed efficient data models using
                <span className="text-white font-medium">
                  {" "}MySQL, SQLite, and Firebase
                </span>.
              </li>
              <li>
                Deployed and monitored applications on
                <span className="text-white font-medium">
                  {" "}AWS (EC2, S3)
                </span>
                ensuring scalability and reliability.
              </li>
            </ul>

            {/* Tech Stack */}
            <div className="mt-10">
              <h4 className="text-lg font-semibold mb-4">
                Tech Stack
              </h4>

              <div className="flex flex-wrap gap-3">
                {experience.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-4 py-1.5 text-sm rounded-full
                               bg-gradient-to-r from-purple-600/90 to-pink-500/90
                               text-white shadow-md
                               hover:scale-105 hover:shadow-lg
                               transition-all duration-300"
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
