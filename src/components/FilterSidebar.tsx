import { Service } from "@/types/automation";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Filter } from "lucide-react";
import { Button } from "@/components/ui/button";

interface FilterSidebarProps {
  categories: string[];
  subcategories: string[];
  selectedCategories: string[];
  selectedSubcategories: string[];
  selectedServices: Service[];
  onCategoryChange: (category: string) => void;
  onSubcategoryChange: (subcategory: string) => void;
  onServiceChange: (service: Service) => void;
}

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
  categories,
  subcategories,
  selectedCategories,
  selectedSubcategories,
  selectedServices,
  onCategoryChange,
  onSubcategoryChange,
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

  const handleSelectAllSubcategories = () => {
    subcategories.forEach(sub => {
      if (!selectedSubcategories.includes(sub)) {
        onSubcategoryChange(sub);
      }
    });
  };

  const handleResetSubcategories = () => {
    selectedSubcategories.forEach(sub => onSubcategoryChange(sub));
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
          {categories.length > 0 && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <Label className="text-sm font-semibold text-foreground">Category</Label>
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
          )}

          {categories.length > 0 && subcategories.length > 0 && (
            <Separator className="bg-border" />
          )}

          {/* Subcategories */}
          {subcategories.length > 0 && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <Label className="text-sm font-semibold text-foreground">Subcategory</Label>
                <div className="flex gap-1">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-6 text-xs px-2"
                    onClick={handleSelectAllSubcategories}
                  >
                    Select All
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-6 text-xs px-2"
                    onClick={handleResetSubcategories}
                  >
                    Reset
                  </Button>
                </div>
              </div>
              <div className="space-y-3">
                {subcategories.map((subcategory) => (
                  <div key={subcategory} className="flex items-center space-x-2">
                    <Checkbox
                      id={`subcategory-${subcategory}`}
                      checked={selectedSubcategories.includes(subcategory)}
                      onCheckedChange={() => onSubcategoryChange(subcategory)}
                    />
                    <label
                      htmlFor={`subcategory-${subcategory}`}
                      className="text-sm text-muted-foreground cursor-pointer hover:text-foreground transition-colors"
                    >
                      {subcategory}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          )}

          {(categories.length > 0 || subcategories.length > 0) && (
            <Separator className="bg-border" />
          )}

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
