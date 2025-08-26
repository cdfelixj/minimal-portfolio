import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const DetailedProjectsView = ({ open, onClose }) => {
  const projects = [
    {
      title: "POWERLIFT E-COMMERCE", 
      description: "Full-stack e-commerce platform specializing in fitness equipment with advanced inventory management and customer analytics.",
      technical: "Built with MERN stack architecture, featuring React frontend with Redux state management, Express.js RESTful API, and MongoDB database.",
      links: ["GitHub", "Live Site"],
      githubUrl: "https://github.com/cdfelixj/powerlift-ecommerce",
      liveUrl: "https://powerlift-frontend.onrender.com"
    },
    {
      title: "READ THE VISION",
      description: "AI-powered mobile application helping visually impaired individuals navigate through real-time object detection and audio feedback.",
      technical: "Developed using TensorFlow Lite for optimized mobile ML inference, React Native for cross-platform compatibility, and Google Cloud Vision API for enhanced accuracy.",
      impact: "Secured $10,000 funding from HKBU Innovation Challenge, recognized for social impact and technical innovation.",
      links: ["GitHub", "Demo Video"],
      githubUrl: "https://github.com/cdfelixj/read-the-vision"
    },
    {
      title: "MEALMATCH",
      description: "Social impact platform connecting food donors with local charities to reduce food waste and address hunger in Hong Kong communities.",
      technical: "Built with React frontend, Firebase real-time database, Google Maps API for location services, and Hungarian Algorithm for optimal matching.",
      impact: "Facilitated over 500 successful food donations, preventing 2,000+ meals from going to waste.",
      links: ["GitHub", "Case Study"],
      githubUrl: "https://github.com/cdfelixj/mealmatch"
    },
    {
      title: "LLM PERSONAL BOT",
      description: "Intelligent conversational AI system with personality imitation capabilities using advanced language models and retrieval-augmented generation.",
      technical: "Implemented using Python with LangChain framework, Streamlit for user interface, OpenAI API integration, and ChromaDB for vector storage.",
      links: ["GitHub", "Live Demo"],
      githubUrl: "https://github.com/cdfelixj/personalBot"
    },
    {
      title: "FINANCIAL DOCUMENT CLASSIFIER",
      description: "Machine learning system for automated classification of financial documents using advanced NLP techniques and transformer models.",
      technical: "Developed with PyTorch framework, fine-tuned BERT models for domain-specific classification, achieving 95% accuracy through comprehensive data preprocessing and evaluation.",
      impact: "Achieved 95% accuracy in production testing, significantly reducing manual document processing time.",
      links: ["Research Paper", "Model Details"]
    },
    {
      title: "AUTOMATED RECONCILIATION SYSTEM",
      description: "Full-stack financial reconciliation system built during Cathay Pacific internship, automating complex financial data matching processes.",
      technical: "Built with React/TypeScript frontend and Python Flask backend, PostgreSQL database, JWT authentication, and Docker containerization.",
      impact: "Reduced manual reconciliation time from hours to minutes, improving accuracy and efficiency of financial operations.",
      links: ["Technical Overview"]
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
                <h1 className="text-5xl font-bold text-blue-900 mb-4">Complete Project Portfolio</h1>
                <p className="text-xl text-gray-600">Innovative solutions that make a meaningful impact</p>
              </div>
              <button 
                onClick={onClose}
                className="text-blue-900 hover:text-blue-700 transition-colors duration-300 text-2xl font-bold p-2"
              >
                ✕
              </button>
            </div>

            {/* Projects */}
            <div className="space-y-20">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="space-y-6"
                >
                  <h3 className="text-3xl font-bold text-blue-900">{project.title}</h3>
                  
                  {project.impact && (
                    <p className="text-xl font-medium text-gray-800">{project.impact}</p>
                  )}
                  
                  <p className="text-lg leading-relaxed">{project.description}</p>
                  
                  {project.technical && (
                    <p className="text-lg leading-relaxed text-gray-700">{project.technical}</p>
                  )}
                  
                  <div className="flex gap-4">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-900 hover:text-blue-700 font-medium hover:underline transition-colors duration-300"
                      >
                        GitHub
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-900 hover:text-blue-700 font-medium hover:underline transition-colors duration-300"
                      >
                        Live Site
                      </a>
                    )}
                    {project.links.filter(link => !['GitHub', 'Live Site'].includes(link)).map((link, linkIndex) => (
                      <span
                        key={linkIndex}
                        className="text-blue-900 hover:text-blue-700 font-medium hover:underline transition-colors duration-300 cursor-pointer"
                      >
                        {link}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
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

export default DetailedProjectsView;
