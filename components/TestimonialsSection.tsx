import TestimonialCard from "@/components/TestimonialCard";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "Working with Perlogy has transformed our office audio experience. Their attention to detail and expert installation means our teams can hear with clarity and feel the impact of every sound.",
      name: "Ahmed Al-Farsi",
      role: "Facilities Manager",
      company: "Dubai Business Center"
    },
    {
      quote: "Perlogy Technologies has been instrumental in setting up our conference rooms with state-of-the-art AV systems. Their team's expertise and professionalism is unmatched in the industry.",
      name: "Grace Mwangi",
      role: "IT Director",
      company: "Nairobi Heights Hotel"
    },
    {
      quote: "Their digital signage solutions have transformed our retail spaces. The quality of the displays and the ease of content management has exceeded our expectations and improved our customer engagement.",
      name: "Omar Ndiaye",
      role: "Marketing Director",
      company: "African Retail Group"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-blue-50/30 to-transparent"></div>
      <div className="absolute -left-24 top-1/4 w-48 h-48 rounded-full bg-orange-50 opacity-70 blur-xl"></div>
      <div className="absolute -right-24 bottom-1/4 w-48 h-48 rounded-full bg-blue-50 opacity-70 blur-xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-1 bg-orange-100 text-perlogy-orange rounded-full text-sm font-medium mb-6">
            <span>Testimonials</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-perlogy-dark">
            What Our <span className="text-perlogy-orange">Clients</span> Say
          </h2>
          
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Hear from our satisfied clients across Africa about their experience partnering with Perlogy Technologies for their ProAV needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              quote={testimonial.quote}
              name={testimonial.name}
              role={testimonial.role}
              company={testimonial.company}
            />
          ))}
        </div>
        
        {/* Navigation buttons */}
        <div className="flex justify-center mt-12 space-x-4">
          <Button variant="outline" className="rounded-full w-12 h-12 p-0 border-gray-300 hover:border-perlogy-blue hover:text-perlogy-blue transition-all duration-300">
            <ArrowLeft size={18} />
          </Button>
          <Button variant="outline" className="rounded-full w-12 h-12 p-0 border-gray-300 hover:border-perlogy-blue hover:text-perlogy-blue transition-all duration-300">
            <ArrowRight size={18} />
          </Button>
        </div>
        
        {/* Trust indicators */}
        <div className="mt-16 text-center">
          <p className="text-gray-500 mb-6">Trusted by leading organizations across Africa</p>
          <div className="flex justify-center items-center space-x-8 flex-wrap">
            {[1, 2, 3, 4, 5].map((_, index) => (
              <div key={index} className="w-32 h-12 bg-gray-100 rounded-md flex items-center justify-center my-2">
                <div className="text-gray-400 font-semibold">Client Logo</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;