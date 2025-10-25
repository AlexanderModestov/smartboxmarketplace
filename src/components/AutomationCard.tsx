import { Automation } from "@/types/automation";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

interface AutomationCardProps {
  automation: Automation;
}

const AutomationCard = ({ automation }: AutomationCardProps) => {
  const navigate = useNavigate();

  const handleDetailsClick = () => {
    navigate(`/automation/${automation.id}`);
  };

  return (
    <Card className="group overflow-hidden bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-glow h-full flex flex-col">
      <div className="p-4 space-y-3 flex-1 flex flex-col">
        <div className="flex-1">
          <h3 className="font-bold text-base mb-2 group-hover:text-primary transition-colors line-clamp-2">
            {automation.title}
          </h3>
          <p className="text-sm text-muted-foreground line-clamp-3">
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

        <Button
          onClick={handleDetailsClick}
          className="w-full bg-gradient-primary hover:shadow-glow transition-all"
        >
          Details
        </Button>
      </div>
    </Card>
  );
};

export default AutomationCard;
