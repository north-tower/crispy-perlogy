
import { Button } from "@/components/ui/button";

import { ChevronRight } from "lucide-react";
import SolutionCard from "./SolutionsCard";
import Link from "next/link";

const SolutionsSection = () => {
  const solutions = [
    {
      image: "https://i.postimg.cc/RCf2DrcH/digital.png",
      title: "Digital Signage Systems",
      description: "Engage your audience with high-impact digital signage solutions. We analyze your goals, recommend optimal displays, and handle all technical implementation details.",
      link: "/solutions#digital-signage"
    },
    {
      image: "https://i.postimg.cc/XY2PCn0T/audio-Visu.png",
      title: "Professional Audio Visual Systems",
      description: "Custom-designed ProAV solutions that perfectly align with your unique requirements, delivering exceptional performance and user experience.",
      link: "/solutions#proav"
    },
    {
      image: "https://i.postimg.cc/7LFm36tQ/broadcast.png",
      title: "Broadcast Systems",
      description: "Stunning LED displays with unmatched visual appeal and exceptional durability, designed to elevate your brand presence and communication.",
      link: "/solutions#led"
    },
    {
      image: "https://i.postimg.cc/JhkQz873/menu.png",
      title: "Interactive Digital Boards",
      description: "Enhance collaboration with intuitive touch-enabled boards that transform how teams share ideas and make decisions together.",
      link: "/solutions#interactive"
    },
    {
      image: "https://i.postimg.cc/PJtby8WK/walls.png",
      title: "Video Walls",
      description: "Create immersive visual experiences with our video wall solutions using advanced LCD panels, projection systems, or direct LED technology.",
      link: "/solutions#video-walls"
    },
    {
      image: "https://i.postimg.cc/sx6WJHDD/flight.png",
      title: "Flight Information Display Systems",
      description: "FIDS solutions that deliver critical information efficiently to all airport stakeholders, enhancing passenger experience and operational excellence.",
      link: "/solutions#fids"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-50 rounded-full opacity-70 blur-3xl"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-orange-50 rounded-full opacity-70 blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-1 bg-blue-100 text-perlogy-blue rounded-full text-sm font-medium mb-6">
            <span>Our Solutions</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-perlogy-dark">
            Innovative <span className="text-perlogy-orange">ProAV</span> Solutions for Africa
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Discover our comprehensive range of audio-visual solutions designed to transform how your business communicates, collaborates, and connects.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <SolutionCard
              key={index}
              image={solution.image}
              title={solution.title}
              description={solution.description}
              link={solution.link}
            />
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <Button className="bg-perlogy-blue hover:bg-blue-600 text-white px-8 py-6 rounded-lg shadow-lg shadow-blue-200/50 transition-all duration-300 group">
            <Link href="/solutions" className="flex items-center">
              Explore All Solutions
              <ChevronRight size={20} className="ml-2 group-hover:ml-3 transition-all" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;