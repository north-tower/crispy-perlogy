import { Check, HeadphonesIcon, MonitorIcon, TabletIcon, PanelRightIcon, Users, BarChart2, UserCheck, Settings, Shield } from "lucide-react";
import ServiceCard from "@/components/ServiceCard";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Services = () => {
  const serviceCards = [
    {
      icon: <MonitorIcon className="h-6 w-6" />,
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
      icon: <HeadphonesIcon className="h-6 w-6" />,
      title: "Maintenance & Support",
      description: "Comprehensive ongoing support ensures your systems continue operating at peak performance long after installation."
    },
    {
      icon: <PanelRightIcon className="h-6 w-6" />,
      title: "System Performance Analysis",
      description: "We conduct thorough evaluations of your existing AV systems to identify bottlenecks, inefficiencies, and opportunities for enhancement."
    },
    {
      icon: <TabletIcon className="h-6 w-6" />,
      title: "Professional Certification",
      description: "Our team provides industry-recognized certification for your AV installations, ensuring they meet or exceed all relevant standards."
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "System Integration",
      description: "We specialize in seamlessly integrating diverse AV technologies into a unified, user-friendly system for maximum efficiency."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
    {/* Navbar with subtle shadow */}
    <Navbar  />
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-perlogy-dark to-perlogy-blue text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center px-4 py-1 bg-blue-100 text-perlogy-blue rounded-full text-sm font-medium mb-6">
              <span>Professional Services</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl">
              We offer a comprehensive range of professional services to support your audio-visual projects from concept to completion across Africa.
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-perlogy-dark">
              Comprehensive <span className="text-perlogy-orange">ProAV</span> Solutions
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              From initial assessment to ongoing support, we provide end-to-end services to ensure the success of your audio-visual projects.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceCards.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Service Process */}
      <section className="py-24 bg-gradient-to-b from-perlogy-light to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-1 bg-blue-100 text-perlogy-blue rounded-full text-sm font-medium mb-6">
              <span>Our Approach</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-perlogy-dark">
              Our Service <span className="text-perlogy-orange">Process</span>
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              We follow a structured approach to ensure every project is delivered successfully.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center relative group">
              <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center text-xl font-bold mx-auto mb-6 group-hover:bg-perlogy-orange group-hover:text-white transition-all duration-300">
                <span>1</span>
              </div>
              <div className="absolute top-8 left-1/2 w-full h-1 bg-gray-200 -z-10 hidden md:block"></div>
              <h3 className="text-xl font-semibold mb-2 text-perlogy-dark">Consultation</h3>
              <p className="text-gray-600">
                We begin with a thorough consultation to understand your specific needs, goals, and constraints.
              </p>
            </div>
            <div className="text-center relative group">
              <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center text-xl font-bold mx-auto mb-6 group-hover:bg-perlogy-orange group-hover:text-white transition-all duration-300">
                <span>2</span>
              </div>
              <div className="absolute top-8 left-1/2 w-full h-1 bg-gray-200 -z-10 hidden md:block"></div>
              <h3 className="text-xl font-semibold mb-2 text-perlogy-dark">Design & Planning</h3>
              <p className="text-gray-600">
                Our experts create a detailed design and implementation plan tailored to your requirements.
              </p>
            </div>
            <div className="text-center relative group">
              <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center text-xl font-bold mx-auto mb-6 group-hover:bg-perlogy-orange group-hover:text-white transition-all duration-300">
                <span>3</span>
              </div>
              <div className="absolute top-8 left-1/2 w-full h-1 bg-gray-200 -z-10 hidden md:block"></div>
              <h3 className="text-xl font-semibold mb-2 text-perlogy-dark">Implementation</h3>
              <p className="text-gray-600">
                We oversee the installation and integration of all systems with precision and attention to detail.
              </p>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center text-xl font-bold mx-auto mb-6 group-hover:bg-perlogy-orange group-hover:text-white transition-all duration-300">
                <span>4</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-perlogy-dark">Support & Maintenance</h3>
              <p className="text-gray-600">
                We provide ongoing support and maintenance to ensure your systems continue to perform optimally.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Benefits */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img
                src="/images/service-benefits.jpg"
                alt="Service Benefits"
                className="rounded-lg shadow-lg w-full object-cover h-96"
              />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-perlogy-blue rounded-lg -z-10"></div>
            </div>
            <div>
              <div className="inline-flex items-center px-4 py-1 bg-blue-100 text-perlogy-blue rounded-full text-sm font-medium mb-6">
                <span>Why Choose Us</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-perlogy-dark">
                Benefits of Our <span className="text-perlogy-orange">Services</span>
              </h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center text-perlogy-blue mr-3 flex-shrink-0">
                    <Check className="h-4 w-4" />
                  </div>
                  <span className="text-gray-600">Expert guidance from industry professionals with years of experience</span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center text-perlogy-blue mr-3 flex-shrink-0">
                    <Check className="h-4 w-4" />
                  </div>
                  <span className="text-gray-600">Customized solutions tailored to your specific needs and budget</span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center text-perlogy-blue mr-3 flex-shrink-0">
                    <Check className="h-4 w-4" />
                  </div>
                  <span className="text-gray-600">Access to cutting-edge technology through our extensive partner network</span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center text-perlogy-blue mr-3 flex-shrink-0">
                    <Check className="h-4 w-4" />
                  </div>
                  <span className="text-gray-600">Comprehensive project management to ensure timely and efficient delivery</span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center text-perlogy-blue mr-3 flex-shrink-0">
                    <Check className="h-4 w-4" />
                  </div>
                  <span className="text-gray-600">Ongoing support and maintenance to maximize the lifespan of your systems</span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center text-perlogy-blue mr-3 flex-shrink-0">
                    <Check className="h-4 w-4" />
                  </div>
                  <span className="text-gray-600">Transparent pricing and detailed documentation throughout the process</span>
                </li>
              </ul>
              <Button className="bg-perlogy-blue hover:bg-blue-600 text-white mt-8 px-8 py-6 rounded-lg transition-all duration-300 group">
                <Link href="/contact" className="flex items-center">
                  Discuss Your Project
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2 group-hover:translate-x-1 transition-transform">
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-perlogy-dark to-perlogy-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Contact us today to discuss your specific needs and discover how Perlogy Technologies can help you achieve your audio-visual goals.
          </p>
          <Button size="lg" className="bg-perlogy-orange hover:bg-orange-600 text-white px-8 py-6 rounded-lg transition-all duration-300 group">
            <Link href="/contact" className="flex items-center">
              Contact Us Now
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2 group-hover:translate-x-1 transition-transform">
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </Link>
          </Button>
        </div>
      </section>

<Footer />

    </div>
  );
};

export default Services;