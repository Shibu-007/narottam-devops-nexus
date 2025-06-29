
import { Mail, Phone, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  return (
    <section className="py-16 bg-blue-600">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Let's Connect
          </h2>
          <div className="w-24 h-1 bg-white mx-auto mb-4"></div>
          <p className="text-blue-100 text-lg">
            Ready to discuss your next DevOps project? Let's talk!
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-blue-100">Phone</p>
                  <p className="text-white font-semibold">+91-8210231852</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-blue-100">Email</p>
                  <p className="text-white font-semibold">narottamkumarsaw8210@gmail.com</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <Button 
                size="lg" 
                className="bg-white text-blue-600 hover:bg-gray-100 w-full md:w-auto"
                onClick={() => window.open('mailto:narottamkumarsaw8210@gmail.com', '_blank')}
              >
                <Mail className="w-5 h-5 mr-2" />
                Send Email
              </Button>
            </div>
          </div>
          
          <div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-bold text-white mb-4">Quick Message</h3>
              <form className="space-y-4">
                <Input 
                  placeholder="Your Name" 
                  className="bg-white/20 border-white/30 text-white placeholder:text-white/70"
                />
                <Input 
                  type="email" 
                  placeholder="Your Email" 
                  className="bg-white/20 border-white/30 text-white placeholder:text-white/70"
                />
                <Textarea 
                  placeholder="Your Message" 
                  rows={4}
                  className="bg-white/20 border-white/30 text-white placeholder:text-white/70"
                />
                <Button 
                  type="submit" 
                  className="bg-white text-blue-600 hover:bg-gray-100 w-full"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
