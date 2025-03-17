import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Check, Search, Cog, Monitor, Users, Headphones, Award, Shield, TrendingUp } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Solutions = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar with subtle shadow */}
      <Navbar  />
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-perlogy-dark to-perlogy-blue text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center px-4 py-1 bg-blue-100 text-perlogy-blue rounded-full text-sm font-medium mb-6">
              <span>Tailored Solutions</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Solutions</h1>
            <p className="text-xl">
              Tailored professional AV solutions to enhance communication and collaboration in your organization across Africa.
            </p>
          </div>
        </div>
      </section>

      {/* Solutions Tabs */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-perlogy-dark">
              Versatile <span className="text-perlogy-orange">ProAV</span> Solutions
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              Explore our range of specialized audio-visual solutions designed for various environments and use cases.
            </p>
          </div>
          
          <Tabs defaultValue="conference" className="w-full">
            <div className="flex justify-center mb-10">
              <TabsList className="bg-gray-100 p-1 h-auto rounded-full">
                <TabsTrigger value="conference" className="py-3 px-6 rounded-full data-[state=active]:bg-perlogy-blue data-[state=active]:text-white">Conference Rooms</TabsTrigger>
                <TabsTrigger value="auditorium" className="py-3 px-6 rounded-full data-[state=active]:bg-perlogy-blue data-[state=active]:text-white">Auditoriums</TabsTrigger>
                <TabsTrigger value="digital" className="py-3 px-6 rounded-full data-[state=active]:bg-perlogy-blue data-[state=active]:text-white">Digital Signage</TabsTrigger>
                <TabsTrigger value="broadcast" className="py-3 px-6 rounded-full data-[state=active]:bg-perlogy-blue data-[state=active]:text-white">Broadcast Studios</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="conference" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="inline-flex items-center px-4 py-1 bg-blue-100 text-perlogy-blue rounded-full text-sm font-medium mb-6">
                    <span>Collaborative Spaces</span>
                  </div>
                  <h2 className="text-3xl font-bold mb-4 text-perlogy-dark">Conference Room Solutions</h2>
                  <p className="text-gray-600 mb-6">
                    Transform your meeting spaces with state-of-the-art audio-visual technology designed to enhance collaboration and productivity.
                  </p>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center text-perlogy-blue mr-3 flex-shrink-0">
                        <Check className="h-4 w-4" />
                      </div>
                      <span className="text-gray-600">High-definition video conferencing systems</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center text-perlogy-blue mr-3 flex-shrink-0">
                        <Check className="h-4 w-4" />
                      </div>
                      <span className="text-gray-600">Interactive displays and smart whiteboards</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center text-perlogy-blue mr-3 flex-shrink-0">
                        <Check className="h-4 w-4" />
                      </div>
                      <span className="text-gray-600">Room scheduling and booking systems</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center text-perlogy-blue mr-3 flex-shrink-0">
                        <Check className="h-4 w-4" />
                      </div>
                      <span className="text-gray-600">Integrated control systems for one-touch operation</span>
                    </li>
                  </ul>
                  <Button className="bg-perlogy-blue hover:bg-blue-600 text-white mt-8 px-8 py-6 rounded-lg transition-all duration-300 group">
                    <Link href="/contact" className="flex items-center">
                      Request a Consultation
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2 group-hover:translate-x-1 transition-transform">
                        <path d="M5 12h14"></path>
                        <path d="m12 5 7 7-7 7"></path>
                      </svg>
                    </Link>
                  </Button>
                </div>
                <div className="relative">
                  <img 
                    src="/images/conference-room.jpg" 
                    alt="Conference Room Solution" 
                    className="rounded-lg shadow-xl w-full object-cover h-96"
                  />
                  <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-perlogy-orange rounded-lg -z-10"></div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="auditorium" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="inline-flex items-center px-4 py-1 bg-blue-100 text-perlogy-blue rounded-full text-sm font-medium mb-6">
                    <span>Large Venues</span>
                  </div>
                  <h2 className="text-3xl font-bold mb-4 text-perlogy-dark">Auditorium & Large Venue Solutions</h2>
                  <p className="text-gray-600 mb-6">
                    Create immersive experiences for your audience with our comprehensive large venue audio-visual solutions.
                  </p>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center text-perlogy-blue mr-3 flex-shrink-0">
                        <Check className="h-4 w-4" />
                      </div>
                      <span className="text-gray-600">High-performance sound systems with precise coverage</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center text-perlogy-blue mr-3 flex-shrink-0">
                        <Check className="h-4 w-4" />
                      </div>
                      <span className="text-gray-600">Large-format projection and LED video walls</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center text-perlogy-blue mr-3 flex-shrink-0">
                        <Check className="h-4 w-4" />
                      </div>
                      <span className="text-gray-600">Digital signal processing and acoustic design</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center text-perlogy-blue mr-3 flex-shrink-0">
                        <Check className="h-4 w-4" />
                      </div>
                      <span className="text-gray-600">Stage lighting and production equipment</span>
                    </li>
                  </ul>
                  <Button className="bg-perlogy-blue hover:bg-blue-600 text-white mt-8 px-8 py-6 rounded-lg transition-all duration-300 group">
                    <Link href="/contact" className="flex items-center">
                      Request a Consultation
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2 group-hover:translate-x-1 transition-transform">
                        <path d="M5 12h14"></path>
                        <path d="m12 5 7 7-7 7"></path>
                      </svg>
                    </Link>
                  </Button>
                </div>
                <div className="relative">
                  <img 
                    src="/images/auditorium.jpg" 
                    alt="Auditorium Solution" 
                    className="rounded-lg shadow-xl w-full object-cover h-96"
                  />
                  <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-perlogy-orange rounded-lg -z-10"></div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="digital" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="inline-flex items-center px-4 py-1 bg-blue-100 text-perlogy-blue rounded-full text-sm font-medium mb-6">
                    <span>Dynamic Content</span>
                  </div>
                  <h2 className="text-3xl font-bold mb-4 text-perlogy-dark">Digital Signage Solutions</h2>
                  <p className="text-gray-600 mb-6">
                    Engage your audience with dynamic digital signage solutions that deliver targeted messages with impact.
                  </p>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center text-perlogy-blue mr-3 flex-shrink-0">
                        <Check className="h-4 w-4" />
                      </div>
                      <span className="text-gray-600">Content management systems for easy updates</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center text-perlogy-blue mr-3 flex-shrink-0">
                        <Check className="h-4 w-4" />
                      </div>
                      <span className="text-gray-600">Interactive touchscreen displays</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center text-perlogy-blue mr-3 flex-shrink-0">
                        <Check className="h-4 w-4" />
                      </div>
                      <span className="text-gray-600">Video walls and multi-screen configurations</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center text-perlogy-blue mr-3 flex-shrink-0">
                        <Check className="h-4 w-4" />
                      </div>
                      <span className="text-gray-600">Analytics and audience measurement tools</span>
                    </li>
                  </ul>
                  <Button className="bg-perlogy-blue hover:bg-blue-600 text-white mt-8 px-8 py-6 rounded-lg transition-all duration-300 group">
                    <Link href="/contact" className="flex items-center">
                      Request a Consultation
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2 group-hover:translate-x-1 transition-transform">
                        <path d="M5 12h14"></path>
                        <path d="m12 5 7 7-7 7"></path>
                      </svg>
                    </Link>
                  </Button>
                </div>
                <div className="relative">
                  <img 
                    src="/images/digital-signage.jpg" 
                    alt="Digital Signage Solution" 
                    className="rounded-lg shadow-xl w-full object-cover h-96"
                  />
                  <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-perlogy-orange rounded-lg -z-10"></div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="broadcast" className="mt-6">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
    <div>
      <div className="inline-flex items-center px-4 py-1 bg-blue-100 text-perlogy-blue rounded-full text-sm font-medium mb-6">
        <span>Production Studios</span>
      </div>
      <h2 className="text-3xl font-bold mb-4 text-perlogy-dark">Broadcast Studio Solutions</h2>
      <p className="text-gray-600 mb-6">
        Create professional broadcast environments with our specialized audio-visual studio solutions.
      </p>
      <ul className="space-y-4">
        <li className="flex items-start">
          <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center text-perlogy-blue mr-3 flex-shrink-0">
            <Check className="h-4 w-4" />
          </div>
          <span className="text-gray-600">Broadcast-quality cameras and production equipment</span>
        </li>
        <li className="flex items-start">
          <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center text-perlogy-blue mr-3 flex-shrink-0">
            <Check className="h-4 w-4" />
          </div>
          <span className="text-gray-600">Studio lighting and audio systems</span>
        </li>
        <li className="flex items-start">
          <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center text-perlogy-blue mr-3 flex-shrink-0">
            <Check className="h-4 w-4" />
          </div>
          <span className="text-gray-600">Green screen and virtual set technology</span>
        </li>
        <li className="flex items-start">
          <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center text-perlogy-blue mr-3 flex-shrink-0">
            <Check className="h-4 w-4" />
          </div>
          <span className="text-gray-600">Live streaming and recording capabilities</span>
        </li>
      </ul>
      <Button className="bg-perlogy-blue hover:bg-blue-600 text-white mt-8 px-8 py-6 rounded-lg transition-all duration-300 group">
        <Link href="/contact" className="flex items-center">
          Request a Consultation
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2 group-hover:translate-x-1 transition-transform">
            <path d="M5 12h14"></path>
            <path d="m12 5 7 7-7 7"></path>
          </svg>
        </Link>
      </Button>
    </div>
    <div className="relative">
      <img 
        src="/images/broadcast-studio.jpg" 
        alt="Broadcast Studio Solution" 
        className="rounded-lg shadow-xl w-full object-cover h-96"
      />
      <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-perlogy-orange rounded-lg -z-10"></div>
    </div>
  </div>
</TabsContent>
           </Tabs>
           </div>
           </section>
           <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-16">
      <div className="inline-flex items-center px-4 py-1 bg-blue-100 text-perlogy-blue rounded-full text-sm font-medium mb-6">
        <span>Our Process</span>
      </div>
      <h2 className="text-4xl font-bold mb-4 text-perlogy-dark">Our Approach to Solutions</h2>
      <p className="text-gray-600 max-w-3xl mx-auto text-lg">
        We follow a comprehensive approach to ensure every solution we deliver meets your unique requirements and exceeds your expectations.
      </p>
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
      <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border-t-4 border-perlogy-blue group">
        <div className="bg-perlogy-blue/10 w-20 h-20 rounded-full flex items-center justify-center text-perlogy-blue mb-6 group-hover:bg-perlogy-blue group-hover:text-white transition-all duration-300">
          <Search className="h-10 w-10" />
        </div>
        <h3 className="text-2xl font-bold mb-3">1. Discover</h3>
        <p className="text-gray-600">
          We begin by understanding your requirements, objectives, and challenges through in-depth consultation and site surveys.
        </p>
        <div className="mt-6 border-t border-gray-100 pt-4 opacity-0 group-hover:opacity-100 transition-opacity">
          <span className="text-sm text-perlogy-blue font-medium">Includes: Consultation, Requirements Gathering, Site Analysis</span>
        </div>
      </div>
      
      <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border-t-4 border-perlogy-orange group">
        <div className="bg-perlogy-orange/10 w-20 h-20 rounded-full flex items-center justify-center text-perlogy-orange mb-6 group-hover:bg-perlogy-orange group-hover:text-white transition-all duration-300">
          <Cog className="h-10 w-10" />
        </div>
        <h3 className="text-2xl font-bold mb-3">2. Design</h3>
        <p className="text-gray-600">
          Our team creates custom solution designs that address your specific needs while optimizing performance and value.
        </p>
        <div className="mt-6 border-t border-gray-100 pt-4 opacity-0 group-hover:opacity-100 transition-opacity">
          <span className="text-sm text-perlogy-orange font-medium">Includes: Solution Architecture, Design Planning, Budget Alignment</span>
        </div>
      </div>
      
      <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border-t-4 border-perlogy-blue group">
        <div className="bg-perlogy-blue/10 w-20 h-20 rounded-full flex items-center justify-center text-perlogy-blue mb-6 group-hover:bg-perlogy-blue group-hover:text-white transition-all duration-300">
          <Monitor className="h-10 w-10" />
        </div>
        <h3 className="text-2xl font-bold mb-3">3. Implement</h3>
        <p className="text-gray-600">
          We handle every detail of the implementation process, from procurement and installation to configuration and testing.
        </p>
        <div className="mt-6 border-t border-gray-100 pt-4 opacity-0 group-hover:opacity-100 transition-opacity">
          <span className="text-sm text-perlogy-blue font-medium">Includes: Procurement, Installation, Configuration, Testing</span>
        </div>
      </div>
    </div>
    
    <div className="flex justify-center mt-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full md:w-2/3">
        <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border-t-4 border-perlogy-orange group">
          <div className="bg-perlogy-orange/10 w-20 h-20 rounded-full flex items-center justify-center text-perlogy-orange mb-6 group-hover:bg-perlogy-orange group-hover:text-white transition-all duration-300">
            <Users className="h-10 w-10" />
          </div>
          <h3 className="text-2xl font-bold mb-3">4. Train</h3>
          <p className="text-gray-600">
            We provide comprehensive training to ensure your team can fully utilize all features of your new systems with confidence.
          </p>
          <div className="mt-6 border-t border-gray-100 pt-4 opacity-0 group-hover:opacity-100 transition-opacity">
            <span className="text-sm text-perlogy-orange font-medium">Includes: User Training, Documentation, Knowledge Transfer</span>
          </div>
        </div>
        
        <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border-t-4 border-perlogy-blue group">
          <div className="bg-perlogy-blue/10 w-20 h-20 rounded-full flex items-center justify-center text-perlogy-blue mb-6 group-hover:bg-perlogy-blue group-hover:text-white transition-all duration-300">
            <Headphones className="h-10 w-10" />
          </div>
          <h3 className="text-2xl font-bold mb-3">5. Support</h3>
          <p className="text-gray-600">
            Our ongoing support ensures your solutions continue to perform optimally through maintenance, updates, and responsive assistance.
          </p>
          <div className="mt-6 border-t border-gray-100 pt-4 opacity-0 group-hover:opacity-100 transition-opacity">
            <span className="text-sm text-perlogy-blue font-medium">Includes: Ongoing Maintenance, Technical Support, System Updates</span>
          </div>
        </div>
      </div>
    </div>
    
    <div className="flex justify-center mt-16">
      <Button className="bg-perlogy-blue hover:bg-blue-600 text-white px-8 py-4 rounded-lg transition-all duration-300 group">
        <Link href="/our-process" className="flex items-center">
          Learn More About Our Process
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2 group-hover:translate-x-1 transition-transform">
            <path d="M5 12h14"></path>
            <path d="m12 5 7 7-7 7"></path>
          </svg>
        </Link>
      </Button>
    </div>
  </div>
</section>

{/* Technologies & Partners */}
<section className="py-24 bg-gray-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-16">
      <div className="inline-flex items-center px-4 py-1 bg-blue-100 text-perlogy-blue rounded-full text-sm font-medium mb-6">
        <span>Our Ecosystem</span>
      </div>
      <h2 className="text-4xl font-bold mb-4 text-perlogy-dark">Technologies & Partners</h2>
      <p className="text-gray-600 max-w-3xl mx-auto text-lg">
        We work with industry-leading manufacturers and technologies to deliver exceptional solutions for our clients.
      </p>
    </div>
    
    <div className="bg-white rounded-2xl shadow-xl p-10 mb-16">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8">
        <div className="flex items-center justify-center p-6 grayscale hover:grayscale-0 transition-all duration-300 transform hover:scale-110">
          <img src="/lovable-uploads/d844374b-cc96-437f-b89e-a1207c0cd963.png" alt="Partner Logo" className="max-h-16" />
        </div>
        <div className="flex items-center justify-center p-6 grayscale hover:grayscale-0 transition-all duration-300 transform hover:scale-110">
          <img src="/lovable-uploads/69516d63-ff18-4ca2-9acc-20de6b95267c.png" alt="Partner Logo" className="max-h-16" />
        </div>
        <div className="flex items-center justify-center p-6 grayscale hover:grayscale-0 transition-all duration-300 transform hover:scale-110">
          <img src="/lovable-uploads/eb774e57-7224-40a6-b6d2-544b50c5f151.png" alt="Partner Logo" className="max-h-16" />
        </div>
        <div className="flex items-center justify-center p-6 grayscale hover:grayscale-0 transition-all duration-300 transform hover:scale-110">
          <img src="/lovable-uploads/6705f12a-ce26-4d01-9df2-37fe803280df.png" alt="Partner Logo" className="max-h-16" />
        </div>
        <div className="flex items-center justify-center p-6 grayscale hover:grayscale-0 transition-all duration-300 transform hover:scale-110">
          <img src="/lovable-uploads/2f4aa10e-d254-45d6-aeea-82c28fc17db4.png" alt="Partner Logo" className="max-h-16" />
        </div>
        <div className="flex items-center justify-center p-6 grayscale hover:grayscale-0 transition-all duration-300 transform hover:scale-110">
          <img src="/lovable-uploads/80da8ff1-0156-4e09-8022-db5e3504242d.png" alt="Partner Logo" className="max-h-16" />
        </div>
      </div>
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-perlogy-blue">
        <h3 className="text-xl font-bold mb-4 flex items-center">
          <Award className="h-6 w-6 text-perlogy-blue mr-2" />
          Certified Partnerships
        </h3>
        <p className="text-gray-600">
          Our team holds certifications from all our partner manufacturers, ensuring expert implementation and support.
        </p>
      </div>
      
      <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-perlogy-orange">
        <h3 className="text-xl font-bold mb-4 flex items-center">
          <Shield className="h-6 w-6 text-perlogy-orange mr-2" />
          Quality Assurance
        </h3>
        <p className="text-gray-600">
          We select only premium technology partners that meet our rigorous standards for reliability and performance.
        </p>
      </div>
      
      <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-perlogy-blue">
        <h3 className="text-xl font-bold mb-4 flex items-center">
          <TrendingUp className="h-6 w-6 text-perlogy-blue mr-2" />
          Innovation Focus
        </h3>
        <p className="text-gray-600">
          Our partnerships give you access to cutting-edge technologies that keep your systems ahead of industry trends.
        </p>
      </div>
    </div>
    
    <div className="text-center mt-12">
      <Button className="bg-perlogy-blue hover:bg-blue-600 text-white px-8 py-4 rounded-lg transition-all duration-300 group">
        <Link href="/partners" className="flex items-center">
          View All Partners
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2 group-hover:translate-x-1 transition-transform">
            <path d="M5 12h14"></path>
            <path d="m12 5 7 7-7 7"></path>
          </svg>
        </Link>
      </Button>
    </div>
  </div>
</section>

{/* Featured Case Studies */}
<section className="py-24 bg-gradient-to-b from-gray-50 to-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-16">
      <div className="inline-flex items-center px-4 py-1 bg-blue-100 text-perlogy-blue rounded-full text-sm font-medium mb-6">
        <span>Success Stories</span>
      </div>
      <h2 className="text-4xl font-bold mb-4 text-perlogy-dark">Featured Solutions</h2>
      <p className="text-gray-600 max-w-3xl mx-auto text-lg">
        Explore how our solutions have helped organizations enhance their communication and collaboration capabilities.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
      <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group">
        <div className="relative h-56 overflow-hidden">
          <img 
            src="/lovable-uploads/5178eff1-0d97-4677-894c-396da8789b15.png" 
            alt="Corporate Headquarters Solution" 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute top-4 left-4 bg-perlogy-blue text-white text-xs font-semibold px-3 py-1 rounded-full">
            Corporate
          </div>
        </div>
        <div className="p-8">
          <h3 className="text-2xl font-bold mb-3">Corporate Headquarters</h3>
          <p className="text-gray-600 mb-6">
            Comprehensive AV solution for a multi-floor corporate headquarters, including conference rooms, huddle spaces, and a flagship boardroom.
          </p>
          <div className="flex flex-wrap gap-2 mb-6">
            <span className="bg-blue-50 text-perlogy-blue text-xs px-3 py-1 rounded-full">Video Conferencing</span>
            <span className="bg-blue-50 text-perlogy-blue text-xs px-3 py-1 rounded-full">Control Systems</span>
            <span className="bg-blue-50 text-perlogy-blue text-xs px-3 py-1 rounded-full">Boardroom</span>
          </div>
          <Button className="w-full bg-white border border-perlogy-blue text-perlogy-blue hover:bg-perlogy-blue hover:text-white transition-all duration-300 py-3 rounded-lg group">
            <Link href="/solutions/corporate-headquarters" className="flex items-center justify-center">
              View Solution
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2 group-hover:translate-x-1 transition-transform">
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </Link>
          </Button>
        </div>
      </div>
      
      <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group">
        <div className="relative h-56 overflow-hidden">
          <img 
            src="/lovable-uploads/b9d754c0-3419-4896-900a-a2ae5e52662d.png" 
            alt="University Lecture Hall Solution" 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute top-4 left-4 bg-perlogy-orange text-white text-xs font-semibold px-3 py-1 rounded-full">
            Education
          </div>
        </div>
        <div className="p-8">
          <h3 className="text-2xl font-bold mb-3">University Lecture Hall</h3>
          <p className="text-gray-600 mb-6">
            State-of-the-art audio-visual system for a 300-seat lecture hall, featuring advanced presentation capabilities and lecture capture.
          </p>
          <div className="flex flex-wrap gap-2 mb-6">
            <span className="bg-orange-50 text-perlogy-orange text-xs px-3 py-1 rounded-full">Lecture Capture</span>
            <span className="bg-orange-50 text-perlogy-orange text-xs px-3 py-1 rounded-full">Audio Systems</span>
            <span className="bg-orange-50 text-perlogy-orange text-xs px-3 py-1 rounded-full">Projection</span>
          </div>
          <Button className="w-full bg-white border border-perlogy-orange text-perlogy-orange hover:bg-perlogy-orange hover:text-white transition-all duration-300 py-3 rounded-lg group">
            <Link href="/solutions/university-lecture-hall" className="flex items-center justify-center">
              View Solution
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2 group-hover:translate-x-1 transition-transform">
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </Link>
          </Button>
        </div>
      </div>
      
      <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group">
        <div className="relative h-56 overflow-hidden">
          <img 
            src="/lovable-uploads/4bd63bea-ac06-4af7-8038-4c1a34c8d9f6.png" 
            alt="Healthcare Facility Solution" 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute top-4 left-4 bg-perlogy-blue text-white text-xs font-semibold px-3 py-1 rounded-full">
            Healthcare
          </div>
        </div>
        <div className="p-8">
          <h3 className="text-2xl font-bold mb-3">Healthcare Facility</h3>
          <p className="text-gray-600 mb-6">
            Digital signage and IPTV solution for a healthcare network, delivering targeted patient information and staff communications.
          </p>
          <div className="flex flex-wrap gap-2 mb-6">
            <span className="bg-blue-50 text-perlogy-blue text-xs px-3 py-1 rounded-full">Digital Signage</span>
            <span className="bg-blue-50 text-perlogy-blue text-xs px-3 py-1 rounded-full">IPTV</span>
            <span className="bg-blue-50 text-perlogy-blue text-xs px-3 py-1 rounded-full">Content Management</span>
          </div>
          <Button className="w-full bg-white border border-perlogy-blue text-perlogy-blue hover:bg-perlogy-blue hover:text-white transition-all duration-300 py-3 rounded-lg group">
            <Link href="/solutions/healthcare-facility" className="flex items-center justify-center">
              View Solution
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2 group-hover:translate-x-1 transition-transform">
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </Link>
          </Button>
        </div>
      </div>
    </div>
    
    <div className="flex justify-center mt-16">
      <Button className="bg-perlogy-blue hover:bg-blue-600 text-white px-8 py-4 rounded-lg transition-all duration-300 group">
        <Link href="/solutions" className="flex items-center">
          View All Solutions
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2 group-hover:translate-x-1 transition-transform">
            <path d="M5 12h14"></path>
            <path d="m12 5 7 7-7 7"></path>
          </svg>
        </Link>
      </Button>
    </div>
  </div>
</section>

{/* CTA Section */}
<section className="py-20 bg-gradient-to-r from-perlogy-dark to-gray-900 text-white relative overflow-hidden">
  {/* Background Pattern */}
  <div className="absolute inset-0 opacity-10">
    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
      <defs>
        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid)" />
    </svg>
  </div>

  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
      <div className="text-left">
        <div className="inline-flex items-center px-4 py-1 bg-perlogy-orange bg-opacity-20 text-perlogy-orange rounded-full text-sm font-medium mb-6">
          <span>Get Started Today</span>
        </div>
        <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Audio-Visual Experience?</h2>
        <p className="text-xl mb-8 text-gray-300">
          Contact us today to discuss your specific needs and discover how Perlogy Technologies can help you achieve your communication goals.
        </p>
        <div className="flex flex-wrap gap-6">
          <Button size="lg" className="bg-perlogy-orange hover:bg-orange-600 text-white px-8 py-4 rounded-lg transition-all duration-300 group">
            <Link href="/contact" className="flex items-center">
              Contact Us Now
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2 group-hover:translate-x-1 transition-transform">
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </Link>
          </Button>
          <Button size="lg" className="bg-transparent border border-white text-white hover:bg-white hover:text-perlogy-dark px-8 py-4 rounded-lg transition-all duration-300">
            <Link href="/request-demo" className="flex items-center">
              Request a Demo
            </Link>
          </Button>
        </div>
      </div>
      
    </div>
    </div>
    </section>
    <Footer />
           </div>
  )}


  export default Solutions;