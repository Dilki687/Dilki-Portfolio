"use client";
import { useState, useEffect } from "react";

export const Header = () => {
  const [activeSection, setActiveSection] = useState("home");

  const handleScroll = () => {
    const sections = ["home", "projects", "about", "contact"];
    let currentSection = "home";

    sections.forEach((sectionId) => {
      const section = document.getElementById(sectionId);
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
          currentSection = sectionId;
        }
      }
    });

    setActiveSection(currentSection);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex justify-center items-center fixed top-3 w-full z-10">
      <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur">
        <button
          className={`nav-item ${activeSection === "home" ? "active" : ""}`}
          onClick={() => scrollToSection("home")}
        >
          Home
        </button>
        <button
          className={`nav-item ${activeSection === "projects" ? "active" : ""}`}
          onClick={() => scrollToSection("projects")}
        >
          Projects
        </button>
        <button
          className={`nav-item ${activeSection === "about" ? "active" : ""}`}
          onClick={() => scrollToSection("about")}
        >
          About
        </button>
        <button
          className={`nav-item ${activeSection === "contact" ? "active" : ""}`}
          onClick={() => scrollToSection("contact")}
        >
          Contact
        </button>
      </nav>
    </div>
  );
};
