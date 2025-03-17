'use client'

import { Mail, Phone, MapPin, Globe, Linkedin, Facebook, Twitter, Instagram,  Heart, Send, ArrowUp, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="relative bg-perlogy-dark text-white overflow-hidden">
      {/* Enhanced decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-perlogy-blue/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-perlogy-orange/10 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl"></div>
      <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-perlogy-blue/5 rounded-full blur-2xl"></div>
      
      {/* Scroll to top button */}
      <button 
        onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
        className="absolute right-8 top-0 -translate-y-1/2 bg-perlogy-orange p-3 rounded-full hover:bg-orange-600 transition-all shadow-lg group"
        aria-label="Scroll to top"
      >
        <ArrowUp className="h-5 w-5 group-hover:-translate-y-1 transition-transform" />
      </button>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Newsletter section with enhanced design */}
        <div className="py-12 border-b border-gray-700/50">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-1.5 bg-perlogy-orange/20 text-perlogy-orange rounded-full text-sm font-medium mb-5">
                <MessageCircle className="h-4 w-4 mr-2" />
                <span>Stay Connected</span>
              </div>
              <h3 className="text-2xl font-bold mb-3">Join Our Newsletter</h3>
              <p className="text-gray-300 max-w-lg">
                Subscribe to receive the latest updates on ProAV technologies, industry insights, and exclusive offers tailored for African markets.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="flex-grow relative">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="w-full px-5 py-4 bg-gray-800/50 border border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-perlogy-orange/50 pl-12"
                />
                <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              </div>
              <Button className="bg-perlogy-orange hover:bg-orange-600 text-white sm:flex-shrink-0 py-6 px-6 rounded-xl shadow-lg shadow-perlogy-orange/20 group">
                <span className="flex items-center">
                  Subscribe
                  <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Button>
            </div>
          </div>
        </div>
        
        {/* Main footer content with enhanced styling */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <img
              src="/lovable-uploads/029b990b-bc4f-4db7-96cc-40a8c1ad19a9.png"
              alt="Perlogy Technologies"
              className="h-14 mb-6"
            />
            <p className="text-gray-300 mt-4 max-w-md leading-relaxed">
              Revolutionizing Professional Audio-Visual (ProAV) Distribution Across Africa with cutting-edge solutions, exceptional service, and strategic partnerships that drive digital transformation.
            </p>
            
            <div className="mt-8">
              <p className="text-sm font-medium text-white mb-3">Follow Us</p>
              <div className="flex space-x-4">
                {[
                  { icon: Facebook, label: "Facebook" },
                  { icon: Twitter, label: "Twitter" },
                  { icon: Linkedin, label: "LinkedIn" },
                  { icon: Instagram, label: "Instagram" }
                ].map((social, index) => (
                  <a 
                    key={index}
                    href="#" 
                    aria-label={social.label}
                    className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-800 hover:bg-perlogy-blue transition-all duration-300 group shadow-sm"
                  >
                    <social.icon className="h-4 w-4 group-hover:scale-110 transition-transform" />
                  </a>
                ))}
              </div>
            </div>
          </div>
          
          <div className="md:col-span-2">
            <h3 className="text-lg font-semibold mb-6 flex items-center">
              <span className="w-1.5 h-6 bg-perlogy-orange mr-3 rounded-full"></span>
              Company
            </h3>
            <ul className="space-y-3.5">
              {[
                { name: "Home", path: "/" },
                { name: "About Us", path: "/about" },
                { name: "Services", path: "/services" },
                { name: "Solutions", path: "/solutions" },
                { name: "Partners", path: "/partners" }
              ].map((item, index) => (
                <li key={index}>
                  <Link 
                    href={item.path} 
                    className="text-gray-300 hover:text-perlogy-orange flex items-center group transition-all duration-300"
                  >
                    <div className="w-0 h-0.5 bg-perlogy-orange mr-0 group-hover:w-3 group-hover:mr-2 transition-all duration-300"></div>
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="md:col-span-3">
            <h3 className="text-lg font-semibold mb-6 flex items-center">
              <span className="w-1.5 h-6 bg-perlogy-orange mr-3 rounded-full"></span>
              Solutions
            </h3>
            <ul className="space-y-3.5">
              {[
                { name: "Digital Signage", path: "/solutions#digital-signage" },
                { name: "ProAV Systems", path: "/solutions#proav" },
                { name: "LED Solutions", path: "/solutions#led" },
                { name: "Interactive Systems", path: "/solutions#interactive" },
                { name: "IP Video", path: "/solutions#ip-video" }
              ].map((item, index) => (
                <li key={index}>
                  <Link 
                    href={item.path} 
                    className="text-gray-300 hover:text-perlogy-orange flex items-center group transition-all duration-300"
                  >
                    <div className="w-0 h-0.5 bg-perlogy-orange mr-0 group-hover:w-3 group-hover:mr-2 transition-all duration-300"></div>
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="md:col-span-3">
            <h3 className="text-lg font-semibold mb-6 flex items-center">
              <span className="w-1.5 h-6 bg-perlogy-orange mr-3 rounded-full"></span>
              Contact Us
            </h3>
            <ul className="space-y-5">
              <li className="flex items-start group">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-gray-800 mr-4 text-perlogy-orange group-hover:bg-perlogy-orange/20 transition-colors">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm text-gray-400 mb-1">Phone</p>
                  <a href="tel:+254702651241" className="hover:text-perlogy-orange transition-colors">+254 702 651241</a>
                </div>
              </li>
              
              <li className="flex items-start group">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-gray-800 mr-4 text-perlogy-orange group-hover:bg-perlogy-orange/20 transition-colors">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm text-gray-400 mb-1">Email</p>
                  <a href="mailto:info@perlogy.co.ke" className="hover:text-perlogy-orange transition-colors">info@perlogy.co.ke</a>
                </div>
              </li>
              
              <li className="flex items-start group">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-gray-800 mr-4 text-perlogy-orange group-hover:bg-perlogy-orange/20 transition-colors">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm text-gray-400 mb-1">Address</p>
                  <p>Jebel Ali, Dubai, UAE</p>
                </div>
              </li>
              
              <li className="flex items-start group">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-gray-800 mr-4 text-perlogy-orange group-hover:bg-perlogy-orange/20 transition-colors">
                  <Globe className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm text-gray-400 mb-1">Website</p>
                  <a href="https://www.perlogy.africa" target="_blank" rel="noopener noreferrer" className="hover:text-perlogy-orange transition-colors">www.perlogy.africa</a>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Enhanced copyright section */}
        <div className="border-t border-gray-700/50 py-8 mt-4 flex flex-col md:flex-row items-center justify-between">
          <p className="text-gray-400 text-sm">
            &copy; {currentYear} Perlogy Technologies LLC. All rights reserved.
          </p>
          <div className="flex space-x-8 mt-6 md:mt-0">
            <Link href="/privacy" className="text-sm text-gray-400 hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-sm text-gray-400 hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link href="/sitemap" className="text-sm text-gray-400 hover:text-white transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
        
        <div className="text-center py-6 text-sm text-gray-500">
          Made with <Heart className="inline-block h-3 w-3 text-red-500 mx-1 animate-pulse" /> in Nairobi for Africa
        </div>
      </div>
    </footer>
  );
};

export default Footer;