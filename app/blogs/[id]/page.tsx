import Link from 'next/link';

// Mock data for blog posts - replace with actual data fetching
const blogPosts = {
  1: {
    id: 1,
    title: "Effective Study Techniques for College Success",
    content: `Success in college requires more than just attending classes and completing assignments. It demands effective study techniques that help you retain information and perform well in exams. Let's explore some proven strategies that can help you excel in your academic journey.

## The Pomodoro Technique

One of the most effective study methods is the Pomodoro Technique:
- Study for 25 minutes
- Take a 5-minute break
- After 4 sessions, take a longer break
- Repeat the cycle

This method helps maintain focus and prevents burnout.

## Active Learning Strategies

### 1. Note-Taking Methods
- Cornell Method
- Mind Mapping
- Outline Method
- Charting Method

### 2. Study Groups
- Form study groups with classmates
- Teach concepts to others
- Discuss difficult topics
- Share resources and notes

## Time Management

1. Create a study schedule
2. Prioritize tasks
3. Use a planner or digital calendar
4. Set realistic goals
5. Take regular breaks

## Exam Preparation

- Start studying early
- Review past exams
- Practice with sample questions
- Get enough sleep before exams
- Stay hydrated and eat well

Remember, everyone learns differently. Find the techniques that work best for you and stick to them!`,
    date: "March 15, 2024",
    readTime: "5 min read",
    category: "Study Tips",
    author: {
      name: "Dr. Sarah Johnson",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
      role: "Academic Advisor"
    }
  },
  2: {
    id: 2,
    title: "Balancing Academics and Extracurricular Activities",
    content: `Finding the right balance between academics and extracurricular activities is crucial for a well-rounded college experience. Here's how you can manage both effectively.

## Time Management Strategies

### 1. Create a Weekly Schedule
- Block time for classes
- Schedule study sessions
- Allocate time for activities
- Include breaks and rest

### 2. Prioritize Tasks
- Use the Eisenhower Matrix
- Focus on important deadlines
- Learn to say no when necessary
- Delegate when possible

## Benefits of Extracurricular Activities

1. Skill Development
   - Leadership
   - Teamwork
   - Communication
   - Time management

2. Networking Opportunities
   - Meet like-minded peers
   - Connect with professionals
   - Build your resume
   - Create lasting friendships

## Tips for Success

- Choose activities you're passionate about
- Don't overcommit
- Stay organized
- Maintain a healthy lifestyle
- Ask for help when needed

Remember, quality over quantity. It's better to excel in a few activities than to be mediocre in many.`,
    date: "March 14, 2024",
    readTime: "7 min read",
    category: "Student Life",
    author: {
      name: "Prof. Michael Chen",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Michael",
      role: "Student Affairs Director"
    }
  },
  3: {
    id: 3,
    title: "Navigating College Finances: A Student's Guide",
    content: `Managing finances in college can be challenging, but with the right knowledge and planning, you can make smart financial decisions. Let's explore some essential tips for managing your college finances.

## Budgeting Basics

### 1. Track Your Expenses
- Use budgeting apps
- Keep receipts
- Review monthly statements
- Set spending limits

### 2. Essential Expenses
- Tuition and fees
- Books and supplies
- Housing
- Food
- Transportation

## Saving Strategies

1. Look for Student Discounts
   - Software
   - Transportation
   - Entertainment
   - Shopping

2. Smart Shopping
   - Buy used textbooks
   - Cook meals at home
   - Use public transportation
   - Share expenses with roommates

## Financial Aid and Scholarships

- Apply for scholarships early
- Research grants
- Consider work-study programs
- Explore part-time jobs

## Building Credit

- Get a student credit card
- Pay bills on time
- Keep credit utilization low
- Monitor your credit score

Remember, good financial habits now will benefit you long after graduation!`,
    date: "March 13, 2024",
    readTime: "6 min read",
    category: "Financial Tips",
    author: {
      name: "Dr. Emily Rodriguez",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emily",
      role: "Financial Aid Advisor"
    }
  }
};

export default function BlogPost({ params }: { params: { id: string } }) {
  const post = blogPosts[params.id as keyof typeof blogPosts];

  if (!post) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Post Not Found</h1>
          <Link href="/blogs" className="text-blue-600 hover:text-blue-800">
            Return to Blogs
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Link href="/blogs" className="text-blue-200 hover:text-white mb-8 inline-block">
              ← Back to Blogs
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{post.title}</h1>
            <div className="flex items-center space-x-4">
              <img
                src={post.author.avatar}
                alt={post.author.name}
                className="w-12 h-12 rounded-full"
              />
              <div>
                <div className="font-semibold">{post.author.name}</div>
                <div className="text-sm text-blue-200">{post.author.role}</div>
              </div>
            </div>
            <div className="mt-6 flex items-center space-x-4 text-sm">
              <span>{post.date}</span>
              <span>•</span>
              <span>{post.readTime}</span>
              <span>•</span>
              <span className="bg-blue-500 px-3 py-1 rounded-full">
                {post.category}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <article className="prose prose-lg max-w-none">
              {post.content.split('\n\n').map((paragraph, index) => (
                <p key={index} className="mb-6">
                  {paragraph}
                </p>
              ))}
            </article>
          </div>
        </div>
      </section>
    </div>
  );
} 