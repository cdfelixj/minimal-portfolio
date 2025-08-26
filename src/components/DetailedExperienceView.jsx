import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const DetailedExperienceView = ({ open, onClose }) => {
  const [expandedExperience, setExpandedExperience] = useState(null);

  const experiences = [
    {
      company: "CATHAY PACIFIC",
      role: "Digital & IT Intern", 
      period: "Jul 2025 – Aug 2025",
      description: "Enhanced digital transformation initiatives across multiple departments, developed automated reporting dashboards.",
      details: [
        "Built full-stack MVP for automated financial reconciliation using React/TypeScript frontend and Python Flask backend",
        "Developed automated reporting dashboards reducing manual reporting time by 65%",
        "Coordinated hackathon masterclasses for 600+ participants, managing logistics and technical workshops",
        "Implemented secure authentication and role-based access control for financial data systems",
        "Optimized database queries resulting in 40% faster data processing across multiple applications",
        "Created comprehensive API documentation and testing frameworks",
        "Led initiative to standardize API development practices across development teams"
      ],
      technologies: ["React", "TypeScript", "Python", "Flask", "PostgreSQL", "JWT", "Docker", "AWS"]
    },
    {
      company: "WIZPRESSO",
      role: "Software Engineer Intern",
      period: "Jun 2024 - Aug 2024", 
      description: "Built full-stack solutions for e-commerce platform optimization, integrated payment systems.",
      details: [
        "Refactored core services from SvelteKit/Prisma to ASP.NET Core Web API, achieving 22% reduction in API latency",
        "Implemented OAuth 2.0/OIDC authentication system serving 15,000+ active users",
        "Led zero-downtime database migration from SQL Server to Amazon RDS",
        "Designed and implemented RESTful APIs with comprehensive error handling and validation",
        "Set up automated CI/CD pipelines reducing deployment time by 60%",
        "Collaborated with frontend team to optimize API integration and improve data flow efficiency",
        "Conducted code reviews and mentored junior developers on best practices"
      ],
      technologies: ["ASP.NET Core", "C#", "Amazon RDS", "OAuth 2.0", "SQL Server", "Docker", "CI/CD", "SvelteKit"]
    },
    {
      company: "HKBU RESEARCH LAB",
      role: "AI Research Assistant",
      period: "Jan 2024 – Aug 2024",
      description: "Research on AI applications in financial document analysis, developed ML models with 95% accuracy.",
      details: [
        "Adapted a 7B parameter LLM for financial sentiment analysis using PEFT-LoRA technique",
        "Achieved higher F1 scores than traditional BERT models with 95% fewer trainable parameters",
        "Developed ML models achieving 95% accuracy in financial document classification",
        "Implemented efficient fine-tuning pipeline reducing training time by 70%",
        "Created comprehensive evaluation metrics for financial text classification",
        "Published research findings and presented at university symposium",
        "Collaborated with finance professors to validate model performance on real-world data",
        "Built automated data preprocessing pipeline for financial documents"
      ],
      technologies: ["Python", "PyTorch", "Hugging Face", "PEFT-LoRA", "Transformers", "CUDA", "TensorBoard"]
    },
    {
      company: "ADMAZES",
      role: "Software Engineer Intern",
      period: "2023 Winter",
      description: "Created functional LLM Bot with fine-tuning capabilities using Python, Streamlit and LangChain.",
      details: [
        "Developed a fully functional LLM-powered chatbot with personality customization",
        "Implemented fine-tuning capabilities allowing easy adjustment with new data",
        "Created embedding-based retrieval system for accurate information access",
        "Built intuitive Streamlit interface for non-technical users",
        "Integrated multiple LLM providers for optimal performance and cost efficiency",
        "Implemented conversation memory and context management",
        "Created comprehensive testing framework for AI behavior validation"
      ],
      technologies: ["Python", "Streamlit", "LangChain", "OpenAI API", "Hugging Face", "ChromaDB", "FAISS"]
    },
    {
      company: "MARKWORTH",
      role: "Product Management Intern",
      period: "2022 Summer",
      description: "Product design and implementation, web development with HTML, CSS, JavaScript and Odoo.",
      details: [
        "Contributed to product design discussions and implementation strategies",
        "Developed websites for company and clients using HTML, CSS, JavaScript, and Odoo",
        "Participated in client meetings and requirement gathering sessions",
        "Assisted in creating user documentation and training materials",
        "Helped optimize existing web applications for better performance",
        "Collaborated with senior developers on complex feature implementations"
      ],
      technologies: ["HTML", "CSS", "JavaScript", "Odoo", "Python", "PostgreSQL"]
    },
    {
      company: "ROSARYHILL SCHOOL",
      role: "First Lines of Code",
      period: "2018",
      description: "ICT class introduction to programming, first compilation and loops - the beginning of my coding journey.",
      details: [
        "Successfully compiled and executed first program in high school ICT class",
        "Learned fundamental programming concepts including loops and conditionals",
        "Developed problem-solving mindset through programming exercises",
        "Discovered passion for technology and software development",
        "Built strong foundation in logical thinking and algorithm design",
        "Couldn't have imagined this was the start of hours and hours of coding to come"
      ],
      technologies: ["Basic Programming Concepts", "Loops", "Conditionals", "Problem Solving"]
    }
  ];

  if (!open) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.9)',
          zIndex: 9999,
          overflow: 'auto',
        }}
      >
        <div className="min-h-screen bg-white py-16">
          <div className="max-w-6xl mx-auto px-8">
            {/* Header */}
            <div className="flex justify-between items-center mb-16">
              <div>
                <h1 className="text-5xl font-bold text-blue-900 mb-4">Complete Professional Journey</h1>
                <p className="text-xl text-gray-600">My career progression in technology and innovation</p>
              </div>
              <button 
                onClick={onClose}
                className="text-blue-900 hover:text-blue-700 transition-colors duration-300 text-2xl font-bold p-2"
              >
                ✕
              </button>
            </div>

            {/* Experience Timeline */}
            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-blue-900"></div>
              
              <div className="space-y-12">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="relative pl-12"
                  >
                    <div className="absolute left-0 w-8 h-8 bg-blue-900 rounded-full flex items-center justify-center">
                      <div className="w-3 h-3 bg-white rounded-full"></div>
                    </div>
                    
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-2xl font-bold text-blue-900">{exp.company}</h3>
                        <h4 className="text-xl font-semibold text-gray-800">{exp.role}</h4>
                        <p className="text-gray-600">{exp.period}</p>
                      </div>
                      
                      <p className="text-lg">{exp.description}</p>
                      
                      <motion.button
                        onClick={() => setExpandedExperience(expandedExperience === index ? null : index)}
                        className="text-blue-900 hover:text-blue-700 font-medium transition-colors duration-300"
                        whileHover={{ scale: 1.02 }}
                      >
                        {expandedExperience === index ? 'Show less ↑' : 'View details ↓'}
                      </motion.button>
                      
                      {expandedExperience === index && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          transition={{ duration: 0.3 }}
                          className="space-y-4"
                        >
                          <ul className="list-disc list-inside space-y-2 text-gray-700">
                            {exp.details.map((detail, detailIndex) => (
                              <li key={detailIndex}>{detail}</li>
                            ))}
                          </ul>
                          <div className="flex flex-wrap gap-2">
                            {exp.technologies.map((tech, techIndex) => (
                              <span
                                key={techIndex}
                                className="px-3 py-1 bg-blue-100 text-blue-900 rounded-full text-sm font-medium"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Back to top */}
            <div className="mt-16 pt-8 border-t border-gray-200 text-center">
              <button 
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="text-blue-900 hover:text-blue-700 font-medium transition-colors duration-300"
              >
                Back to top ↑
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default DetailedExperienceView;
