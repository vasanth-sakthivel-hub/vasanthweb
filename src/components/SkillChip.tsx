import { cn } from "@/lib/utils";

interface SkillChipProps {
  name: string;
  category: 'backend' | 'frontend' | 'database' | 'tools';
  className?: string;
}

const categoryStyles = {
  backend: 'bg-blue-500/20 text-blue-300 border-blue-500/30',
  frontend: 'bg-green-500/20 text-green-300 border-green-500/30',
  database: 'bg-purple-500/20 text-purple-300 border-purple-500/30',
  tools: 'bg-orange-500/20 text-orange-300 border-orange-500/30',
};

export const SkillChip = ({ name, category, className }: SkillChipProps) => {
  return (
    <span 
      className={cn(
        "inline-block px-3 py-1 rounded-full text-sm font-medium border transition-all duration-300 hover:scale-105 hover:shadow-lg",
        categoryStyles[category],
        className
      )}
    >
      {name}
    </span>
  );
};