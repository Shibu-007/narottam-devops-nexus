
const ProfileSummary = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Profile Summary
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-blue-50 to-gray-50 rounded-lg p-8 shadow-sm">
            <p className="text-lg text-gray-700 leading-relaxed text-center">
              Accomplished DevOps Engineer with <span className="font-semibold text-blue-600">3.6+ years</span> of 
              hands-on experience in cloud infrastructure automation and CI/CD pipeline optimization. 
              Proven expertise in <span className="font-semibold">Azure DevOps, Terraform, Docker, and Kubernetes (AKS)</span> 
              with strong focus on scalability and reliability. Proficient in implementing comprehensive 
              observability solutions using <span className="font-semibold">Grafana, Prometheus, Azure Monitor, and AppDynamics</span>. 
              Demonstrated ability in infrastructure automation, YAML scripting, and enabling rapid, 
              secure deployment cycles at enterprise scale.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileSummary;
