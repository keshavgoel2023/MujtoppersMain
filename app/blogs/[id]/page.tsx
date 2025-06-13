"use client";

import { useBlog } from '@/hooks/fetchblogs';
import { useParams } from 'next/navigation';
import Link from 'next/link';

function transformGoogleDriveImageSrc(htmlString: string): string {
  const parser = new DOMParser();
  const doc = parser.parseFromString(htmlString, 'text/html');
  const images = doc.querySelectorAll('img');

  images.forEach(img => {
    const src = img.getAttribute('src');
    if (src) {
      let fileId = '';
      try {
        const url = new URL(src);
        // Handle links like https://drive.google.com/file/d/<FILE_ID>/view
        if (src.includes('drive.google.com/file/d/')) {
          const pathParts = url.pathname.split('/');
          fileId = pathParts[pathParts.indexOf('d') + 1];
        // Handle links like https://drive.google.com/open?id=<FILE_ID>
        } else if (src.includes('drive.google.com/open?id=')) {
          fileId = url.searchParams.get('id') || '';
        }

        if (fileId) {
          const newSrc = `https://drive.google.com/uc?export=view&id=${fileId}`;
          img.setAttribute('src', newSrc);
          console.log(`Transformed image src from: ${src} to: ${newSrc}`);
        } else {
          console.log(`No fileId found for src: ${src}`);
        }
      } catch (e) {
        console.error("Error transforming Google Drive image src:", e, "Original src:", src);
      }
    }
  });

  return doc.body.innerHTML;
}

export default function BlogPost() {
  const params = useParams();
  const { data: blog, isLoading, error } = useBlog(params.id as string);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex justify-center items-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (error || !blog) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col justify-center items-center">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Error loading blog</h1>
        <p className="text-gray-600 mb-4">Please try again later</p>
        <Link href="/blogs" className="text-blue-600 hover:text-blue-800">
          ← Back to Blogs
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <Link href="/blogs" className="text-blue-600 hover:text-blue-800 flex items-center">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Blogs
          </Link>
        </div>
      </nav>

      {/* Blog Content */}
      <article className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
          {/* Title Section */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 border-b border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm font-medium text-blue-600 bg-white px-3 py-1 rounded-full shadow-sm">
                {blog.category}
              </span>
              <div className="flex items-center space-x-4 text-sm text-gray-500">
                <span className="flex items-center">
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {Math.ceil(blog.content.split(' ').length / 200)} min read
                </span>
                <span className="flex items-center">
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  {new Date(blog.createdAt).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </span>
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              {blog.title}
            </h1>
            <div className="flex flex-wrap gap-2">
              {blog.tags.map((tag, index) => (
                <span
                  key={index}
                  className="text-sm font-medium px-3 py-1 rounded-full"
                  style={{
                    backgroundColor: `hsl(${(index * 137.5) % 360}, 70%, 95%)`,
                    color: `hsl(${(index * 137.5) % 360}, 70%, 30%)`
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Content */}
          <div className="p-8">
            <div 
              className="prose prose-lg max-w-none
              prose-headings:text-gray-900 prose-p:text-gray-600 prose-a:text-blue-600 prose-img:rounded-lg prose-img:shadow-md
              prose-ul:list-disc prose-ul:pl-5 prose-ol:list-decimal prose-ol:pl-5 prose-li:my-1
              prose-blockquote:border-l-4 prose-blockquote:border-blue-300 prose-blockquote:pl-4 prose-blockquote:italic
              prose-code:bg-gray-100 prose-code:p-1 prose-code:rounded prose-pre:bg-gray-800 prose-pre:text-white prose-pre:p-4 prose-pre:rounded-lg prose-pre:overflow-x-auto
              prose-strong:font-semibold prose-em:italic
              prose-table:w-full prose-table:border-collapse prose-table:table-auto prose-th:border prose-th:p-2 prose-th:text-left prose-td:border prose-td:p-2"
              dangerouslySetInnerHTML={{ __html: transformGoogleDriveImageSrc(blog.content) }}
            />
          </div>
        </div>
      </article>
    </div>
  );
} 