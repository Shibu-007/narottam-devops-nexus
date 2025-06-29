
const Experience = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Professional Experience
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-blue-50 to-gray-50 rounded-lg p-8 shadow-sm">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
              <div>
                <h3 className="text-2xl font-bold text-gray-900">DevOps Engineer</h3>
                <p className="text-lg text-blue-600 font-semibold">Tata Consultancy Services</p>
              </div>
              <div className="text-gray-600 font-medium mt-2 md:mt-0">
                Dec 2021 – Present
              </div>
            </div>
            
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>Designed and implemented CI/CD pipelines using Azure DevOps, reducing deployment time by 60% and improving release frequency</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>Automated infrastructure provisioning with Terraform, managing 100+ Azure resources across multiple environments</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>Orchestrated containerized applications using Kubernetes (AKS) and Helm charts, improving scalability and resource utilization</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>Implemented comprehensive monitoring solutions with Prometheus, Grafana, and Azure Monitor, achieving 99.9% uptime</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>Collaborated with cross-functional teams to onboard 15+ applications to automated deployment pipelines</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>Optimized cloud costs by 30% through resource right-sizing and automated scaling policies</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
