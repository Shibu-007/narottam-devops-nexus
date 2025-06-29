
const Certifications = () => {
  const certifications = [
    {
      title: "Microsoft Certified: Azure Fundamentals",
      code: "AZ-900",
      status: "Certified",
      statusColor: "text-green-600 bg-green-100"
    },
    {
      title: "Microsoft Certified: DevOps Engineer Expert",
      code: "AZ-400",
      status: "Certified",
      statusColor: "text-green-600 bg-green-100"
    },
    {
      title: "Terraform Associate",
      code: "003",
      status: "In Progress",
      statusColor: "text-orange-600 bg-orange-100"
    },
    {
      title: "Certified Kubernetes Administrator",
      code: "CKA",
      status: "In Progress",
      statusColor: "text-orange-600 bg-orange-100"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Certifications
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-gradient-to-r from-blue-50 to-gray-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-lg font-bold text-gray-900">{cert.title}</h3>
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${cert.statusColor}`}>
                  {cert.status}
                </span>
              </div>
              <p className="text-blue-600 font-semibold">{cert.code}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
