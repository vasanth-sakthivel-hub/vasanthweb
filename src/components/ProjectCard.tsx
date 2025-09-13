import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { SkillChip } from "./SkillChip";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: Array<{
    name: string;
    category: 'backend' | 'frontend' | 'database' | 'tools';
  }>;
  demoLink?: string;
  codeLink?: string;
}

export const ProjectCard = ({ title, description, tags, demoLink, codeLink }: ProjectCardProps) => {
  return (
    <Card className="group h-full bg-white/5 backdrop-blur-sm border border-white/10 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/20 hover:-translate-y-2">
      <CardHeader className="pb-4">
        <CardTitle className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-muted-foreground text-sm leading-relaxed">
          {description}
        </p>
        
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <SkillChip key={tag.name} name={tag.name} category={tag.category} />
          ))}
        </div>
        
        <div className="flex gap-2 pt-2">
          {demoLink && (
            <Button 
              size="sm" 
              className="bg-primary hover:bg-primary/80 text-primary-foreground"
              asChild
            >
              <a href={demoLink} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-4 h-4 mr-2" />
                Demo
              </a>
            </Button>
          )}
          {codeLink && (
            <Button 
              size="sm" 
              variant="outline" 
              className="border-primary/50 text-primary hover:bg-primary/10"
              asChild
            >
              <a href={codeLink} target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4 mr-2" />
                Code
              </a>
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
};