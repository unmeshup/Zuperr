import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import WhatsAppPopup from './Components/WhatsAppPopup';
import Home from './pages/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import ComingSoon from './Components/ComingSoon';
import Blog from './Components/Blogs';

const App = () => {
  const blogPosts = [
    { 
      id: 1,
      type: 'employee',
      title: "Top 10 Resume Mistakes to Avoid and How to Fix Them", 
      excerpt: "Learn about common resume mistakes and how to fix them to make your resume stand out to potential employers.", 
      author: "Career Expert", 
      date: "2023-11-30", 
      category: "Career Advice",
      content: `
        <p>Your resume is often your first impression with potential employers. Here are common mistakes to avoid and actionable fixes to make your resume stand out:</p>
        <ul>
          <li><strong>Typos and Grammatical Errors:</strong> Proofread your resume multiple times or use tools like Grammarly.</li>
          <li><strong>Using an Overused Template:</strong> Choose modern, professional templates that are ATS-friendly.</li>
          <li><strong>Lack of Keywords:</strong> Tailor your resume with industry-specific keywords to pass ATS screening.</li>
          <li><strong>Vague Objectives:</strong> Replace generic objectives with specific achievements or career goals.</li>
          <li><strong>Irrelevant Work Experience:</strong> Focus on roles and achievements relevant to the position.</li>
          <li><strong>Excessive Length:</strong> Keep your resume concise—ideally one page for freshers and two for experienced professionals.</li>
          <li><strong>Unprofessional Email Address:</strong> Use a professional email like yourname@example.com.</li>
          <li><strong>Missing Metrics:</strong> Highlight achievements with numbers, e.g., "Increased sales by 20% in 6 months."</li>
          <li><strong>No Customization:</strong> Tailor your resume for each job you apply for.</li>
          <li><strong>Neglecting Design:</strong> Ensure consistent fonts, spacing, and clear section headings for readability.</li>
        </ul>
        <p>By addressing these issues, you increase your chances of making a positive impact on hiring managers.</p>
      `
    },
    { 
      id: 2,
      type: 'employee',
      title: "How to Ace Your Next Job Interview", 
      excerpt: "Practical tips to help you nail your next job interview and leave a lasting impression on hiring managers.", 
      author: "Interview Coach", 
      date: "2023-12-02", 
      category: "Interview Tips",
      content: `
        <p>Nail your interview with these practical tips:</p>
        <ul>
          <li><strong>Research the Company:</strong> Understand their products, services, mission, and recent achievements.</li>
          <li><strong>Understand the Job Role:</strong> Know the job description and align your skills with the requirements.</li>
          <li><strong>Practice Common Questions:</strong> Prepare answers for questions like "Tell me about yourself" or "Why should we hire you?"</li>
          <li><strong>Dress Appropriately:</strong> Wear formal attire that matches the company's culture.</li>
          <li><strong>Bring Necessary Documents:</strong> Carry multiple copies of your resume, certifications, and ID proofs.</li>
          <li><strong>Show Enthusiasm:</strong> Maintain good energy, smile, and show genuine interest in the role.</li>
          <li><strong>Ask Questions:</strong> Demonstrate interest by asking thoughtful questions about the role or company.</li>
          <li><strong>Body Language Matters:</strong> Sit upright, maintain eye contact, and use confident gestures.</li>
          <li><strong>Follow Up:</strong> Send a thank-you email expressing gratitude and reaffirming your interest.</li>
        </ul>
        <p>Preparation and confidence are the keys to leaving a lasting impression and landing the job!</p>
      `
    },
    { 
      id: 3,
      type: 'employee',
      title: "Why Local Jobs Are the Future of Recruitment", 
      excerpt: "Discover the advantages of local jobs for job seekers, employers, and communities, and how technology is shaping this trend.", 
      author: "Recruitment Analyst", 
      date: "2023-12-05", 
      category: "Job Market Trends",
      content: `
        <p>Local jobs are becoming the cornerstone of modern recruitment for several compelling reasons. Here's why this trend is gaining momentum and how it benefits job seekers, employers, and communities:</p>
        <h3>Advantages for Job Seekers</h3>
        <ul>
          <li><strong>Reduced Commute Times:</strong> Shorter travel distances improve work-life balance and decrease stress.</li>
          <li><strong>Cost Savings:</strong> Lower expenses on transportation and relocation make local jobs more appealing.</li>
          <li><strong>Familiar Environment:</strong> Working in a known locality fosters comfort and confidence.</li>
          <li><strong>Better Networking Opportunities:</strong> Building connections within the community can open more doors for career growth.</li>
        </ul>
        <h3>Benefits for Employers</h3>
        <ul>
          <li><strong>Access to Local Talent:</strong> Local hiring allows businesses to tap into a pool of skilled workers familiar with the region's culture and market.</li>
          <li><strong>Improved Retention Rates:</strong> Employees are less likely to leave due to relocation challenges, ensuring stability.</li>
          <li><strong>Faster Onboarding:</strong> Proximity accelerates hiring and integration processes.</li>
        </ul>
        <h3>Positive Community Impact</h3>
        <ul>
          <li><strong>Economic Growth:</strong> Local jobs keep talent within the community, boosting the local economy.</li>
          <li><strong>Stronger Community Ties:</strong> Employees who live and work locally are more invested in the community's success.</li>
        </ul>
        <h3>The Role of Technology</h3>
        <p>Advanced platforms like Zuperr enhance local hiring by leveraging geolocation tools and AI-powered matching to connect job seekers and employers within a specific radius, ensuring precision and efficiency.</p>
        <p>As the demand for sustainable, practical recruitment solutions rises, local jobs emerge as a promising pathway to a more connected and prosperous future for everyone involved.</p>
      `
    },
    { 
      id: 4,
      type: 'recruiter',
      title: "Effective Strategies for Talent Acquisition", 
      excerpt: "Discover innovative approaches to apporoach and attract top talent in a competitive market...", 
      author: "Michael Brown", 
      date: "2023-11-27", 
      category: "Recruitment",
      content: `
        <p>In today's competitive job market, attracting top talent requires innovative strategies. Here are some effective approaches:</p>
        <ul>
          <li><strong>Leverage Social Media:</strong> Use platforms like LinkedIn to showcase your company culture and engage with potential candidates.</li>
          <li><strong>Implement Employee Referral Programs:</strong> Encourage your current employees to refer qualified candidates.</li>
          <li><strong>Focus on Employer Branding:</strong> Develop a strong employer brand that resonates with your target candidates.</li>
          <li><strong>Offer Flexible Work Arrangements:</strong> Highlight options for remote work or flexible hours to attract a wider pool of talent.</li>
          <li><strong>Use Data-Driven Recruitment:</strong> Utilize analytics to optimize your recruitment process and improve candidate experience.</li>
        </ul>
        <p>By implementing these strategies, you can enhance your talent acquisition efforts and attract the best candidates for your organization.</p>
      `
    },
    { 
      id: 5,
      type: 'recruiter',
      title: "The Impact of AI on Hiring Processes", 
      excerpt: "Explore how Artificial Intelligence is transforming recruitment strategies in many applications...", 
      author: "Sarah Lee", 
      date: "2023-11-24", 
      category: "Technology",
      content: `
        <p>Artificial Intelligence (AI) is revolutionizing the hiring process in several ways:</p>
        <ul>
          <li><strong>Resume Screening:</strong> AI can quickly analyze resumes and match candidates to job requirements, saving time and reducing bias.</li>
          <li><strong>Chatbots for Initial Screening:</strong> AI-powered chatbots can conduct initial candidate screenings and answer basic questions.</li>
          <li><strong>Predictive Analytics:</strong> AI can predict candidate success based on data from successful employees.</li>
          <li><strong>Automated Scheduling:</strong> AI can handle interview scheduling, reducing administrative tasks.</li>
          <li><strong>Video Interview Analysis:</strong> AI can analyze candidate body language and speech patterns during video interviews.</li>
        </ul>
        <p>While AI offers many benefits, it's important to balance automation with human judgment to ensure a fair and effective hiring process.</p>
      `
    },
    { 
      id: 6,
      type: 'recruiter',
      title: "Creating an Inclusive Workplace Culture", 
      excerpt: "Learn how to foster diversity and inclusion in your organization by taking major steps...", 
      author: "David Wilson", 
      date: "2023-11-21", 
      category: "Workplace Culture",
      content: `
        <p>Building an inclusive workplace culture is crucial for attracting and retaining diverse talent.<br/> Here are some strategies:</p>
        <ul>
          <li><strong>Develop Inclusive Policies:</strong> Create and enforce policies that promote equality and prevent discrimination.</li>
          <li><strong>Provide Diversity Training:</strong> Offer regular training sessions to raise awareness about unconscious bias and promote inclusive behaviors.</li>
          <li><strong>Encourage Employee Resource Groups:</strong> Support the formation of groups that represent different demographics within your organization.</li>
          <li><strong>Celebrate Diversity:</strong> Recognize and celebrate various cultural events and holidays.</li>
          <li><strong>Ensure Diverse Leadership:</strong> Strive for diversity at all levels of the organization, especially in leadership positions.</li>
        </ul>
        <p>By fostering an inclusive culture, you can create a more innovative, productive, and harmonious workplace for all employees.</p>
      `
    }
  ];

  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-cred-black text-cred-light">
        <Navbar />
        <main className="flex-grow pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/coming-soon" element={<ComingSoon />} />
            <Route path="/blog" element={<Blog posts={blogPosts} />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppPopup />
      </div>
    </Router>
  );
};

export default App;