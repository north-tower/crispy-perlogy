
import { Button } from "@/components/ui/button";
import ServiceCard from "@/components/ServiceCard";
import { Monitor, BarChart2, UserCheck, Settings, Shield, Headphones } from "lucide-react";
import Link from "next/link";

const ServicesSection = () => {
  const services = [
    {
      icon: <Monitor className="h-6 w-6" />,
      title: "Site Survey & Needs Assessment",
      description: "Our expert team conducts comprehensive site surveys to identify improvement areas and develop tailored strategic solutions."
    },
    {
      icon: <BarChart2 className="h-6 w-6" />,
      title: "Technical Solution Design",
      description: "Our skilled professionals create custom ProAV solutions perfectly aligned with your unique business requirements."
    },
    {
      icon: <UserCheck className="h-6 w-6" />,
      title: "Vendor Selection",
      description: "We help you select the perfect vendors and distributors to ensure project success and optimal performance."
    },
    {
      icon: <Settings className="h-6 w-6" />,
      title: "Installation Supervision",
      description: "Our experienced team ensures seamless and efficient implementation of your ProAV systems from start to finish."
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Project Commissioning",
      description: "We ensure your project is completed with precision, meeting all technical specifications and performance standards."
    },
    {
      icon: <Headphones className="h-6 w-6" />,
      title: "Maintenance & Support",
      description: "Comprehensive ongoing support ensures your systems continue operating at peak performance long after installation."
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-perlogy-light to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-1 bg-blue-100 text-perlogy-blue rounded-full text-sm font-medium mb-6">
            <span>Our Services</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-perlogy-dark">
            Comprehensive <span className="text-perlogy-orange">ProAV</span> Solutions
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            We offer end-to-end professional services to support your audio-visual projects 
            from concept to completion across Africa.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button className="bg-perlogy-blue hover:bg-blue-600 text-white px-8 py-6 rounded-lg transition-all duration-300 group">
            <Link href="/services" className="flex items-center">
              View All Services
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2 group-hover:translate-x-1 transition-transform">
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;