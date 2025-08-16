import { useState } from "react";

export default function Projects() {
  const projects = [
    {
      title: "Portfolio Website",
      year: "2025",
      image: "./Portfolio.png",
      description:
        "A personal portfolio website designed to showcase my projects, technical skills, and contact details. Includes a responsive UI with modern design principles for better accessibility and user engagement.",
      tools: "React.js, Tailwind CSS, Vite",
    },
    {
      title: "Chatbot using Dialogflow",
      year: "2024 - 2025",
      image: "./chatbot.png",
      description:
        "Developed a chatbot named CAMPUSQ to assist students, teachers, and guests in accessing college-related information and academic details. Implemented project lifecycle management processes to ensure all requirements were thoroughly documented and tracked, enabling timely resolution of issues and minimizing disruptions to project progress. Additionally, maintained comprehensive project documentation to support effective progress tracking and foster team collaboration.",
      tools: "Dialogflow, Node.js, MySQL",
    },
    {
      title: "Daily Wage Labour Management Application",
      year: "2024",
      image: "./daily.png",
      description:
        "Designed an Android-based app to connect daily wage workers, customers, and contractors, featuring job posting and worker availability functionalities. Integrated additional tools such as multilingual support, tool renting, and a feedback system to enhance transparency and accountability.",
      tools: "Flutter, Dart, Firebase",
    },
  ];

  const [openProjects, setOpenProjects] = useState(projects.map(() => false));

  const toggleDetails = (index) => {
    setOpenProjects((prev) =>
      prev.map((isOpen, i) => (i === index ? !isOpen : isOpen))
    );
  };

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-2xl shadow-lg border border-gray-700 
                       hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 
                       flex flex-col justify-between overflow-hidden"
          >
            {/* Project Image */}
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-56 md:h-64 object-cover rounded-t-2xl transition-transform duration-300 hover:scale-105"
            />

            {/* Project Info */}
            <div className="p-6 flex flex-col flex-grow justify-between">
              <div>
                <h2 className="text-2xl font-bold mb-1 text-indigo-400">
                  {project.title}
                </h2>
                <p className="text-gray-300 mb-4">{project.year}</p>
                {openProjects[index] && (
                  <div className="mt-2">
                    <p className="mb-2 text-sm leading-relaxed text-gray-300">
                      {project.description}
                    </p>
                    <p className="text-indigo-300">
                      <span className="font-semibold">Tools Used:</span>{" "}
                      {project.tools}
                    </p>
                  </div>
                )}
              </div>

              {/* Button */}
              <button
                onClick={() => toggleDetails(index)}
                className="mt-4 px-4 py-2 bg-indigo-500 text-white font-semibold rounded-lg 
                           hover:bg-indigo-400 transition-all duration-200"
              >
                {openProjects[index] ? "Hide Details" : "Show Details"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
