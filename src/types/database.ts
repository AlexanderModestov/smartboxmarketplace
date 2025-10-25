export interface Document {
  id: number;
  name: string | null;
  category: string | null;
  subcategory: string | null;
  url: string;
  short_description: string | null;
  description: string | null;
  tags: string[] | null;
  embedding: number[] | null;
  created_at: string | null;
  updated_at: string | null;
  name_ru: string | null;
  short_description_ru: string | null;
  description_ru: string | null;
  stack: string[] | null;
}

export interface Database {
  public: {
    Tables: {
      documents: {
        Row: Document;
        Insert: Omit<Document, 'id' | 'created_at' | 'updated_at'>;
        Update: Partial<Omit<Document, 'id' | 'created_at' | 'updated_at'>>;
      };
    };
  };
}
