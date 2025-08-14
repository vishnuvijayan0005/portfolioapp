export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-900 via-pink-800 to-rose-900 flex items-center justify-center p-6">
      <div className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-xl w-full max-w-5xl">
        <h1 className="text-4xl font-bold text-center text-white mb-10">
          Contact Me
        </h1>

        {/* Grid container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {/* Email */}
          <div className="bg-white/10 p-6 rounded-xl shadow-md hover:bg-white/20 transition text-center">
            <p className="text-3xl mb-2">📧</p>
            <p className="text-lg font-semibold text-white mb-1">Email</p>
            <p className="text-sm text-gray-200 break-all">
              vishnuvijayan90721@gmail.com
            </p>
          </div>

          {/* Phone */}
          <div className="bg-white/10 p-6 rounded-xl shadow-md hover:bg-white/20 transition text-center">
            <p className="text-3xl mb-2">📞</p>
            <p className="text-lg font-semibold text-white mb-1">Phone</p>
            <p className="text-sm text-gray-200">+91 9072155088</p>
          </div>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/vishnuvijayann_/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/10 p-6 rounded-xl shadow-md hover:bg-white/20 transition text-center"
          >
            <p className="text-3xl mb-2">📸</p>
            <p className="text-lg font-semibold text-white mb-1">Instagram</p>
            <p className="text-sm text-pink-300">Visit Profile</p>
          </a>

          {/* LinkedIn */}
          <a
            href="http://www.linkedin.com/in/vishnu-vijayan03"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/10 p-6 rounded-xl shadow-md hover:bg-white/20 transition text-center"
          >
            <p className="text-3xl mb-2">💼</p>
            <p className="text-lg font-semibold text-white mb-1">LinkedIn</p>
            <p className="text-sm text-blue-300">Visit Profile</p>
          </a>
        </div>
      </div>
    </div>
  );
}
