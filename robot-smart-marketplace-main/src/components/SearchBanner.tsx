import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

interface SearchBannerProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

const SearchBanner = ({ searchQuery, onSearchChange }: SearchBannerProps) => {
  return (
    <div className="relative overflow-hidden bg-gradient-card border-b border-border">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMmQ4ZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDEzNGg3djJ2LTJoLTd6bTE0IDB2Mmg3di0yaC03em0tMTQgMTRoN3YtMmgtN3Yyem0xNCAwdjJoN3YtMmgtN3ptLTE0IDE0aDd2LTJoLTd2MnptMTQgMHYyaDd2LTJoLTd6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-30" />
      
      <div className="container mx-auto px-6 py-12 relative">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold">
            Find the Perfect Solution <br />
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              for Your Task
            </span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Over 100+ ready-made automations for businesses of any size
          </p>
          
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search automations by title or description..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="pl-12 h-14 text-lg bg-card border-border/50 focus:border-primary transition-colors"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBanner;
