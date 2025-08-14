export default function About() {
  const skills = [
    "JavaScript",
    "React.js",
    "Node.js",
    "Express.js",
    "Tailwind CSS",
    "MySQL",
    "Git/GitHub",
    "Bootstrap",
    "HTML",
    "CSS",
    "Dialogflow",
    "MongoDB",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black flex items-center justify-center p-6">
      <div className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-xl max-w-3xl w-full text-center text-white">
        {/* Profile Picture */}
        <div className="flex justify-center mb-4">
          <img
            src="./portpic.JPG"
            alt="Profile"
            className="w-28 sm:w-36 md:w-44 lg:w-48 h-auto rounded-full border-4 border-purple-500 shadow-lg object-cover"
          />
        </div>

        {/* Heading */}
        <h1 className="text-4xl font-bold mb-2">About Me</h1>
        <p className="text-lg leading-relaxed mb-6">
          I am a passionate developer who loves building web applications,
          learning new technologies, and solving real-world problems through
          code. With a strong foundation in MERN stack, I focus on creating
          efficient, scalable, and user-friendly applications.
        </p>

        {/* Skills */}
        <h2 className="text-2xl font-semibold mb-3">Skills</h2>
        <div className="flex flex-wrap justify-center gap-3 mb-6">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="bg-purple-700/50 px-4 py-2 rounded-full border border-purple-400 text-sm"
            >
              {skill}
            </span>
          ))}
        </div>

        {/* Experience */}
        <h2 className="text-2xl font-semibold mb-3">Experience</h2>
        <ul className="list-disc list-inside text-left max-w-md mx-auto mb-6 text-gray-300">
          <li>Developed CampusQ Chatbot (2024-25)</li>
          <li>Portfolio Website (2025)</li>
          <li>Daily wage Management System (2024)</li>
        </ul>

        {/* Education */}
        <h2 className="text-2xl font-semibold mb-3">Education</h2>
        <p className="text-gray-300 mb-6">
          Bachelor’s Degree in Computer Science - Dr APJ Abdul Kalam Technical
          University
        </p>

        {/* Hobbies */}
        <h2 className="text-2xl font-semibold mb-3">Interests</h2>
        <p className="text-gray-300">Coding, Martial arts, Traveling.</p>
      </div>
    </div>
  );
}
