import shiongreen from "@/assets/images/shiongreen.png";
import shionideals from "@/assets/images/shionideals.png";
import campzip from "@/assets/images/campzip.png";
import habitTracker from "@/assets/images/habitTracker.png";
import eazyEats from "@/assets/images/Eazy-Eats.png";
import Image from "next/image";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";

const portfolioProjects = [
  {
    company: "Shion Green",
    year: "2024",
    title: "Online Spices Selling Website",
    results: [
      { title: "Responsive to all devices." },
      { title: "Dual-language support." },
      { title: "Streamlined order placement." },
    ],
    link: "https://www.shiongreenceylon.com",
    image: shiongreen,
  },
  {
    company: "Shion Ideals",
    year: "2024",
    title: "Vehicles, Machinery, and Spare Parts Store",
    results: [
      { title: "Responsive across all devices." },
      { title: "Seamless English-Japanese support." },
      { title: "Fast and user-friendly design." },
    ],
    link: "https://www.shionideals.com/",
    image: shionideals,
  },
  {
    company: "Habit Tracker",
    year: "2024",
    title: "Habit tracking Mobile App",
    results: [
      { title: "Complete Habit Management (CRUD)." },
      { title: "Offline Storage Support." },
      { title: "Personalized Habit Tracking." },
    ],
    link: "https://github.com/Dilki687/HabitTracker.git",
    image: habitTracker,
  },
  {
    company: "CampZip",
    year: "2024",
    title: "Online Camp Location Booking System",
    results: [
      { title: "Robust Booking Features." },
      { title: "Stripe Payment Integration." },
      { title: "Scalable Data Management." },
    ],
    link: "https://github.com/Dilki687/camp-site-Booking.git",
    image: campzip,
  },
  {
    company: "Eazy-Eats",
    year: "2025",
    title: "Online Food Ordering System",
    results: [
      { title: "Robust backend with Spring boot." },
      { title: "Responsive frontend with React." },
      { title: "Super admin panel." },
    ],
    link: "https://github.com/Dilki687/Eazy-Eats.git",
    image: eazyEats,
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="pb-16 lg:py-24">
      <div className="container">
        <SectionHeader
          eyebrow="Real-World Results"
          title="Featured Projects"
          description="Discover how I turned ideas into captivating digital solutions."
        />
        <div className="mt-10 md:mt-20 flex flex-col gap-20">
          {portfolioProjects.map((project, projectIndex) => (
            <Card
              key={project.title}
              className="px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20 sticky top-0"
              style={{
                top: `calc(64px + ${projectIndex * 40}px`,
              }}
            >
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                  <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                    <span>{project.company}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>

                  <h3 className="font-serif text-2xl mt-2 md:mt-5 md:text-4xl">
                    {project.title}
                  </h3>
                  <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                  <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                    {project.results.map((result, resultIndex) => (
                      <li
                        key={resultIndex}
                        className="flex gap-2 text-sm md:text-base text-white/50"
                      >
                        <CheckCircleIcon className="size-5 md:size-6" />
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>
                  <a href={project.link}>
                    <button className="bg-white text-gray-950 h-12 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8">
                      <span>Visit Live Site</span>
                      <ArrowUpRightIcon className="size-4" />
                    </button>
                  </a>
                </div>
                <div className="relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none"
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
