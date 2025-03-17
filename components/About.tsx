import { ArrowRight, CheckCircle2, Users, Award, Globe, ChevronRight, Hexagon, Zap, Shield } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const AboutSection = () => {
  const features = [
    { text: "Premium quality products", icon: <Shield className="h-4 w-4" /> },
    { text: "Tailored solutions", icon: <Hexagon className="h-4 w-4" /> },
    { text: "Strategic partnerships", icon: <Users className="h-4 w-4" /> },
    { text: "Expert consulting", icon: <Award className="h-4 w-4" /> },
    { text: "Competitive pricing", icon: <Zap className="h-4 w-4" /> },
    { text: "Dedicated support", icon: <CheckCircle2 className="h-4 w-4" /> }
  ];

  return (
    <section className="py-24 md:py-32 bg-white overflow-hidden relative">
      {/* Enhanced background decorations */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-50 rounded-full -translate-x-1/2 -translate-y-1/2 opacity-70 blur-xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-50 rounded-full translate-x-1/3 translate-y-1/3 opacity-70 blur-xl"></div>
      <div className="absolute top-1/2 left-1/4 w-48 h-48 bg-blue-50 rounded-full opacity-30 blur-lg"></div>
      
      {/* Floating shapes */}
      <div className="absolute top-20 right-16 w-12 h-12 bg-perlogy-blue/10 rounded-lg rotate-12 animate-pulse hidden md:block"></div>
      <div className="absolute bottom-20 left-16 w-16 h-16 bg-perlogy-orange/10 rounded-full -rotate-12 animate-pulse hidden md:block"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="relative order-2 md:order-1">
            {/* Main image with enhanced treatment */}
            <div className="rounded-2xl shadow-xl overflow-hidden relative z-10 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
              <div className="relative">
                <Image
                  src="https://i.postimg.cc/4nCPg3Tg/hhh.png"
                  alt="About Perlogy"
                  width={600}
                  height={450}
                  className="w-full h-auto transition-transform duration-700 hover:scale-105"
                  priority
                />
                
                {/* Enhanced image overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-perlogy-blue/30 to-transparent mix-blend-overlay"></div>
              </div>
            </div>
            
            {/* Enhanced decorative elements */}
            <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-perlogy-orange rounded-3xl -z-0 opacity-80 rotate-12 blur-sm"></div>
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-perlogy-blue/40 rounded-3xl -z-0 -rotate-12 blur-sm"></div>
            
            {/* Stats card with enhanced styling */}
            <div className="absolute bottom-10 -right-10 md:-right-16 bg-white p-6 rounded-xl shadow-2xl z-20 w-72 border-t-4 border-perlogy-blue backdrop-blur-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <h4 className="font-semibold text-perlogy-dark mb-5 text-lg flex items-center">
                <span className="w-2 h-8 bg-perlogy-blue rounded-full mr-3"></span>
                Our Impact
              </h4>
              <div className="space-y-5">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-perlogy-blue shadow-sm">
                    <Globe className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Serving</p>
                    <p className="font-semibold text-perlogy-dark text-lg">20+ African Countries</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center text-perlogy-orange shadow-sm">
                    <Users className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Trusted by</p>
                    <p className="font-semibold text-perlogy-dark text-lg">500+ Businesses</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-600 shadow-sm">
                    <Award className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Industry Experience</p>
                    <p className="font-semibold text-perlogy-dark text-lg">10+ Years</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="order-1 md:order-2">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-orange-100 to-orange-50 text-perlogy-orange rounded-full text-sm font-medium mb-8">
              <span className="flex items-center">
                <span className="w-2 h-2 bg-perlogy-orange rounded-full mr-2"></span>
                About Perlogy
              </span>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-bold mb-8 text-perlogy-dark leading-tight">
              Transforming the <span className="relative">
                <span className="text-perlogy-orange">ProAV</span>
                <span className="absolute -bottom-2 left-0 right-0 h-1 bg-perlogy-orange/30 rounded-full"></span>
              </span> Landscape in Africa
            </h2>
            
            <p className="text-gray-600 mb-6 text-xl leading-relaxed">
              Perlogy Technologies LLC is a premier ProAV distributor based in Dubai focused on the African market, 
              specializing in Professional Audio Visual solutions and integrated ICT distribution.
            </p>
            
            <p className="text-gray-600 mb-10 text-lg">
              We provide industry-leading quality products and tailored solutions that bridge the gap between ProAV and IT. 
              With our commitment to excellence, we prioritize exceptional user experience, scalability, and security, 
              ensuring seamless integration and compliance across all projects.
            </p>
            
            {/* Enhanced feature grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
              {features.map((item, index) => (
                <div key={index} className="flex items-center space-x-3 group p-3 rounded-lg transition-all duration-300 hover:bg-gray-50">
                  <div className="bg-orange-100 p-2 rounded-lg group-hover:bg-perlogy-orange group-hover:text-white transition-colors duration-300 shadow-sm">
                    {item.icon}
                  </div>
                  <span className="text-gray-700 font-medium">{item.text}</span>
                </div>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 mt-10">
              <Button className="bg-perlogy-blue hover:bg-blue-700 text-white group transition-all duration-300 px-6 py-6 shadow-lg shadow-blue-200/50 rounded-xl">
                <Link href="/about" className="flex items-center">
                  Learn More About Us 
                  <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              
              <Button variant="outline" className="border-gray-300 hover:border-perlogy-blue hover:text-perlogy-blue transition-all duration-300 px-6 py-6 rounded-xl">
                <Link href="/contact" className="flex items-center">
                  Contact Our Team
                  <ChevronRight size={18} className="ml-1" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;