import { Automation } from "@/types/automation";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, TrendingUp } from "lucide-react";

interface AutomationCardProps {
  automation: Automation;
}

const getDifficultyColor = (difficulty: string) => {
  switch (difficulty) {
    case "Beginner":
      return "bg-secondary/20 text-secondary border-secondary/30";
    case "Intermediate":
      return "bg-primary/20 text-primary border-primary/30";
    case "Advanced":
      return "bg-destructive/20 text-destructive border-destructive/30";
    default:
      return "bg-muted text-muted-foreground";
  }
};

const AutomationCard = ({ automation }: AutomationCardProps) => {
  return (
    <Card className="group overflow-hidden bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-glow h-full flex flex-col">
      <div className="relative h-44 overflow-hidden bg-muted flex-shrink-0">
        <img
          src={automation.gifUrl}
          alt={automation.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
        {automation.popular && (
          <div className="absolute top-3 right-3 flex items-center gap-1 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium shadow-lg">
            <TrendingUp className="w-3 h-3" />
            Popular
          </div>
        )}
        <div className="absolute bottom-3 left-3">
          <Badge className={getDifficultyColor(automation.difficulty)}>
            {automation.difficulty}
          </Badge>
        </div>
      </div>
      
      <div className="p-4 space-y-3 flex-1 flex flex-col">
        <div className="flex-1">
          <h3 className="font-bold text-base mb-2 group-hover:text-primary transition-colors line-clamp-2">
            {automation.title}
          </h3>
          <p className="text-sm text-muted-foreground line-clamp-2">
            {automation.description}
          </p>
        </div>

        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <Badge variant="outline" className="text-xs">
            {automation.category}
          </Badge>
        </div>

        <div className="flex flex-wrap gap-1.5">
          {automation.services.slice(0, 3).map((service) => (
            <Badge key={service} variant="secondary" className="text-xs">
              {service}
            </Badge>
          ))}
          {automation.services.length > 3 && (
            <Badge variant="secondary" className="text-xs">
              +{automation.services.length - 3}
            </Badge>
          )}
        </div>

        <div className="flex items-center justify-between pt-2 border-t border-border">
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 fill-primary text-primary" />
            <span className="text-sm font-medium">{automation.rating}</span>
            <span className="text-xs text-muted-foreground">({automation.reviews})</span>
          </div>
        </div>

        <Button className="w-full bg-gradient-primary hover:shadow-glow transition-all">
          Order Now
        </Button>
      </div>
    </Card>
  );
};

export default AutomationCard;
