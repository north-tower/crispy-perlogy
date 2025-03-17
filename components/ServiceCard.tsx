import { ReactNode } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

const ServiceCard = ({ icon, title, description }: ServiceCardProps) => {
  return (
    <Card className="group border border-gray-200 hover:border-perlogy-blue transition-all duration-300 overflow-hidden">
      <div className="absolute h-1 w-0 bg-gradient-to-r from-perlogy-blue to-perlogy-orange top-0 left-0 group-hover:w-full transition-all duration-500"></div>
      <CardHeader className="pb-2">
        <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center text-perlogy-blue mb-4 group-hover:bg-perlogy-blue group-hover:text-white transition-all duration-300">
          {icon}
        </div>
        <CardTitle className="text-xl font-semibold text-perlogy-dark">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600">{description}</p>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;