
const TechStack = () => {
  const technologies = [
    "Azure DevOps", "Terraform", "Docker", "Kubernetes", "Helm", 
    "Prometheus", "Grafana", "Azure Monitor", "AppDynamics", 
    "PowerShell", "Bash", "Git", "Key Vault", "NSG", "VNet", "YAML"
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Core Skills & Tech Stack
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-4 text-center shadow-sm hover:shadow-md transition-shadow duration-300 hover:scale-105 transform transition-transform"
            >
              <span className="text-sm font-medium text-gray-700">{tech}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
