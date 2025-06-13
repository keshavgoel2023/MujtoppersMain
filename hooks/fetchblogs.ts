import { useState, useEffect } from 'react';

interface Blog {
  id: string;
  title: string;
  content: string;
  category: string;
  tags: string[];
  createdAt: string;
}

const API_URL = process.env.NEXT_PUBLIC_ADMIN_URL

export function useBlogs() {
  const [data, setData] = useState<Blog[] | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch(`${API_URL}/api/blogs`, {
          credentials: 'include',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        
        if (!response.ok) {
          throw new Error('Failed to fetch blogs');
        }
        const blogs = await response.json();
        setData(blogs);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('An error occurred'));
      } finally {
        setIsLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  return { data, isLoading, error };
}

export function useBlog(id: string) {
  const [data, setData] = useState<Blog | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await fetch(`${API_URL}/api/blogs/${id}`, {
          credentials: 'include',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        
        if (!response.ok) {
          throw new Error('Failed to fetch blog');
        }
        const blog = await response.json();
        setData(blog);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('An error occurred'));
      } finally {
        setIsLoading(false);
      }
    };

    fetchBlog();
  }, [id]);

  return { data, isLoading, error };
}
