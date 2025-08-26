import React, { useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const DetailedProjectsView = React.memo(({ open, onClose }) => {
  const scrollContainerRef = useRef(null);
  const projects = [
    {
      title: "POWERLIFT E-COMMERCE", 
      description: "A full-stack E-Commerce platform for powerlifting equipment using the MERN stack with integrated Stripe payment processing.",
      technical: "Built with MongoDB, Express, React, and Node.js. Features admin dashboard for adding, editing, and managing products and orders.",
      links: ["GitHub", "Live Site", "Admin Dashboard"],
      githubUrl: "https://github.com/cdfelixj/powerlift-ecommerce",
      liveUrl: "https://powerlift-ecommerce-frontend.onrender.com/",
      adminUrl: "https://powerlift-ecommerce-1.onrender.com/"
    },
    {
      title: "MEALMATCH",
      description: "Web platform designed to connect food bank donors with beneficiaries in need using the Hungarian Algorithm for efficient matching.",
      technical: "Built with React, Firebase, and Leaflet.js. Features real-time dashboard to monitor food donations and distributions utilizing Firestore.",
      impact: "Engineered matching logic with Hungarian Algorithm for optimized donor-beneficiary pairing based on needs.",
      links: ["GitHub", "Case Study"],
      githubUrl: "https://github.com/cdfelixj/mealmatch"
    },
    {
      title: "MOVIE REVIEW SENTIMENT ANALYSIS",
      description: "Deep Learning NLP project for sentiment classification benchmarking multiple model architectures.",
      technical: "Benchmarked RNN, LSTM, GRU, CNN, and attention-based models using Python, PyTorch, NLTK, and Gensim.",
      impact: "Achieved up to 81% test accuracy with Word2Vec embeddings for enhanced word representation.",
      links: ["GitHub", "Results"],
      githubUrl: "https://github.com/cdfelixj/rottenTomatoesSentimentAnalysis"
    },
    {
      title: "BUDGET APP",
      description: "Personal Finance Tracker with user authentication and dynamic data visualization.",
      technical: "Built with Next.js, Firebase for secure data storage, and Chart.js for interactive charts.",
      links: ["GitHub", "Live Demo"],
      githubUrl: "https://github.com/cdfelixj/budget-app",
      liveUrl: "https://budget-app-nextjs-beta.vercel.app/"
    },
    {
      title: "PERSONAL CHATBOT",
      description: "A chatbot that acts as a digital version of Felix, providing details about educational history, work experience, hobbies and interests.",
      technical: "Built with Python, Streamlit, LangChain, and OpenHermes-2.5-Mistral-7B as base model. Scrapes LinkedIn profile and reads through CV.",
      links: ["GitHub", "Demo"],
      githubUrl: "https://github.com/cdfelixj/personalBot"
    },
    {
      title: "DISCORD BOT",
      description: "Discord bot with comprehensive user management features for server administration.",
      technical: "Developed in Java using Discord API. Features user registration via unique codes, profile linking, test score tracking, and exchange rate calculations.",
      links: ["GitHub"],
      githubUrl: "https://github.com/cdfelixj/discordBot"
    },
    {
      title: "POWERLIFTING DATA ANALYSIS",
      description: "Exploratory data analysis of powerlifting records with comprehensive data visualization.",
      technical: "Conducted using Python, Pandas, Matplotlib, and Seaborn. Visualized key metrics like Wilks score and lift-to-bodyweight ratios.",
      impact: "Cleaned and processed large dataset for comprehensive insights into powerlifting performance patterns.",
      links: ["GitHub", "Analysis"],
      githubUrl: "https://github.com/cdfelixj/powerlifting-viz"
    },
    {
      title: "DRAWIIOPROMPT",
      description: "A Chrome extension that helps you make diagrams with prompts - recently updated.",
      technical: "Developed in JavaScript as a browser extension to enhance diagramming workflow.",
      links: ["GitHub"],
      githubUrl: "https://github.com/cdfelixj/DrawIOPrompt"
    }
  ];

  if (!open) return null;

  return (
    <AnimatePresence>
      <motion.div
        ref={scrollContainerRef}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
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
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="min-h-screen bg-white py-16"
        >
          <div className="max-w-6xl mx-auto px-8">
            {/* Header */}
            <div className="flex justify-between items-center mb-16">
              <div>
                <h1 className="text-5xl font-bold text-blue-900 mb-4">Complete Project Portfolio</h1>
                <p className="text-xl text-gray-600">Innovative solutions that make a meaningful impact</p>
              </div>
              <motion.button 
                onClick={onClose}
                className="text-blue-900 hover:text-blue-700 transition-colors duration-300 text-2xl font-bold p-2"
                whileHover={{ 
                  scale: 1.1,
                  transition: { duration: 0.2, ease: "easeOut" }
                }}
                whileTap={{ scale: 0.9 }}
              >
                ✕
              </motion.button>
            </div>

            {/* Projects */}
            <div className="space-y-20">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.4, 
                    delay: index * 0.08,
                    ease: "easeOut"
                  }}
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
              <motion.button 
                onClick={() => scrollContainerRef.current?.scrollTo({ top: 0, behavior: 'smooth' })}
                className="text-blue-900 hover:text-blue-700 font-medium transition-colors duration-300"
                whileHover={{ 
                  y: -2,
                  transition: { duration: 0.2, ease: "easeOut" }
                }}
                whileTap={{ y: 0 }}
              >
                Back to top ↑
              </motion.button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
});

export default DetailedProjectsView;
