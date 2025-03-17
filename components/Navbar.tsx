'use client';

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const navLinks = [
    { title: "Home", path: "/" },
    { 
      title: "About Us", 
      path: "/about",
      dropdown: [
        { title: "Our Story", path: "/about" },
        { title: "Our Team", path: "/about" },
        { title: "Vision & Mission", path: "/about" }
      ]
    },
    { 
      title: "Services", 
      path: "/services",
      dropdown: [
        { title: "Consultation", path: "/services" },
        { title: "Distribution", path: "/services" },
        { title: "Implementation", path: "/services" }
      ]
    },
    { title: "Solutions", path: "/solutions" },
    { title: "Partners", path: "/partners" },
    { title: "Contact", path: "/contact" }
  ];

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md py-2" : "bg-white/95 py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center">
              <Image
                src="/lovable-uploads/029b990b-bc4f-4db7-96cc-40a8c1ad19a9.png"
                alt="Perlogy Technologies"
                width={140}
                height={48}
                className="h-12 w-auto"
                priority
              />
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-4">
            {navLinks.map((link, index) => (
              <div key={index} className="relative group">
                {link.dropdown ? (
                  <div className="relative">
                    <button
                      onClick={() => toggleDropdown(link.title)}
                      className="text-gray-600 hover:text-perlogy-blue px-3 py-2 rounded-md text-sm font-medium flex items-center gap-1 transition-all group-hover:text-perlogy-blue"
                    >
                      {link.title}
                      <ChevronDown className="h-4 w-4 transition-transform duration-200 group-hover:text-perlogy-blue" />
                    </button>
                    <div className={`absolute left-0 mt-1 w-48 bg-white rounded-lg shadow-lg border border-gray-100 overflow-hidden transition-all origin-top-left duration-200 ${
                      activeDropdown === link.title 
                        ? "opacity-100 scale-100" 
                        : "opacity-0 scale-95 pointer-events-none"
                    }`}
                    >
                      {link.dropdown.map((item, i) => (
                        <Link
                          href={item.path}
                          key={i}
                          className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-perlogy-blue transition-colors"
                          onClick={() => setActiveDropdown(null)}
                        >
                          {item.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    href={link.path}
                    className="text-gray-600 hover:text-perlogy-blue px-3 py-2 rounded-md text-sm font-medium transition-all"
                  >
                    {link.title}
                  </Link>
                )}
              </div>
            ))}
            <Button className="bg-perlogy-orange hover:bg-orange-600 text-white ml-2 transition-all duration-300 shadow-md hover:shadow-lg">
              <Link href="/contact" className="flex items-center">
                Get a Quote
              </Link>
            </Button>
          </div>
          
          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              onClick={toggleNavbar}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-perlogy-blue focus:outline-none transition-colors"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-inner border-t border-gray-100">
          {navLinks.map((link, index) => (
            <div key={index}>
              {link.dropdown ? (
                <div>
                  <button
                    onClick={() => toggleDropdown(link.title)}
                    className="w-full flex justify-between items-center px-3 py-2 text-base font-medium text-gray-600 hover:text-perlogy-blue hover:bg-gray-50 rounded-md"
                  >
                    {link.title}
                    <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${
                      activeDropdown === link.title ? "rotate-180" : ""
                    }`} />
                  </button>
                  
                  <div className={`space-y-1 pl-4 transition-all duration-200 ${
                    activeDropdown === link.title ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
                  }`}>
                    {link.dropdown.map((item, i) => (
                      <Link
                        href={item.path}
                        key={i}
                        className="block px-3 py-2 text-sm text-gray-500 hover:text-perlogy-blue rounded-md"
                        onClick={() => {
                          setActiveDropdown(null);
                          setIsOpen(false);
                        }}
                      >
                        {item.title}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  href={link.path}
                  className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-perlogy-blue hover:bg-gray-50 rounded-md"
                  onClick={() => setIsOpen(false)}
                >
                  {link.title}
                </Link>
              )}
            </div>
          ))}
          <div className="pt-2">
            <Button className="w-full bg-perlogy-orange hover:bg-orange-600 text-white shadow-md">
              <Link 
                href="/contact" 
                className="w-full flex justify-center items-center"
                onClick={() => setIsOpen(false)}
              >
                Get a Quote
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;