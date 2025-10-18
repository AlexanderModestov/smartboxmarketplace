import { useState, useMemo, useRef } from "react";
import Header from "@/components/Header";
import SearchBanner from "@/components/SearchBanner";
import FilterSidebar from "@/components/FilterSidebar";
import AutomationCard from "@/components/AutomationCard";
import { automations } from "@/data/automations";
import { AutomationCategory, DifficultyLevel, Service } from "@/types/automation";
import { Sparkles, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<AutomationCategory[]>([]);
  const [selectedDifficulties, setSelectedDifficulties] = useState<DifficultyLevel[]>([]);
  const [selectedServices, setSelectedServices] = useState<Service[]>([]);
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleCategoryChange = (category: AutomationCategory) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  const handleDifficultyChange = (difficulty: DifficultyLevel) => {
    setSelectedDifficulties((prev) =>
      prev.includes(difficulty)
        ? prev.filter((d) => d !== difficulty)
        : [...prev, difficulty]
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

      const matchesDifficulty =
        selectedDifficulties.length === 0 ||
        selectedDifficulties.includes(automation.difficulty);

      const matchesService =
        selectedServices.length === 0 ||
        selectedServices.some((service) => automation.services.includes(service));

      return matchesSearch && matchesCategory && matchesDifficulty && matchesService;
    });
  }, [searchQuery, selectedCategories, selectedDifficulties, selectedServices]);

  const popularAutomations = automations.filter((a) => a.popular);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 400;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <SearchBanner searchQuery={searchQuery} onSearchChange={setSearchQuery} />
      
      <div className="flex">
        <FilterSidebar
          selectedCategories={selectedCategories}
          selectedDifficulties={selectedDifficulties}
          selectedServices={selectedServices}
          onCategoryChange={handleCategoryChange}
          onDifficultyChange={handleDifficultyChange}
          onServiceChange={handleServiceChange}
        />

        <main className="flex-1 container mx-auto px-6 py-8">
          {/* Popular Solutions - Horizontal Scroll */}
          <section className="mb-12">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <Sparkles className="w-6 h-6 text-primary" />
                <h2 className="text-3xl font-bold">Popular Solutions</h2>
              </div>
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => scroll('left')}
                  className="h-10 w-10"
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => scroll('right')}
                  className="h-10 w-10"
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
            <div 
              ref={scrollRef}
              className="flex gap-5 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {popularAutomations.map((automation) => (
                <div key={automation.id} className="flex-none w-[320px] snap-start">
                  <AutomationCard automation={automation} />
                </div>
              ))}
            </div>
          </section>

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
