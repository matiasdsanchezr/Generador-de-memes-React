import { useQuery } from '@tanstack/react-query';

// React Query custom hooks
export const useMemegen = () => {
  const fetchMemegenTemplates = async () => {
    const res = await fetch('https://api.memegen.link/templates');
    if (!res.ok) throw new Error('Error al cargar imagenes desde imgflip');
    return res.json();
  };

  return useQuery({
    queryKey: ['memegen'],
    queryFn: fetchMemegenTemplates,
  });
};
