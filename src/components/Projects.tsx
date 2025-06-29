
const Projects = () => {
  const projects = [
    {
      title: "CI/CD Pipeline Automation",
      description: "Built end-to-end CI/CD pipelines for multiple microservices using Azure DevOps, implementing automated testing, security scanning, and multi-environment deployments.",
      tools: ["Azure DevOps", "YAML", "Docker", "SonarQube"],
      problem: "Reduced manual deployment efforts and improved release reliability"
    },
    {
      title: "Terraform-based Azure Infrastructure",
      description: "Designed and implemented Infrastructure as Code using Terraform modules for scalable Azure environments including VNets, AKS clusters, and security configurations.",
      tools: ["Terraform", "Azure", "Key Vault", "NSG"],
      problem: "Standardized infrastructure provisioning across environments"
    },
    {
      title: "Kubernetes Monitoring Setup",
      description: "Implemented comprehensive monitoring and observability stack for Kubernetes clusters using Prometheus, Grafana, and custom dashboards for real-time insights.",
      tools: ["Prometheus", "Grafana", "Kubernetes", "Helm"],
      problem: "Achieved proactive monitoring and 99.9% system availability"
    },
    {
      title: "Dockerized Microservices Deployment",
      description: "Containerized legacy applications and deployed them on AKS with automated scaling, service mesh integration, and performance optimization.",
      tools: ["Docker", "Kubernetes", "AKS", "Istio"],
      problem: "Modernized legacy applications and improved scalability"
    },
    {
      title: "3-Tier App Onboarding for US Client",
      description: "Led the complete DevOps transformation for a US client's 3-tier application, implementing automated deployments and infrastructure management.",
      tools: ["Azure DevOps", "Terraform", "AppDynamics", "PowerShell"],
      problem: "Accelerated time-to-market and reduced operational overhead"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 shadow-sm hover:shadow-lg transition-shadow duration-300 hover:scale-105 transform transition-transform"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
              <p className="text-gray-600 mb-4 text-sm leading-relaxed">{project.description}</p>
              
              <div className="mb-4">
                <div className="flex flex-wrap gap-2">
                  {project.tools.map((tool, toolIndex) => (
                    <span
                      key={toolIndex}
                      className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="border-t pt-3">
                <p className="text-sm text-green-600 font-medium">
                  ✓ {project.problem}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
