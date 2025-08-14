import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 flex items-center justify-center p-6">
      <div className="bg-white/10 backdrop-blur-lg p-10 rounded-2xl shadow-xl text-center text-white max-w-2xl">
        <h1 className="text-5xl font-bold mb-4">Hi, I'm Vishnu Vijayan 👋</h1>
        <p className="text-lg mb-6">
          A passionate developer creating modern and responsive web
          applications. I love turning ideas into real-world projects with clean
          and functional code.
        </p>
        <Link
          to="/projects"
          className="bg-yellow-400 text-gray-900 font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-yellow-300 transition duration-300"
        >
          View My Projects
        </Link>
      </div>
    </div>
  );
}
