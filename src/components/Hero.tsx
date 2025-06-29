
import { Mail, Phone, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-50 to-white flex items-center justify-center px-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
            Narottam Kumar Saw
          </h1>
          <p className="text-xl md:text-2xl text-blue-600 font-semibold mb-6">
            DevOps Engineer | Azure | Kubernetes | Terraform | CI/CD
          </p>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            I'm a passionate DevOps Engineer with experience in automating deployments, 
            managing Azure infrastructure, and enabling rapid, secure CI/CD at scale. 
            I thrive on making systems resilient, observable, and scalable.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <div className="flex items-center gap-2 text-gray-700">
            <Phone className="w-5 h-5" />
            <span>+91-8210231852</span>
          </div>
          <div className="flex items-center gap-2 text-gray-700">
            <Mail className="w-5 h-5" />
            <span>narottamkumarsaw8210@gmail.com</span>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3"
          >
            <Download className="w-5 h-5 mr-2" />
            Download Resume
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3"
          >
            View Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
