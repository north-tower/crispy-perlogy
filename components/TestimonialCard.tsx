import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface TestimonialCardProps {
  quote: string;
  name: string;
  role: string;
  company: string;
}

const TestimonialCard = ({ quote, name, role, company }: TestimonialCardProps) => {
  return (
    <Card className="h-full border border-gray-200 hover:border-perlogy-blue group transition-all duration-300 relative overflow-hidden">
      {/* Decorative top gradient */}
      <div className="absolute h-1 w-0 bg-gradient-to-r from-perlogy-blue to-perlogy-orange top-0 left-0 group-hover:w-full transition-all duration-500"></div>
      
      <CardHeader className="pb-2 pt-6">
        <div className="text-perlogy-orange text-5xl font-serif leading-none group-hover:scale-110 transition-transform duration-300">&apos;</div>
      </CardHeader>
      
      <CardContent className="pt-0 pb-6 relative z-10">
        <CardDescription className="text-gray-600 mb-6 italic text-lg leading-relaxed">{quote}</CardDescription>
        
        <div className="flex items-center">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-perlogy-blue to-perlogy-orange flex items-center justify-center text-white font-bold">
            {name.charAt(0)}
          </div>
          <div className="ml-3">
            <CardTitle className="text-lg font-semibold text-perlogy-dark">{name}</CardTitle>
            <p className="text-sm text-gray-500 mt-1">{role}, {company}</p>
          </div>
        </div>
      </CardContent>
      
      {/* Decorative elements */}
      <div className="absolute bottom-0 right-0 w-16 h-16 bg-blue-50 rounded-tl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <div className="absolute top-0 right-0 text-8xl text-gray-50 leading-none font-serif -mt-4 mr-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">&apos;</div>
    </Card>
  );
};

export default TestimonialCard;