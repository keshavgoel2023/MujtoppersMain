import Link from 'next/link';

// Mock data for blogs - replace with actual data fetching
const blogs = [
  {
    id: 1,
    title: "Getting Started with Next.js",
    excerpt: "Learn how to build modern web applications with Next.js",
    date: "March 15, 2024",
    readTime: "5 min read",
    category: "Development"
  },
  {
    id: 2,
    title: "Mastering Tailwind CSS",
    excerpt: "A comprehensive guide to styling with Tailwind CSS",
    date: "March 14, 2024",
    readTime: "7 min read",
    category: "Design"
  },
  {
    id: 3,
    title: "Web Development Best Practices",
    excerpt: "Essential tips and tricks for modern web development",
    date: "March 13, 2024",
    readTime: "6 min read",
    category: "Development"
  }
];

export default function BlogsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-32">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>
        
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
              Student Resources & <br />
              <span className="text-blue-200">Academic Insights</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-2xl mx-auto leading-relaxed">
              Explore our collection of study guides, academic tips, and success stories from fellow students
            </p>

            {/* Stats */}
            <div className="flex justify-center gap-12 text-center">
              <div>
                <div className="text-3xl font-bold mb-2">100+</div>
                <div className="text-blue-200">Study Guides</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">50k+</div>
                <div className="text-blue-200">Student Success Stories</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">24/7</div>
                <div className="text-blue-200">Academic Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog List Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog) => (
              <Link
                href={`/blogs/${blog.id}`}
                key={blog.id}
                className="block"
              >
                <article
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <span className="text-sm font-medium text-blue-600 bg-blue-100 px-3 py-1 rounded-full">
                        {blog.category}
                      </span>
                    </div>
                    <h2 className="text-xl font-semibold mb-3 text-gray-900">
                      {blog.title}
                    </h2>
                    <p className="text-gray-600 mb-4">
                      {blog.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <span>{blog.date}</span>
                      <span>{blog.readTime}</span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
