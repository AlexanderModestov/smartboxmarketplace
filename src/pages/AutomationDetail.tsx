import { useParams, useNavigate } from "react-router-dom";
import { useAutomations } from "@/hooks/useAutomations";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Loader2 } from "lucide-react";

const AutomationDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { data: automations = [], isLoading, error } = useAutomations();

  const automation = automations.find((a) => a.id === id);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="flex items-center justify-center h-[calc(100vh-80px)]">
          <div className="text-center">
            <Loader2 className="w-12 h-12 animate-spin text-primary mx-auto mb-4" />
            <p className="text-lg text-muted-foreground">Loading automation details...</p>
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
            <p className="text-lg text-destructive mb-2">Error loading automation</p>
            <p className="text-sm text-muted-foreground">{error.message}</p>
          </div>
        </div>
      </div>
    );
  }

  if (!automation) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-6 py-8">
          <Button
            variant="ghost"
            onClick={() => navigate("/")}
            className="mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Automations
          </Button>
          <div className="text-center py-16">
            <p className="text-xl text-muted-foreground">Automation not found</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-6 py-8">
        <Button
          variant="ghost"
          onClick={() => navigate("/")}
          className="mb-6"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Automations
        </Button>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            <div>
              <h1 className="text-4xl font-bold mb-4">{automation.title}</h1>

              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="outline" className="text-sm">
                  {automation.category}
                </Badge>
                {automation.subcategory && (
                  <Badge variant="secondary" className="text-sm">
                    {automation.subcategory}
                  </Badge>
                )}
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-2">Description</h2>
              <p className="text-muted-foreground leading-relaxed">
                {automation.description}
              </p>
            </div>

            {automation.services.length > 0 && (
              <div>
                <h2 className="text-xl font-semibold mb-3">Technologies & Services</h2>
                <div className="flex flex-wrap gap-2">
                  {automation.services.map((service) => (
                    <Badge key={service} variant="secondary" className="text-sm">
                      {service}
                    </Badge>
                  ))}
                </div>
              </div>
            )}

            <div className="pt-6">
              <Button className="w-full bg-gradient-primary hover:shadow-glow transition-all" size="lg">
                Order This Automation
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AutomationDetail;
