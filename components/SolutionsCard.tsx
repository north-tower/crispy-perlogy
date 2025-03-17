
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

interface SolutionCardProps {
  image: string;
  title: string;
  description: string;
  link: string;
}

const SolutionCard = ({ image, title, description, link }: SolutionCardProps) => {
  return (
    <Card className="h-full overflow-hidden border border-gray-200 hover:border-perlogy-blue group transition-all duration-300 flex flex-col">
      <div className="h-52 overflow-hidden relative">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      <CardHeader className="pb-2 relative">
        <div className="absolute h-1 w-0 bg-gradient-to-r from-perlogy-blue to-perlogy-orange top-0 left-0 group-hover:w-full transition-all duration-500"></div>
        <CardTitle className="text-xl font-bold text-perlogy-dark">{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <CardDescription className="text-gray-600 leading-relaxed">{description}</CardDescription>
      </CardContent>
      <CardFooter className="pt-2 pb-4">
        <Button variant="ghost" className="p-0 text-perlogy-blue hover:text-perlogy-orange group-hover:translate-x-1 transition-all duration-300">
          <Link href={link} className="flex items-center">
            Learn More <ArrowRight size={16} className="ml-1 transition-transform group-hover:ml-2" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default SolutionCard;