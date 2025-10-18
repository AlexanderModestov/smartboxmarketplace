export type AutomationCategory = 
  | "Marketing" 
  | "Sales" 
  | "Service" 
  | "IT Operations" 
  | "Finance" 
  | "HR" 
  | "Product Analytics" 
  | "Other";

export type DifficultyLevel = "Beginner" | "Intermediate" | "Advanced";

export type Service = 
  | "Google Sheets"
  | "Slack"
  | "Stripe"
  | "GitHub"
  | "Airtable"
  | "Trello"
  | "Notion"
  | "Gmail"
  | "Calendar"
  | "API"
  | "CRM"
  | "ERP"
  | "Cloud Storage";

export interface Automation {
  id: string;
  title: string;
  description: string;
  category: AutomationCategory;
  difficulty: DifficultyLevel;
  services: Service[];
  rating: number;
  reviews: number;
  popular?: boolean;
  gifUrl: string;
}
