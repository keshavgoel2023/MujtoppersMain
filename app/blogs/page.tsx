"use client";

import Link from 'next/link';
import { useBlogs } from '@/hooks/fetchblogs';

function stripHtmlTags(htmlString: string) {
  return htmlString.replace(/<[^>]*>/g, '').replace(/\s\s+/g, ' ').trim();
}

export default function BlogsPage() {
  const { data: blogs, isLoading, error } = useBlogs();

  // Calculate dynamic stats
  const totalBlogs = blogs?.length || 0;
  const uniqueTags = new Set(blogs?.flatMap(blog => blog.tags)).size || 0;
  const totalReadingTime = blogs?.reduce((acc, blog) => acc + Math.ceil(blog.content.split(' ').length / 200), 0) || 0;

  console.log("Blogs data:", blogs);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-700 via-purple-600 to-indigo-700 text-white py-32 overflow-hidden">
        {/* Background Pattern - more dynamic */}
        <div className="absolute inset-0 opacity-15 animate-pulse-slow" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-8 leading-tight animate-fade-in-down">
              Student Resources & <br />
              <span className="text-blue-200">Academic Insights</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-2xl mx-auto leading-relaxed animate-fade-in-up delay-300">
              Explore our collection of study guides, academic tips, and success stories from fellow students
            </p>

            {/* Stats - with subtle animations */}
            <div className="flex justify-center gap-12 text-center">
              <div className="animate-fade-in delay-500">
                <div className="text-3xl font-bold mb-2">{totalBlogs}+</div>
                <div className="text-blue-200">Total Articles</div>
              </div>
              <div className="animate-fade-in delay-700">
                <div className="text-3xl font-bold mb-2">{uniqueTags}+</div>
                <div className="text-blue-200">Diverse Topics</div>
              </div>
              <div className="animate-fade-in delay-900">
                <div className="text-3xl font-bold mb-2">{totalReadingTime}+</div>
                <div className="text-blue-200">Total Reading Mins</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog List Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {isLoading ? (
            <div className="flex justify-center items-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
            </div>
          ) : error ? (
            <div className="text-center py-12">
              <h1 className="text-2xl font-bold text-gray-900 mb-4">Error loading blogs</h1>
              <p className="text-gray-600">Please try again later</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogs?.map((blog, index) => (
                <Link
                  href={`/blogs/${blog.id}`}
                  key={blog.id}
                  className="block group opacity-0 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <article
                    className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100"
                  >
                    <div className="p-6 flex flex-col h-full">
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full shadow-sm hover:shadow-lg transition-shadow duration-300">
                          {blog.category}
                        </span>
                        <span className="text-sm text-gray-500 flex items-center">
                          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          {Math.ceil(blog.content.split(' ').length / 200)} min read
                        </span>
                      </div>
                      <h2 className="text-xl font-semibold mb-3 text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                        {blog.title}
                      </h2>
                      <p className="text-gray-600 mb-4 line-clamp-2">
                        {stripHtmlTags(blog.content)}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {blog.tags.map((tag, index) => (
                          <span
                            key={index}
                            className="text-xs font-medium px-2.5 py-1 rounded-full transform group-hover:scale-105 transition-transform duration-300"
                            style={{
                              backgroundColor: `hsl(${(index * 137.5) % 360}, 70%, 95%)`,
                              color: `hsl(${(index * 137.5) % 360}, 70%, 30%)`
                            }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        {new Date(blog.createdAt).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
