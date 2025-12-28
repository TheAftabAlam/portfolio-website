import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Experience from "./components/Experience/Experience";
import Work from "./components/Work/Work";
import Certificate from "./components/Certificate/Certificate";
import Education from "./components/Education/Education";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import BlurBlob from "./components/BlurBlob";

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <div className="relative min-h-screen bg-[#050414] overflow-hidden">
      {/* Background Blur */}
      <BlurBlob
        position={{ top: "35%", left: "20%" }}
        size={{ width: "30%", height: "40%" }}
      />

      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)]
        bg-[size:14px_24px]
        [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"
      />

      {/* Content */}
      <main className="relative z-10 pt-20">
        <Navbar />
        <About />
        <Skills />
        <Experience />
        <Work />
        <Certificate />
        <Education />
        <Contact />
        <Footer />
      </main>
    </div>
  );
};

export default App;
