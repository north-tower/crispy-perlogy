
import { Button } from "@/components/ui/button";
import { ArrowRight, ExternalLink } from "lucide-react";
import Link from "next/link";

const PartnersSection = () => {
  const partners = [
    { name: "LG", logo: "/lovable-uploads/69516d63-ff18-4ca2-9acc-20de6b95267c.png", category: "Display Solutions" },
    { name: "Samsung", logo: "/lovable-uploads/69516d63-ff18-4ca2-9acc-20de6b95267c.png", category: "Visual Display" },
    { name: "TOA", logo: "/lovable-uploads/69516d63-ff18-4ca2-9acc-20de6b95267c.png", category: "Audio Systems" },
    { name: "View", logo: "/lovable-uploads/69516d63-ff18-4ca2-9acc-20de6b95267c.png", category: "Smart Glass" },
    { name: "Alpha Acoustics", logo: "/lovable-uploads/69516d63-ff18-4ca2-9acc-20de6b95267c.png", category: "Sound Solutions" },
    { name: "Uniguest", logo: "/lovable-uploads/69516d63-ff18-4ca2-9acc-20de6b95267c.png", category: "Digital Engagement" },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-perlogy-blue/5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-perlogy-orange/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-50 to-blue-100 text-perlogy-blue rounded-full text-sm font-medium mb-6">
            <span className="flex items-center">
              <span className="w-2 h-2 bg-perlogy-blue rounded-full mr-2"></span>
              Strategic Alliances
            </span>
          </div>
          
          <h2 className="text-4xl font-bold mb-6 text-perlogy-dark">Our Technology Partners</h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            We collaborate with industry-leading technology providers to deliver innovative and 
            integrated ProAV solutions across Africa.
          </p>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-8 justify-items-center mb-16">
          {partners.map((partner, index) => (
            <div 
              key={index} 
              className="group flex flex-col items-center justify-center w-full transition-all duration-300"
            >
              <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 w-full flex flex-col items-center justify-center h-40">
                <img 
                  src={partner.logo} 
                  alt={partner.name} 
                  className="h-12 object-contain mb-4 transition-transform duration-300 group-hover:scale-110" 
                />
                <div className="text-center mt-2">
                  <p className="font-medium text-perlogy-dark">{partner.name}</p>
                  <p className="text-xs text-gray-500 mt-1">{partner.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="flex flex-col items-center justify-center space-y-8">
          <p className="text-gray-600 max-w-2xl text-center">
            Our partnerships enable us to provide cutting-edge technology solutions 
            tailored to meet the specific needs of our clients across diverse industries.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="bg-perlogy-blue hover:bg-blue-600 text-white px-6 py-6 rounded-xl group transition-all duration-300 shadow-lg shadow-blue-100">
              <Link href="/partners" className="flex items-center">
                Explore All Partners
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            
            <Button variant="outline" className="border-gray-300 hover:border-perlogy-blue hover:text-perlogy-blue px-6 py-6 rounded-xl transition-all duration-300">
              <Link href="/become-partner" className="flex items-center">
                Become a Partner
                <ExternalLink size={16} className="ml-2" />
              </Link>
            </Button>
          </div>
        </div>
        
        {/* Partner stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-sm text-center">
            <p className="text-4xl font-bold text-perlogy-blue mb-2">30+</p>
            <p className="text-gray-600">Global Partners</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm text-center">
            <p className="text-4xl font-bold text-perlogy-orange mb-2">15+</p>
            <p className="text-gray-600">Industry Verticals</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm text-center">
            <p className="text-4xl font-bold text-perlogy-blue mb-2">500+</p>
            <p className="text-gray-600">Joint Projects</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm text-center">
            <p className="text-4xl font-bold text-perlogy-orange mb-2">20+</p>
            <p className="text-gray-600">Countries Served</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;