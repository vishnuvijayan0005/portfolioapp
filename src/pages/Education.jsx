export default function Education() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-800 to-indigo-900 flex items-center justify-center p-6">
      <div className="flex flex-col md:flex-row gap-8">
        {/* College Section */}
        <div className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-xl max-w-sm text-center text-white">
          <h2 className="text-2xl font-bold mb-3">
            B.Tech in Computer Science
          </h2>
          <p className="text-yellow-300 mb-2">2021 - 2025</p>
          <ul className="space-y-2 text-lg">
            <li>M Dasan Institute of Technology</li>
          </ul>
        </div>

        {/* School Section */}
        <div className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-xl max-w-sm text-center text-white">
          <h2 className="text-2xl font-bold mb-3">Higher Secondary </h2>

          <div className="mb-4">
            <p className="text-yellow-300 mb-2">2019 - 2021</p>
            <p>SGMGHSS Kolathur</p>
          </div>
        </div>
        <div className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-xl max-w-sm text-center text-white">
          <h2 className="text-2xl font-bold mb-3">SSLC</h2>
          <div>
            <p className="text-yellow-300 mb-2">2019</p>
            <p>SGMGHSS Kolathur</p>
          </div>
        </div>
      </div>
    </div>
  );
}
