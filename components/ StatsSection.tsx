// StatsSection.tsx
import { Globe, CheckCircle, Award, Users } from 'lucide-react';
import StatsCard from './StatsCard';

const StatsSection = () => {
  const stats = [
    { 
      value: "15+", 
      label: "Years Experience",
      icon: <Award className="h-8 w-8 text-perlogy-blue" />,
      color: 'blue'
    },
    { 
      value: "100+", 
      label: "Projects Completed",
      icon: <CheckCircle className="h-8 w-8 text-perlogy-orange" />,
      color: 'orange'
    },
    { 
      value: "15+", 
      label: "Strategic Partners",
      icon: <Users className="h-8 w-8 text-green-600" />,
      color: 'green'
    },
    { 
      value: "5+", 
      label: "African Countries",
      icon: <Globe className="h-8 w-8 text-purple-600" />,
      color: 'purple'
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 border border-blue-600/20 mb-4">
            <span className="text-sm font-medium text-blue-600">Our Impact</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-perlogy-dark">
            Making a <span className="text-perlogy-orange">Difference</span> Across Africa
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Our commitment to excellence and innovation has led to significant achievements in the ProAV industry.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <StatsCard 
              key={index}
              value={stat.value}
              label={stat.label}
              icon={stat.icon}
              color={stat.color}
            />
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-gray-600 max-w-3xl mx-auto">
            Perlogy Technologies continues to expand its reach and influence across the African continent, 
            bringing cutting-edge audio-visual solutions to diverse markets and industries.
          </p>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;