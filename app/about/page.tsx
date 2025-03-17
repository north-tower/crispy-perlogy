import { Briefcase, Calendar, MapPin, Users, ArrowRight, CheckCircle2, Award, Globe, ChevronRight,  Zap, Shield } from "lucide-react";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar with subtle shadow */}
      <Navbar  />
      
      <main className="flex-grow">
       
          {/* Hero Section */}
        
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-perlogy-dark to-perlogy-dark/90 text-white py-24 relative">
        {/* Background decorations */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-perlogy-blue/10 rounded-full translate-x-1/3 -translate-y-1/3 opacity-30 blur-xl"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-perlogy-orange/10 rounded-full -translate-x-1/2 translate-y-1/2 opacity-30 blur-xl"></div>
        
        {/* Floating shapes */}
        <div className="absolute top-20 left-16 w-12 h-12 bg-perlogy-blue/10 rounded-lg rotate-12 animate-pulse hidden md:block"></div>
        <div className="absolute bottom-20 right-16 w-16 h-16 bg-perlogy-orange/10 rounded-full -rotate-12 animate-pulse hidden md:block"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl relative">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-perlogy-blue/20 to-transparent rounded-full text-sm font-medium mb-8">
              <span className="flex items-center">
                <span className="w-2 h-2 bg-perlogy-orange rounded-full mr-2"></span>
                About Perlogy
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About <span className="text-perlogy-orange">Us</span></h1>
            <p className="text-xl leading-relaxed">
              Learn more about Perlogy Technologies and our mission to revolutionize Professional Audio-Visual distribution across Africa.
            </p>
            <div className="absolute -bottom-8 -left-8 w-20 h-20 bg-perlogy-blue/30 rounded-3xl -z-0 -rotate-12 blur-sm"></div>
          </div>
        </div>
      </section>

      {/* Company Info Section */}
      <section className="py-24 bg-white relative">
        {/* Background decorations */}
        <div className="absolute top-1/2 right-0 w-64 h-64 bg-blue-50 rounded-full translate-x-1/3 -translate-y-1/2 opacity-70 blur-xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-orange-100 to-orange-50 text-perlogy-orange rounded-full text-sm font-medium mb-8">
                <span className="flex items-center">
                  <span className="w-2 h-2 bg-perlogy-orange rounded-full mr-2"></span>
                  Who We Are
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-perlogy-dark leading-tight">
                Perlogy <span className="relative">
                  <span className="text-perlogy-orange">Technologies</span>
                  <span className="absolute -bottom-2 left-0 right-0 h-1 bg-perlogy-orange/30 rounded-full"></span>
                </span>
              </h2>
              <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                Perlogy Technologies LLC is a ProAV distributor based in Dubai focused on the African market. 
                The company specializes in Professional Audio Visual (ProAV) and the accompanied ICT integration and distribution.
              </p>
              <p className="text-gray-600 mb-6 text-lg">
                Our mission is to provide the best in quality product and priced solutions that are tailored to bridge the gap between ProAV and IT. 
                With a commitment to excellence, we prioritize user experience, scalability, and security, ensuring seamless integration and compliance.
              </p>
              <p className="text-gray-600 text-lg">
                Our collaborative partnerships with leading technology vendors keep us at the forefront of innovation.
              </p>
              
              <Button className="bg-perlogy-blue hover:bg-blue-700 text-white group transition-all duration-300 px-6 py-6 shadow-lg shadow-blue-200/50 rounded-xl mt-8">
                <Link href="/contact" className="flex items-center">
                  Contact Us Today
                  <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
            <div className="relative">
              {/* Main image with enhanced treatment */}
              <div className="rounded-2xl shadow-xl overflow-hidden relative z-10 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
                <div className="relative">
                  <Image
                    src="/lovable-uploads/dfab6f94-3df4-4fcf-9c6c-6158495a340c.png"
                    alt="About Perlogy"
                    width={600}
                    height={450}
                    className="w-full h-auto transition-transform duration-700 hover:scale-105"
                  />
                  
                  {/* Enhanced image overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-perlogy-blue/30 to-transparent mix-blend-overlay"></div>
                </div>
              </div>
              
              {/* Enhanced decorative elements */}
              <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-perlogy-orange rounded-3xl -z-0 opacity-30 rotate-12 blur-sm"></div>
              <div className="absolute -top-8 -right-8 w-32 h-32 bg-perlogy-blue/40 rounded-3xl -z-0 -rotate-12 blur-sm"></div>
            </div>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-24 bg-gray-50 relative">
        {/* Background decorations */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-blue-50 rounded-full -translate-x-1/2 -translate-y-1/2 opacity-70 blur-xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-50 rounded-full translate-x-1/3 translate-y-1/3 opacity-70 blur-xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-blue-50 text-perlogy-blue rounded-full text-sm font-medium mb-8 mx-auto">
              <span className="flex items-center">
                <span className="w-2 h-2 bg-perlogy-blue rounded-full mr-2"></span>
                Our Journey
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-perlogy-dark">Our History</h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              Perlogy Technologies LLC is a ProAV distributor based in Dubai focused on the African market.
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-perlogy-blue via-perlogy-blue to-perlogy-orange rounded-full"></div>
            
            <div className="space-y-16 ml-8">
              <div className="relative">
                {/* Timeline dot */}
                <div className="absolute -left-10 top-0 w-4 h-4 bg-perlogy-blue rounded-full shadow-lg shadow-blue-200/50"></div>
                <div className="bg-white p-8 rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                  <div className="flex items-center mb-4">
                    <div className="bg-perlogy-blue text-white px-4 py-1 rounded-lg font-medium">2015</div>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-perlogy-dark">Foundation</h3>
                  <p className="text-gray-600">
                    Perlogy Technologies LLC was founded by Mr. Nelson Mandela Mugarura in 2015. 
                    Nelson is a seasoned professional audio visual engineered who has honed his skill across several ProAV companies for the past 15 years.
                  </p>
                </div>
              </div>
              
              <div className="relative">
                <div className="absolute -left-10 top-0 w-4 h-4 bg-perlogy-blue rounded-full shadow-lg shadow-blue-200/50"></div>
                <div className="bg-white p-8 rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                  <div className="flex items-center mb-4">
                    <div className="bg-perlogy-blue text-white px-4 py-1 rounded-lg font-medium">2015-2018</div>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-perlogy-dark">Early Growth</h3>
                  <p className="text-gray-600">
                    During this period, Perlogy established partnerships with key manufacturers and began expanding its presence in the African market.
                  </p>
                </div>
              </div>
              
              <div className="relative">
                <div className="absolute -left-10 top-0 w-4 h-4 bg-perlogy-blue rounded-full shadow-lg shadow-blue-200/50"></div>
                <div className="bg-white p-8 rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                  <div className="flex items-center mb-4">
                    <div className="bg-perlogy-blue text-white px-4 py-1 rounded-lg font-medium">2018-2020</div>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-perlogy-dark">Expansion</h3>
                  <p className="text-gray-600">
                    Perlogy expanded its product offerings and established a stronger presence in East Africa, with notable projects in Kenya, Uganda, and Tanzania.
                  </p>
                </div>
              </div>
              
              <div className="relative">
                <div className="absolute -left-10 top-0 w-4 h-4 bg-perlogy-orange rounded-full shadow-lg shadow-orange-200/50"></div>
                <div className="bg-white p-8 rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                  <div className="flex items-center mb-4">
                    <div className="bg-perlogy-orange text-white px-4 py-1 rounded-lg font-medium">2020-Present</div>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-perlogy-dark">Industry Leadership</h3>
                  <p className="text-gray-600">
                    Today, Perlogy continues to lead in ProAV distribution across Africa, with a focus on innovative solutions and exceptional customer service.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
     {/* Team Section */}
<section className="py-24 bg-white relative">
  {/* Background decorations */}
  <div className="absolute top-1/2 left-0 w-64 h-64 bg-orange-50 rounded-full -translate-x-1/3 -translate-y-1/2 opacity-70 blur-xl"></div>
  
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    <div className="text-center mb-16">
      <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-orange-100 to-orange-50 text-perlogy-orange rounded-full text-sm font-medium mb-8 mx-auto">
        <span className="flex items-center">
          <span className="w-2 h-2 bg-perlogy-orange rounded-full mr-2"></span>
          Our People
        </span>
      </div>
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-perlogy-dark">Our Team</h2>
      <p className="text-gray-600 max-w-3xl mx-auto text-lg">
        Our team is the backbone of our organization. We take great pride in the diversity, expertise, and collaboration that our team members bring to the table.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="bg-white p-8 rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
        <div className="relative mb-6 mx-auto w-48 h-48 overflow-hidden rounded-full border-4 border-blue-100">
          <Image
            src="/lovable-uploads/4bd63bea-ac06-4af7-8038-4c1a34c8d9f6.png"
            alt="Nelson Mugarura"
            width={192}
            height={192}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-perlogy-blue/20"></div>
        </div>
        <h3 className="text-xl font-semibold text-perlogy-dark">Eng. Nelson Mugarura</h3>
        <p className="text-perlogy-blue font-medium mb-3">Founder & Managing Director</p>
        <p className="text-gray-600">
          Our highly professional and technical team is led by Nelson Mugarura. Nelson holds a Bachelor of Science Technology in Physics from Kyambogo University and a Master of Electrical Engineering from Makerere University.
        </p>
        <div className="mt-4 pt-4 border-t border-gray-100">
          <div className="flex justify-center space-x-3">
            <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-perlogy-blue">
              <Briefcase className="h-4 w-4" />
            </div>
            <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-perlogy-blue">
              <Globe className="h-4 w-4" />
            </div>
            <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-perlogy-blue">
              <Award className="h-4 w-4" />
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-white p-8 rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
        <div className="relative mb-6 mx-auto w-48 h-48 overflow-hidden rounded-full border-4 border-blue-100">
          <Image
            src="/lovable-uploads/eb774e57-7224-40a6-b6d2-544b50c5f151.png"
            alt="Sarah Johnson"
            width={192}
            height={192}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-perlogy-blue/20"></div>
        </div>
        <h3 className="text-xl font-semibold text-perlogy-dark">Sarah Johnson</h3>
        <p className="text-perlogy-blue font-medium mb-3">Technical Director</p>
        <p className="text-gray-600">
          Sarah oversees all technical aspects of our projects, ensuring they meet the highest standards of quality and performance.
        </p>
        <div className="mt-4 pt-4 border-t border-gray-100">
          <div className="flex justify-center space-x-3">
            <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-perlogy-blue">
              <Briefcase className="h-4 w-4" />
            </div>
            <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-perlogy-blue">
              <Globe className="h-4 w-4" />
            </div>
            <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-perlogy-blue">
              <CheckCircle2 className="h-4 w-4" />
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-white p-8 rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
        <div className="relative mb-6 mx-auto w-48 h-48 overflow-hidden rounded-full border-4 border-blue-100">
          <Image
            src="/lovable-uploads/9f85e701-0a29-4646-b186-b16ffedb2471.png"
            alt="David Ochieng"
            width={192}
            height={192}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-perlogy-blue/20"></div>
        </div>
        <h3 className="text-xl font-semibold text-perlogy-dark">David Ochieng</h3>
        <p className="text-perlogy-blue font-medium mb-3">Business Development Manager</p>
        <p className="text-gray-600">
          David leads our business development efforts, helping to expand our reach across the African continent.
        </p>
        <div className="mt-4 pt-4 border-t border-gray-100">
          <div className="flex justify-center space-x-3">
            <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-perlogy-blue">
              <Users className="h-4 w-4" />
            </div>
            <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-perlogy-blue">
              <Globe className="h-4 w-4" />
            </div>
            <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-perlogy-blue">
              <Zap className="h-4 w-4" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

{/* Why Choose Us Section */}
<section className="py-24 bg-gray-50 relative overflow-hidden">
  {/* Background decorations */}
  <div className="absolute top-0 right-0 w-72 h-72 bg-blue-50 rounded-full translate-x-1/3 -translate-y-1/3 opacity-70 blur-xl"></div>
  <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-50 rounded-full -translate-x-1/3 translate-y-1/3 opacity-70 blur-xl"></div>
  
  {/* Floating shapes */}
  <div className="absolute top-20 right-16 w-12 h-12 bg-perlogy-blue/10 rounded-lg rotate-12 animate-pulse hidden md:block"></div>
  <div className="absolute bottom-20 left-16 w-16 h-16 bg-perlogy-orange/10 rounded-full -rotate-12 animate-pulse hidden md:block"></div>
  
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    <div className="text-center mb-16">
      <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-blue-50 text-perlogy-blue rounded-full text-sm font-medium mb-8 mx-auto">
        <span className="flex items-center">
          <span className="w-2 h-2 bg-perlogy-blue rounded-full mr-2"></span>
          Our Advantages
        </span>
      </div>
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-perlogy-dark">Why Choose <span className="text-perlogy-orange">Us</span>?</h2>
      <p className="text-gray-600 max-w-3xl mx-auto text-lg">
        Discover the advantages of partnering with Perlogy Technologies for your ProAV needs.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="bg-white p-8 rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-2 group">
        <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6 text-perlogy-blue group-hover:bg-perlogy-blue group-hover:text-white transition-colors duration-300">
          <Award className="h-7 w-7" />
        </div>
        <h3 className="text-xl font-semibold mb-4 text-perlogy-dark group-hover:text-perlogy-blue transition-colors duration-300">Professional Capacity</h3>
        <p className="text-gray-600">
          In our professional capacity, we engage directly with system integrators and project owners, offering invaluable assistance in the critical phase of initial system design and engineering. Our primary aim is to ensure that system integrators embark on their projects with a robust and meticulously planned foundation.
        </p>
        <p className="text-gray-600 mt-4 font-medium text-perlogy-orange">
          This collaborative approach not only streamlines the integration process but also enhances the overall quality and efficiency of the integrated systems.
        </p>
        <div className="mt-6 flex">
          <Link href="/services" className="text-perlogy-blue font-medium flex items-center group-hover:underline">
            Learn more <ChevronRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
      
      <div className="bg-white p-8 rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-2 group">
        <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6 text-perlogy-blue group-hover:bg-perlogy-blue group-hover:text-white transition-colors duration-300">
          <MapPin className="h-7 w-7" />
        </div>
        <h3 className="text-xl font-semibold mb-4 text-perlogy-dark group-hover:text-perlogy-blue transition-colors duration-300">Unique Location</h3>
        <p className="text-gray-600">
          Our warehouse is located in Jebel Ali, Dubai. We typically encourage our customers to arrange for their designated shipping agents to collect materials directly from our Jebel Ali warehouse. This practice enables us to offer the most competitive pricing, helping our customers stay market-competitive.
        </p>
        <p className="text-gray-600 mt-4 font-medium text-perlogy-orange">
          This added flexibility not only enhances cost-effectiveness but also ensures a better price point for the end consumer.
        </p>
        <div className="mt-6 flex">
          <Link href="/contact" className="text-perlogy-blue font-medium flex items-center group-hover:underline">
            Contact us <ChevronRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
      
      <div className="bg-white p-8 rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-2 group">
        <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6 text-perlogy-blue group-hover:bg-perlogy-blue group-hover:text-white transition-colors duration-300">
          <Users className="h-7 w-7" />
        </div>
        <h3 className="text-xl font-semibold mb-4 text-perlogy-dark group-hover:text-perlogy-blue transition-colors duration-300">Quality Partnerships</h3>
        <p className="text-gray-600">
          We have partnered with industry-leading manufacturers like LG Electronics, Samsung, Alpha Acoustics, and many others to provide the finest products available. By leveraging our extensive network, we ensure our clients have access to the best technology solutions.
        </p>
        <p className="text-gray-600 mt-4 font-medium text-perlogy-orange">
          Our partnerships enable us to deliver cutting-edge technology that redefines luxury and comfort in every project.
        </p>
        <div className="mt-6 flex">
          <Link href="/partners" className="text-perlogy-blue font-medium flex items-center group-hover:underline">
            View partners <ChevronRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
      
      <div className="bg-white p-8 rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-2 group">
        <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6 text-perlogy-blue group-hover:bg-perlogy-blue group-hover:text-white transition-colors duration-300">
          <Shield className="h-7 w-7" />
        </div>
        <h3 className="text-xl font-semibold mb-4 text-perlogy-dark group-hover:text-perlogy-blue transition-colors duration-300">Trusted Advisors</h3>
        <p className="text-gray-600">
          We take pride in our role as trusted advisors, supporting system integrators and project owners in making informed decisions that lead to successful project outcomes. Our approach is based on understanding your specific needs and providing tailored solutions.
        </p>
        <p className="text-gray-600 mt-4 font-medium text-perlogy-orange">
          By prioritizing your success, we build lasting relationships that extend beyond individual projects.
        </p>
        <div className="mt-6 flex">
          <Link href="/case-studies" className="text-perlogy-blue font-medium flex items-center group-hover:underline">
            See success stories <ChevronRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  </div>
</section>

{/* Stats Section */}
<section className="py-24 bg-white relative">
  {/* Background decorations */}
  <div className="absolute top-1/2 right-0 w-64 h-64 bg-orange-50 rounded-full translate-x-1/3 -translate-y-1/2 opacity-70 blur-xl"></div>
  <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-50 rounded-full -translate-x-1/3 translate-y-1/3 opacity-70 blur-xl"></div>
  
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    <div className="text-center mb-16">
      <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-orange-100 to-orange-50 text-perlogy-orange rounded-full text-sm font-medium mb-8 mx-auto">
        <span className="flex items-center">
          <span className="w-2 h-2 bg-perlogy-orange rounded-full mr-2"></span>
          By The Numbers
        </span>
      </div>
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-perlogy-dark">Our <span className="text-perlogy-blue">Impact</span></h2>
      <p className="text-gray-600 max-w-3xl mx-auto text-lg">
        See the difference we&apos;ve made in the ProAV industry across Africa.
      </p>
    </div>

    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
      <div className="bg-white p-6 rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border-t-4 border-perlogy-blue">
        <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-4 text-perlogy-blue mx-auto">
          <Calendar className="h-7 w-7" />
        </div>
        <div className="text-center">
          <p className="text-3xl md:text-4xl font-bold text-perlogy-dark mb-2">15+</p>
          <p className="text-gray-600 font-medium">Years Experience</p>
        </div>
      </div>
      
      <div className="bg-white p-6 rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border-t-4 border-perlogy-orange">
        <div className="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center mb-4 text-perlogy-orange mx-auto">
          <CheckCircle2 className="h-7 w-7" />
        </div>
        <div className="text-center">
          <p className="text-3xl md:text-4xl font-bold text-perlogy-dark mb-2">100+</p>
          <p className="text-gray-600 font-medium">Projects Completed</p>
        </div>
      </div>
      
      <div className="bg-white p-6 rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border-t-4 border-perlogy-blue">
        <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-4 text-perlogy-blue mx-auto">
          <Users className="h-7 w-7" />
        </div>
        <div className="text-center">
          <p className="text-3xl md:text-4xl font-bold text-perlogy-dark mb-2">15+</p>
          <p className="text-gray-600 font-medium">Partners</p>
        </div>
      </div>
      
      <div className="bg-white p-6 rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border-t-4 border-perlogy-orange">
        <div className="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center mb-4 text-perlogy-orange mx-auto">
          <Globe className="h-7 w-7" />
        </div>
        <div className="text-center">
          <p className="text-3xl md:text-4xl font-bold text-perlogy-dark mb-2">5+</p>
          <p className="text-gray-600 font-medium">African Countries</p>
        </div>
      </div>
    </div>
    
    <div className="mt-16 flex justify-center">
      <Button className="bg-perlogy-blue hover:bg-blue-700 text-white group transition-all duration-300 px-6 py-6 shadow-lg shadow-blue-200/50 rounded-xl">
        <Link href="/case-studies" className="flex items-center">
          View Our Success Stories 
          <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
        </Link>
      </Button>
    </div>
  </div>
</section>


</main>



<Footer />

</div>
  )}

  export default About;