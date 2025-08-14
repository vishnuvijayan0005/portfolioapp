import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md p-4">
      <ul className="flex justify-center gap-8 text-lg font-medium">
        <li>
          <Link
            to="/"
            className="text-gray-800 hover:text-gray-500 transition duration-200"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className="text-gray-800 hover:text-gray-500 transition duration-200"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="/education"
            className="text-gray-800 hover:text-gray-500 transition duration-200"
          >
            Education
          </Link>
        </li>
        <li>
          <Link
            to="/projects"
            className="text-gray-800 hover:text-gray-500 transition duration-200"
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            className="text-gray-800 hover:text-gray-500 transition duration-200"
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}
