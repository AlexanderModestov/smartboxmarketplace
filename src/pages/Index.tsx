import { useState, useMemo } from "react";
import Header from "@/components/Header";
import SearchBanner from "@/components/SearchBanner";
import FilterSidebar from "@/components/FilterSidebar";
import AutomationCard from "@/components/AutomationCard";
import { useAutomations, useFilterOptions } from "@/hooks/useAutomations";
import { Service } from "@/types/automation";
import { Loader2 } from "lucide-react";

const Index = () => {
  const { data: automations = [], isLoading, error } = useAutomations();
  const { categories, subcategories } = useFilterOptions(automations);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedSubcategories, setSelectedSubcategories] = useState<string[]>([]);
  const [selectedServices, setSelectedServices] = useState<Service[]>([]);

  const handleCategoryChange = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  const handleSubcategoryChange = (subcategory: string) => {
    setSelectedSubcategories((prev) =>
      prev.includes(subcategory)
        ? prev.filter((s) => s !== subcategory)
        : [...prev, subcategory]
    );
  };

  const handleServiceChange = (service: Service) => {
    setSelectedServices((prev) =>
      prev.includes(service)
        ? prev.filter((s) => s !== service)
        : [...prev, service]
    );
  };

  const filteredAutomations = useMemo(() => {
    return automations.filter((automation) => {
      const matchesSearch =
        searchQuery === "" ||
        automation.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        automation.description.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCategory =
        selectedCategories.length === 0 ||
        selectedCategories.includes(automation.category);

      const matchesSubcategory =
        selectedSubcategories.length === 0 ||
        (automation.subcategory && selectedSubcategories.includes(automation.subcategory));

      const matchesService =
        selectedServices.length === 0 ||
        selectedServices.some((service) => automation.services.includes(service));

      return matchesSearch && matchesCategory && matchesSubcategory && matchesService;
    });
  }, [searchQuery, selectedCategories, selectedSubcategories, selectedServices, automations]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="flex items-center justify-center h-[calc(100vh-80px)]">
          <div className="text-center">
            <Loader2 className="w-12 h-12 animate-spin text-primary mx-auto mb-4" />
            <p className="text-lg text-muted-foreground">Loading automations...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="flex items-center justify-center h-[calc(100vh-80px)]">
          <div className="text-center">
            <p className="text-lg text-destructive mb-2">Error loading automations</p>
            <p className="text-sm text-muted-foreground">{error.message}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <SearchBanner searchQuery={searchQuery} onSearchChange={setSearchQuery} />

      <div className="flex">
        <FilterSidebar
          categories={categories}
          subcategories={subcategories}
          selectedCategories={selectedCategories}
          selectedSubcategories={selectedSubcategories}
          selectedServices={selectedServices}
          onCategoryChange={handleCategoryChange}
          onSubcategoryChange={handleSubcategoryChange}
          onServiceChange={handleServiceChange}
        />

        <main className="flex-1 container mx-auto px-6 py-8">
          {/* All Solutions - Grid */}
          <section>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-3xl font-bold">All Solutions</h2>
              <p className="text-muted-foreground">
                Found: <span className="font-bold text-primary">{filteredAutomations.length}</span>
              </p>
            </div>
            
            {filteredAutomations.length === 0 ? (
              <div className="text-center py-16">
                <p className="text-xl text-muted-foreground">
                  No solutions found. Try adjusting your filters.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
                {filteredAutomations.map((automation) => (
                  <AutomationCard key={automation.id} automation={automation} />
                ))}
              </div>
            )}
          </section>
        </main>
      </div>
    </div>
  );
};

export default Index;
