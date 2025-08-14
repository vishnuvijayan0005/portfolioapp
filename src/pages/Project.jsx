import { useState } from "react";

export default function Projects() {
  const projects = [
    {
      title: "Portfolio Website",
      year: "2025",
      description:
        "A personal portfolio website designed to showcase my projects, technical skills, and contact details. Includes a responsive UI with modern design principles for better accessibility and user engagement.",
      tools: "React.js, Tailwind CSS, Vite",
    },
    {
      title: "Chatbot using Dialogflow",
      year: "2024 - 2025",
      description:
        "Developed a chatbot named CAMPUSQ to assist students, teachers, and guests in accessing college-related information and academic details. Implemented project lifecycle management processes to ensure all requirements were thoroughly documented and tracked, enabling timely resolution of issues and minimizing disruptions to project progress. Additionally, maintained comprehensive project documentation to support effective progress tracking and foster team collaboration.",
      tools: "Dialogflow, Node.js, MySQL",
    },

    {
      title: "Daily Wage Labour Management Application",
      year: "2024",
      description:
        "Designed an Android-based app to connect daily wage workers, customers, and contractors, featuring job posting and worker availability functionalities. Integrated additional tools such as multilingual support, tool renting, and a feedback system to enhance transparency and accountability.",
      tools: "Flutter, Dart, Firebase",
    },
  ];

  const [openProjects, setOpenProjects] = useState(projects.map(() => false));

  const toggleDetails = (index) => {
    const updated = [...openProjects];
    updated[index] = !updated[index];
    setOpenProjects(updated);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-800 to-indigo-900 flex items-center justify-center p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-xl max-w-sm text-center text-white"
          >
            <h2 className="text-2xl font-bold mb-1">{project.title}</h2>
            <p className="text-yellow-300 mb-3">{project.year}</p>
            <button
              onClick={() => toggleDetails(index)}
              className="mt-1 px-4 py-1 text-sm bg-yellow-400 text-black font-semibold rounded hover:bg-yellow-500 transition"
            >
              {openProjects[index] ? "Hide Details" : "Show Details"}
            </button>

            {openProjects[index] && (
              <div className="mt-4">
                <p className="mb-2 text-sm leading-relaxed">
                  {project.description}
                </p>
                <p className="text-yellow-300">
                  <span className="font-semibold">Tools Used:</span>{" "}
                  {project.tools}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
