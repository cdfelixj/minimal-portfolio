import React, { useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { detailedProjects } from '../data';

const DetailedProjectsView = React.memo(({ open, onClose }) => {
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
              {detailedProjects.map((project, index) => (
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
