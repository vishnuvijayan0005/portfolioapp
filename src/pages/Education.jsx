export default function Education() {
  const education = [
    {
      title: "B.Tech in Computer Science",
      year: "2021 - 2025",
      institution: "M Dasan Institute of Technology",
      image: "./garduat1.jpg",
    },
    {
      title: "Higher Secondary",
      year: "2019 - 2021",
      institution: "SGMGHSS Kolathur",
      image: "./edu2.jpg",
    },
    {
      title: "SSLC",
      year: "2019",
      institution: "SGMGHSS Kolathur",
      image: "edu1.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-6">
      <div className="flex flex-col md:flex-row gap-8">
        {education.map((edu, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-2xl shadow-lg border border-gray-700 
                       hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 
                       max-w-sm overflow-hidden text-center text-white"
          >
            {/* Education Image */}
            <img
              src={edu.image}
              alt={edu.title}
              className="w-full h-40 object-cover"
            />

            {/* Education Details */}
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-2 text-indigo-400">
                {edu.title}
              </h2>
              <p className="text-gray-300 mb-2">{edu.year}</p>
              <p className="text-gray-200">{edu.institution}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
