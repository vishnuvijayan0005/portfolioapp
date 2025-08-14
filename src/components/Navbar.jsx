import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react"; // For icons (install: npm install lucide-react)

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md p-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Left side - Logo & Name */}
        <div className="flex items-center gap-3">
          <img
            src="./logo.webp"
            alt="Logo"
            className="w-10 h-10 rounded-full"
          />
          <span className="text-xl font-bold text-gray-800">
            Vishnu Vijayan
          </span>
        </div>

        {/* Hamburger Menu Button - Mobile */}
        <button
          className="md:hidden text-gray-800"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-lg font-medium">
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
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="flex flex-col gap-4 mt-4 md:hidden text-lg font-medium">
          <li>
            <Link
              to="/"
              className="text-gray-800 hover:text-gray-500 transition duration-200"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="text-gray-800 hover:text-gray-500 transition duration-200"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/education"
              className="text-gray-800 hover:text-gray-500 transition duration-200"
              onClick={() => setIsOpen(false)}
            >
              Education
            </Link>
          </li>
          <li>
            <Link
              to="/projects"
              className="text-gray-800 hover:text-gray-500 transition duration-200"
              onClick={() => setIsOpen(false)}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="text-gray-800 hover:text-gray-500 transition duration-200"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
}
