import { useQuery } from '@tanstack/react-query';
import { fetchProperties } from '../services/googleSheets';
import { Property } from '../data/properties';

export const useProperties = () => {
  return useQuery<Property[], Error>({
    queryKey: ['properties'],
    queryFn: fetchProperties,
    staleTime: 5 * 60 * 1000, // 5 minutes
    refetchInterval: 5 * 60 * 1000, // Refetch every 5 minutes
    refetchOnWindowFocus: true,
    retry: 3,
    retryDelay: attemptIndex => Math.min(1000 * 2 ** attemptIndex, 30000),
  });
};

export const useProperty = (slug: string) => {
  const { data: properties, ...queryResult } = useProperties();
  
  const property = properties?.find(p => p.slug === slug);
  
  return {
    ...queryResult,
    data: property,
  };
};