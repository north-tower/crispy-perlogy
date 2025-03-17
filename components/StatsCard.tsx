// StatsCard.tsx

interface StatsCardProps {
  value: string;
  label: string;
  icon?: React.ReactNode;
  color?: 'blue' | 'orange' | 'green' | 'purple';
}

const StatsCard = ({ value, label, icon, color = 'blue' }: StatsCardProps) => {
  const colorClasses = {
    blue: 'text-perlogy-blue from-perlogy-blue/10 to-perlogy-blue/5',
    orange: 'text-perlogy-orange from-perlogy-orange/10 to-perlogy-orange/5',
    green: 'text-green-600 from-green-100 to-green-50',
    purple: 'text-purple-600 from-purple-100 to-purple-50',
  };

  return (
    <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
      {/* Background gradient */}
      <div className={`absolute inset-0 bg-gradient-to-br ${colorClasses[color]} opacity-30 group-hover:opacity-40 transition-opacity`} />
      
      <div className="relative z-10 flex flex-col items-center">
        {icon && <div className="mb-3">{icon}</div>}
        
        <div className={`text-4xl sm:text-5xl font-bold ${colorClasses[color].split(' ')[0]} mb-2`}>
          {value}
        </div>
        
        <div className="text-gray-600 text-center font-medium">{label}</div>
      </div>
    </div>
  );
};

export default StatsCard;

