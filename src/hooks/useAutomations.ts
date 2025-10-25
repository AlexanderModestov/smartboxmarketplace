import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/lib/supabase';
import type { Automation } from '@/types/automation';
import type { Document } from '@/types/database';

// Helper function to map database documents to Automation type
const mapDocumentToAutomation = (doc: Document): Automation => {
  return {
    id: doc.id.toString(),
    title: doc.name || 'Untitled',
    description: doc.description || doc.short_description || '',
    category: doc.category || 'Other',
    subcategory: doc.subcategory || undefined,
    services: (doc.stack || []) as any[],
    gifUrl: doc.url || '',
  };
};

export const useAutomations = () => {
  return useQuery({
    queryKey: ['automations'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('documents')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        throw error;
      }

      return (data || []).map(mapDocumentToAutomation);
    },
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
};

// Hook to get unique categories and subcategories from automations
export const useFilterOptions = (automations: Automation[]) => {
  const categories = Array.from(new Set(automations.map(a => a.category).filter(Boolean))).sort();
  const subcategories = Array.from(new Set(automations.map(a => a.subcategory).filter(Boolean))).sort();

  return { categories, subcategories };
};
