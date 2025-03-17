import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle, Globe, Building, Award } from "lucide-react";

const Hero = () => {
  // Partner logos array - you can replace these with your actual partner logos
  const partnerLogos = [
    {
      id: 1,
      src: "https://i.postimg.cc/Rh16WCH9/vieww.png",
      alt: "View",
      width: 120,
      height: 60
    },
    {
      id: 2,
      src: "https://i.postimg.cc/QMgRYR1C/tao.png",
      alt: "Partner 2 Logo",
      width: 120,
      height: 60
    },
    {
      id: 3,
      src: "https://i.postimg.cc/vTKj6MFq/dis.png",
      alt: "Partner 3 Logo",
      width: 120,
      height: 60
    },
    {
      id: 4,
      src: "https://i.postimg.cc/c1kPz7gR/sam.png",
      alt: "Partner 4 Logo",
      width: 120,
      height: 60
    },
    {
      id: 5,
      src: "https://i.postimg.cc/rwXZ6f8r/lg.png",
      alt: "Partner 5 Logo",
      width: 120,
      height: 60
    }
  ];

  return (
    <section className="bg-perlogy-light py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main content area */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left column - Text content */}
          <div className="space-y-6">
            {/* Badge */}
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 border border-blue-600/20">
              <span className="text-sm font-medium text-blue-600">Professional Audio-Visual Solutions</span>
            </div>
            
            {/* Heading */}
            <h1 className="text-4xl md:text-5xl font-bold text-perlogy-dark">
              Revolutionizing <span className="text-perlogy-orange">ProAV</span> Distribution Across Africa
            </h1>
            
            {/* Description */}
            <p className="text-lg text-gray-600">
              Perlogy Technologies LLC is a premier distributor based in Dubai, bridging the gap between Professional Audio-Visual solutions and IT infrastructure across the African market.
            </p>
            
            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-4">
              <div className="flex items-center gap-3">
                <div className="bg-perlogy-blue/10 p-2 rounded-lg">
                  <Globe className="h-5 w-5 text-perlogy-blue" />
                </div>
                <p className="text-gray-600 font-medium">Strategic Dubai Location</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-perlogy-orange/10 p-2 rounded-lg">
                  <Building className="h-5 w-5 text-perlogy-orange" />
                </div>
                <p className="text-gray-600 font-medium">Industry Leadership</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-green-100 p-2 rounded-lg">
                  <Award className="h-5 w-5 text-green-600" />
                </div>
                <p className="text-gray-600 font-medium">Quality Commitment</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-blue-100 p-2 rounded-lg">
                  <CheckCircle className="h-5 w-5 text-blue-600" />
                </div>
                <p className="text-gray-600 font-medium">Expert Advisory</p>
              </div>
            </div>
            
            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <button 
                className="bg-perlogy-orange hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-medium flex items-center gap-2 transition-all"
              >
                <Link href="/contact" className="flex items-center gap-2">
                  Get in Touch
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </button>
              <button 
                className="bg-white border border-gray-200 text-perlogy-dark hover:bg-gray-50 px-6 py-3 rounded-lg font-medium transition-all"
              >
                <Link href="/solutions">
                  Explore Solutions
                </Link>
              </button>
            </div>
          </div>
          
          {/* Right column - Image and stats */}
          <div className="relative">
            {/* Main image with border and shadow */}
            <div className="relative rounded-2xl overflow-hidden border border-gray-200 shadow-lg">
              <Image
                src="https://i.postimg.cc/wM1TD6Pn/qw.png" 
                width={600}
                height={500}
                alt="Professional Audio-Visual Solutions"
                className="w-full h-auto object-cover"
                priority
              />
              
              {/* Brand colored overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-perlogy-blue/20 to-perlogy-orange/20"></div>
              
              {/* Floating stats card */}
              <div className="absolute -bottom-6 -right-6 md:-bottom-8 md:-right-8 bg-white rounded-lg shadow-xl border border-gray-200 p-4 md:p-6 w-64">
                <h3 className="font-semibold text-perlogy-dark mb-3">Our Impact</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-perlogy-orange/10 flex items-center justify-center text-perlogy-orange font-bold text-sm">
                      01
                    </div>
                    <p className="text-gray-600 text-sm">Bridging ProAV and IT gaps</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-perlogy-blue/10 flex items-center justify-center text-perlogy-blue font-bold text-sm">
                      02
                    </div>
                    <p className="text-gray-600 text-sm">Supporting informed decisions</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600 font-bold text-sm">
                      03
                    </div>
                    <p className="text-gray-600 text-sm">Driving African market innovation</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -z-10 top-1/4 -right-12 w-24 h-24 rounded-full bg-perlogy-orange/10"></div>
            <div className="absolute -z-10 -bottom-10 -left-10 w-32 h-32 rounded-full bg-perlogy-blue/10"></div>
          </div>
        </div>
        
        {/* Enhanced Trust banner / Partners Section */}
        <div className="mt-20 pt-8 pb-10 relative overflow-hidden rounded-2xl">
          {/* Background with subtle gradient and pattern */}
          <div className="absolute inset-0 bg-gradient-to-r from-gray-50 to-gray-100 opacity-80"></div>
          <div className="absolute inset-0 bg-[url('/subtle-pattern.png')] opacity-5"></div>
          
          {/* Content container */}
          <div className="relative z-10">
            {/* Section header with improved styling */}
            <div className="text-center mb-8">
              <h3 className="text-xl font-semibold text-perlogy-dark">
                Trusted by Leading Businesses Across Africa
              </h3>
              <div className="w-24 h-1 bg-perlogy-orange/60 mx-auto mt-3 rounded-full"></div>
              <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
                Our partnerships with industry leaders enable us to deliver cutting-edge ProAV solutions across the African continent.
              </p>
            </div>
            
            {/* Dynamic partner logos carousel/grid */}
            <div className="px-4 sm:px-8">
              <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 lg:gap-16">
                {partnerLogos.map((logo) => (
                  <div 
                    key={logo.id} 
                    className="group relative h-16 flex items-center justify-center transition-all duration-300 filter grayscale hover:grayscale-0"
                  >
                    {/* Fallback for development */}
                    {logo.src.startsWith('/images') ? (
                      <div className="bg-white/70 shadow-sm border border-gray-100 rounded-lg px-6 py-3 h-full flex items-center justify-center">
                        <span className="text-gray-500 font-medium">{logo.alt}</span>
                      </div>
                    ) : (
                      <Image
                        src={logo.src} 
                        alt={logo.alt}
                        width={logo.width}
                        height={logo.height}
                        className="object-contain max-h-full transition-all duration-300 transform group-hover:scale-105"
                      />
                    )}
                    
                    {/* Subtle highlight effect on hover */}
                    <div className="absolute inset-0 rounded-lg ring-1 ring-gray-200/50 group-hover:ring-perlogy-orange/20 
                      group-hover:shadow-lg group-hover:shadow-perlogy-orange/5 opacity-0 group-hover:opacity-100 
                      transition-all duration-300"></div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Become a partner CTA */}
            <div className="text-center mt-10">
              <Link 
                href="/partners/join" 
                className="inline-flex items-center text-perlogy-blue hover:text-perlogy-orange text-sm font-medium transition-colors duration-200"
              >
                Become a Partner
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;