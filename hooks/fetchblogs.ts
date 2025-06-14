import { useQuery } from '@tanstack/react-query';

interface Blog {
  id: string;
  title: string;
  content: string;
  category: string;
  tags: string[];
  createdAt: string;
}

const API_URL = process.env.NEXT_PUBLIC_ADMIN_URL;

const fetchAllBlogs = async (): Promise<Blog[]> => {
  const response = await fetch(`${API_URL}/api/blogs`, {
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  
  if (!response.ok) {
    throw new Error('Failed to fetch blogs');
  }
  return response.json();
};

const fetchBlogById = async (id: string): Promise<Blog> => {
  const response = await fetch(`${API_URL}/api/blogs/${id}`, {
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  
  if (!response.ok) {
    throw new Error('Failed to fetch blog');
  }
  return response.json();
};

export function useBlogs() {
  return useQuery({
    queryKey: ['blogs'],
    queryFn: fetchAllBlogs,
    staleTime: 5 * 60 * 1000, // Data is considered fresh for 5 minutes
    gcTime: 30 * 60 * 1000, // Cache is kept for 30 minutes
  });
}

export function useBlog(id: string) {
  return useQuery({
    queryKey: ['blog', id],
    queryFn: () => fetchBlogById(id),
    staleTime: 5 * 60 * 1000, // Data is considered fresh for 5 minutes
    gcTime: 30 * 60 * 1000, // Cache is kept for 30 minutes
  });
}
