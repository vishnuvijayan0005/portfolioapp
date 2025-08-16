export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-6">
      <div className="bg-gray-800 p-8 rounded-2xl shadow-lg w-full max-w-5xl border border-gray-700">
        <h1 className="text-4xl font-bold text-center text-indigo-400 mb-10">
          Contact Me
        </h1>

        {/* Grid container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {/* Email */}
          <div className="bg-gray-700 p-6 rounded-xl shadow-md hover:bg-gray-600 transition text-center border border-gray-600">
            <p className="text-3xl mb-2">📧</p>
            <p className="text-lg font-semibold text-white mb-1">Email</p>
            <p className="text-sm text-gray-300 break-all">
              vishnuvijayan90721@gmail.com
            </p>
          </div>

          {/* Phone */}
          <div className="bg-gray-700 p-6 rounded-xl shadow-md hover:bg-gray-600 transition text-center border border-gray-600">
            <p className="text-3xl mb-2">📞</p>
            <p className="text-lg font-semibold text-white mb-1">Phone</p>
            <p className="text-sm text-gray-300">+91 9072155088</p>
          </div>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/vishnuvijayann_/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-700 p-6 rounded-xl shadow-md hover:bg-gray-600 transition text-center border border-gray-600"
          >
            <p className="text-3xl mb-2">📸</p>
            <p className="text-lg font-semibold text-white mb-1">Instagram</p>
            <p className="text-sm text-pink-400">Visit Profile</p>
          </a>

          {/* LinkedIn */}
          <a
            href="http://www.linkedin.com/in/vishnu-vijayan03"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-700 p-6 rounded-xl shadow-md hover:bg-gray-600 transition text-center border border-gray-600"
          >
            <p className="text-3xl mb-2">💼</p>
            <p className="text-lg font-semibold text-white mb-1">LinkedIn</p>
            <p className="text-sm text-blue-400">Visit Profile</p>
          </a>
        </div>
      </div>
    </div>
  );
}
