import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-6">
      <div className="max-w-5xl w-full flex flex-col md:flex-row items-center gap-12">
        {/* Left Section - Text */}
        <div className="flex-1 text-center md:text-left text-white">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4">
            Hi, I'm <span className="text-indigo-400">Vishnu Vijayan</span> 👋
          </h1>
          <p className="text-lg text-gray-300 mb-6">
            Full-Stack Developer passionate about building modern, responsive,
            and user-friendly web applications. I specialize in creating
            seamless digital experiences from concept to deployment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link
              to="/projects"
              className="bg-indigo-500 hover:bg-indigo-400 text-white font-medium px-6 py-3 rounded-lg transition duration-300 shadow-lg"
            >
              View My Projects
            </Link>
            <Link
              to="/contact"
              className="border border-gray-400 text-gray-200 hover:bg-gray-800 font-medium px-6 py-3 rounded-lg transition duration-300"
            >
              Contact Me
            </Link>
          </div>
        </div>

        {/* Right Section - Image */}
        <div className="flex-1 flex justify-center">
          <img
            src="./portpic.JPG"
            alt="Vishnu Vijayan"
            className="rounded-full border-4 border-indigo-500 shadow-lg w-64 h-64 object-cover"
          />
        </div>
      </div>
    </div>
  );
}
