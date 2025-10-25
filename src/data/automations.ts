import { Automation } from "@/types/automation";

export const automations: Automation[] = [
  {
    id: "1",
    title: "Automatic CRM Lead Sync to Google Sheets",
    description: "Automatically transfers new leads from CRM to Google Sheets with real-time status updates",
    category: "Sales",
    difficulty: "Beginner",
    services: ["CRM", "Google Sheets", "API"],
    rating: 4.8,
    reviews: 124,
    popular: true
  },
  {
    id: "2",
    title: "Slack Notifications for New Stripe Orders",
    description: "Instant Slack notifications for every successful Stripe payment with order details",
    category: "Finance",
    difficulty: "Beginner",
    services: ["Slack", "Stripe", "API"],
    rating: 4.9,
    reviews: 203,
    popular: true
  },
  {
    id: "3",
    title: "HR Process Automation: Employee Onboarding",
    description: "Complete onboarding cycle: account creation, welcome emails, Slack and Trello integration",
    category: "HR",
    difficulty: "Intermediate",
    services: ["Gmail", "Slack", "Trello", "Google Sheets"],
    rating: 4.7,
    reviews: 89,
    popular: true
  },
  {
    id: "4",
    title: "Automatic GitHub Backup to Cloud Storage",
    description: "Daily automated GitHub repository backups to cloud storage with versioning",
    category: "IT Operations",
    difficulty: "Intermediate",
    services: ["GitHub", "Cloud Storage", "API"],
    rating: 4.6,
    reviews: 67
  },
  {
    id: "5",
    title: "Email Marketing: Automated Audience Segmentation",
    description: "Automatic subscriber segmentation by behavior and personalized campaign delivery",
    category: "Marketing",
    difficulty: "Advanced",
    services: ["Gmail", "Google Sheets", "API", "CRM"],
    rating: 4.9,
    reviews: 156,
    popular: true
  },
  {
    id: "6",
    title: "Project Management: Trello + Notion Sync",
    description: "Bidirectional task sync between Trello and Notion with automatic status updates",
    category: "Product Analytics",
    difficulty: "Intermediate",
    services: ["Trello", "Notion", "API"],
    rating: 4.5,
    reviews: 92
  },
  {
    id: "7",
    title: "Automated Executive Reports Generation",
    description: "Daily report generation from multiple data sources and PDF delivery via email",
    category: "Product Analytics",
    difficulty: "Advanced",
    services: ["Google Sheets", "Gmail", "API", "ERP"],
    rating: 4.8,
    reviews: 78
  },
  {
    id: "8",
    title: "Slack Bot for Team Task Management",
    description: "Interactive bot for creating, assigning, and tracking tasks directly from Slack",
    category: "IT Operations",
    difficulty: "Advanced",
    services: ["Slack", "Trello", "API"],
    rating: 4.7,
    reviews: 134
  },
  {
    id: "9",
    title: "Customer Support Ticket Automation",
    description: "Automatic categorization and distribution of support tickets among operators",
    category: "Service",
    difficulty: "Intermediate",
    services: ["Gmail", "Slack", "CRM", "API"],
    rating: 4.6,
    reviews: 111,
    popular: true
  },
  {
    id: "10",
    title: "Financial Analytics: Stripe to Google Sheets",
    description: "Automatic import of Stripe transactions to Google Sheets with key metrics calculation",
    category: "Finance",
    difficulty: "Beginner",
    services: ["Stripe", "Google Sheets", "API"],
    rating: 4.9,
    reviews: 187
  },
  {
    id: "11",
    title: "Calendar Meeting Sync with CRM",
    description: "Automatic CRM record creation when scheduling meetings in Google Calendar",
    category: "Sales",
    difficulty: "Beginner",
    services: ["Calendar", "CRM", "API"],
    rating: 4.5,
    reviews: 95
  },
  {
    id: "12",
    title: "Warehouse Inventory Automation",
    description: "Automatic stock level updates between ERP and accounting systems",
    category: "Other",
    difficulty: "Advanced",
    services: ["ERP", "Google Sheets", "API"],
    rating: 4.7,
    reviews: 43
  },
  {
    id: "13",
    title: "Automated Airtable Data Collection to Reports",
    description: "Daily export of Airtable data to formatted Google Sheets reports",
    category: "Product Analytics",
    difficulty: "Beginner",
    services: ["Airtable", "Google Sheets", "API"],
    rating: 4.8,
    reviews: 143
  },
  {
    id: "14",
    title: "Automated Standard Inquiry Responses",
    description: "AI-powered Gmail auto-responder with smart categorization and response templates",
    category: "Service",
    difficulty: "Advanced",
    services: ["Gmail", "API"],
    rating: 4.6,
    reviews: 72
  },
  {
    id: "15",
    title: "Recruiting: Resume Screening Automation",
    description: "Automatic resume analysis, candidate scoring, and interview invitation sending",
    category: "HR",
    difficulty: "Advanced",
    services: ["Gmail", "Google Sheets", "Slack", "API"],
    rating: 4.7,
    reviews: 58
  }
];
