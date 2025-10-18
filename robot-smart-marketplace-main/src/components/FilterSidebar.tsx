import { AutomationCategory, DifficultyLevel, Service } from "@/types/automation";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Filter } from "lucide-react";
import { Button } from "@/components/ui/button";

interface FilterSidebarProps {
  selectedCategories: AutomationCategory[];
  selectedDifficulties: DifficultyLevel[];
  selectedServices: Service[];
  onCategoryChange: (category: AutomationCategory) => void;
  onDifficultyChange: (difficulty: DifficultyLevel) => void;
  onServiceChange: (service: Service) => void;
}

const categories: AutomationCategory[] = [
  "Marketing",
  "Sales",
  "Service",
  "IT Operations",
  "Finance",
  "HR",
  "Product Analytics",
  "Other"
];

const difficulties: DifficultyLevel[] = ["Beginner", "Intermediate", "Advanced"];

const services: Service[] = [
  "Google Sheets",
  "Slack",
  "Stripe",
  "GitHub",
  "Airtable",
  "Trello",
  "Notion",
  "Gmail",
  "Calendar",
  "API",
  "CRM",
  "ERP",
  "Cloud Storage"
];

const FilterSidebar = ({
  selectedCategories,
  selectedDifficulties,
  selectedServices,
  onCategoryChange,
  onDifficultyChange,
  onServiceChange
}: FilterSidebarProps) => {
  const handleSelectAllCategories = () => {
    categories.forEach(cat => {
      if (!selectedCategories.includes(cat)) {
        onCategoryChange(cat);
      }
    });
  };

  const handleResetCategories = () => {
    selectedCategories.forEach(cat => onCategoryChange(cat));
  };

  const handleSelectAllDifficulties = () => {
    difficulties.forEach(diff => {
      if (!selectedDifficulties.includes(diff)) {
        onDifficultyChange(diff);
      }
    });
  };

  const handleResetDifficulties = () => {
    selectedDifficulties.forEach(diff => onDifficultyChange(diff));
  };

  const handleSelectAllServices = () => {
    services.forEach(service => {
      if (!selectedServices.includes(service)) {
        onServiceChange(service);
      }
    });
  };

  const handleResetServices = () => {
    selectedServices.forEach(service => onServiceChange(service));
  };

  return (
    <aside className="w-80 bg-card border-r border-border sticky top-[73px] h-[calc(100vh-73px)]">
      <ScrollArea className="h-full">
        <div className="p-6 space-y-6">
          <div className="flex items-center gap-2 mb-6">
            <Filter className="w-5 h-5 text-primary" />
            <h2 className="text-xl font-bold">Filters</h2>
          </div>

          {/* Categories */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <Label className="text-sm font-semibold text-foreground">Application Area</Label>
              <div className="flex gap-1">
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="h-6 text-xs px-2"
                  onClick={handleSelectAllCategories}
                >
                  Select All
                </Button>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="h-6 text-xs px-2"
                  onClick={handleResetCategories}
                >
                  Reset
                </Button>
              </div>
            </div>
            <div className="space-y-3">
              {categories.map((category) => (
                <div key={category} className="flex items-center space-x-2">
                  <Checkbox
                    id={`category-${category}`}
                    checked={selectedCategories.includes(category)}
                    onCheckedChange={() => onCategoryChange(category)}
                  />
                  <label
                    htmlFor={`category-${category}`}
                    className="text-sm text-muted-foreground cursor-pointer hover:text-foreground transition-colors"
                  >
                    {category}
                  </label>
                </div>
              ))}
            </div>
          </div>

          <Separator className="bg-border" />

          {/* Difficulty */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <Label className="text-sm font-semibold text-foreground">Difficulty</Label>
              <div className="flex gap-1">
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="h-6 text-xs px-2"
                  onClick={handleSelectAllDifficulties}
                >
                  Select All
                </Button>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="h-6 text-xs px-2"
                  onClick={handleResetDifficulties}
                >
                  Reset
                </Button>
              </div>
            </div>
            <div className="space-y-3">
              {difficulties.map((difficulty) => (
                <div key={difficulty} className="flex items-center space-x-2">
                  <Checkbox
                    id={`difficulty-${difficulty}`}
                    checked={selectedDifficulties.includes(difficulty)}
                    onCheckedChange={() => onDifficultyChange(difficulty)}
                  />
                  <label
                    htmlFor={`difficulty-${difficulty}`}
                    className="text-sm text-muted-foreground cursor-pointer hover:text-foreground transition-colors"
                  >
                    {difficulty}
                  </label>
                </div>
              ))}
            </div>
          </div>

          <Separator className="bg-border" />

          {/* Services */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <Label className="text-sm font-semibold text-foreground">Services & Systems</Label>
              <div className="flex gap-1">
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="h-6 text-xs px-2"
                  onClick={handleSelectAllServices}
                >
                  Select All
                </Button>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="h-6 text-xs px-2"
                  onClick={handleResetServices}
                >
                  Reset
                </Button>
              </div>
            </div>
            <div className="space-y-3">
              {services.map((service) => (
                <div key={service} className="flex items-center space-x-2">
                  <Checkbox
                    id={`service-${service}`}
                    checked={selectedServices.includes(service)}
                    onCheckedChange={() => onServiceChange(service)}
                  />
                  <label
                    htmlFor={`service-${service}`}
                    className="text-sm text-muted-foreground cursor-pointer hover:text-foreground transition-colors"
                  >
                    {service}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </div>
      </ScrollArea>
    </aside>
  );
};

export default FilterSidebar;
