import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { detailedExperiences } from '../data';

const DetailedExperienceView = React.memo(({ open, onClose }) => {
  const [expandedExperience, setExpandedExperience] = useState(null);
  const scrollContainerRef = useRef(null);


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
                <h1 className="text-5xl font-bold text-blue-900 mb-4">Complete Professional Journey</h1>
                <p className="text-xl text-gray-600">My career progression in technology and innovation</p>
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

            {/* Experience Timeline */}
            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-blue-900"></div>
              
              <div className="space-y-12">
                {detailedExperiences.map((exp, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ 
                      duration: 0.4, 
                      delay: index * 0.08,
                      ease: "easeOut"
                    }}
                    className="relative pl-12"
                  >
                    <div className="absolute left-0 w-8 h-8 bg-blue-900 rounded-full flex items-center justify-center">
                      <div className="w-3 h-3 bg-white rounded-full"></div>
                    </div>
                    
                    <div className="space-y-4">
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-2xl font-bold text-blue-900">{exp.company}</h3>
                          <motion.a
                            href={exp.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center w-8 h-8 bg-blue-100 hover:bg-blue-200 text-blue-900 rounded-full transition-colors duration-300"
                            whileHover={{ 
                              scale: 1.05,
                              transition: { duration: 0.2, ease: "easeOut" }
                            }}
                            whileTap={{ scale: 0.95 }}
                            title="Visit company website"
                          >
                            <svg 
                              className="w-4 h-4" 
                              fill="none" 
                              stroke="currentColor" 
                              viewBox="0 0 24 24" 
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                strokeWidth={2} 
                                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" 
                              />
                            </svg>
                          </motion.a>
                        </div>
                        <h4 className="text-xl font-semibold text-gray-800">{exp.role}</h4>
                        <p className="text-gray-600">{exp.period}</p>
                      </div>
                      
                      <p className="text-lg">{exp.description}</p>
                      
                      <motion.button
                        onClick={() => setExpandedExperience(expandedExperience === index ? null : index)}
                        className="text-blue-900 hover:text-blue-700 font-medium transition-colors duration-300"
                        whileHover={{ 
                          scale: 1.02,
                          transition: { duration: 0.2, ease: "easeOut" }
                        }}
                        whileTap={{ scale: 0.98 }}
                      >
                        {expandedExperience === index ? 'Show less ↑' : 'View details ↓'}
                      </motion.button>
                      
                      {expandedExperience === index && (
                        <motion.div
                          initial={{ opacity: 0, height: 0, y: -10 }}
                          animate={{ opacity: 1, height: 'auto', y: 0 }}
                          exit={{ opacity: 0, height: 0, y: -10 }}
                          transition={{ 
                            duration: 0.3,
                            ease: "easeInOut"
                          }}
                          className="space-y-4 overflow-hidden"
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

export default DetailedExperienceView;
