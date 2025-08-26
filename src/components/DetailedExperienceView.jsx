import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const DetailedExperienceView = React.memo(({ open, onClose }) => {
  const [expandedExperience, setExpandedExperience] = useState(null);
  const scrollContainerRef = useRef(null);

  const experiences = [
    {
      company: "CATHAY PACIFIC",
      role: "Digital & IT Intern", 
      period: "Jul 2025 – Aug 2025",
      description: "Delivered full-stack MVP with automated reconciliation, API standardization across teams, and managed hackathon for 600+ participants.",
      details: [
        "Delivered a full-stack MVP (React/TypeScript, Python Flask) with automated reconciliation and validation; enabled accurate, scalable cross-border calculations and streamlined financial reporting, reducing errors and manual work",
        "Assisted API standardization across teams and high-value external partners: facilitated design discussions, captured decisions in sequence/flow diagrams, and clarified endpoints, payloads, and error responses adopted by several services",
        "Supported integrations with a top-tier U.S. bank and a global technology partner, clarifying requirements, producing documentation, and executing end-to-end testing for rapid deployments across both projects",
        "Engineered automated scheduling platform by implementing rostering algorithm, improving multi-team on-call assignment efficiency and minimizing scheduling conflicts",
        "Coordinated hackathon masterclasses for 600+ participants by managing relationships between internal business units and external partners, overseeing logistics coordination and maintaining project documentation"
      ],
      technologies: ["React", "TypeScript", "Python", "Flask"]
    },
    {
      company: "WIZPRESSO",
      role: "Software Engineer Intern",
      period: "Jun 2024 - Aug 2024", 
      description: "Refactored core services reducing API latency by 22%, implemented OAuth 2.0/OIDC for 15k+ users, and led zero-downtime migration to Amazon RDS.",
      details: [
        "Refactored core services from SvelteKit/Prisma to ASP.NET Core Web API, reducing API latency by 22% (1.6s→1.24s) through async I/O, DbContext tuning, and in-memory caching; delivered improvements to 1,500+ daily users",
        "Implemented OAuth 2.0/OIDC with JWT SSO for 15k+ users; enforced secure standards (PKCE, key rotation), passing external security audits with no critical findings",
        "Led zero-downtime migration from SQL Server to Amazon RDS using AWS DMS with CDC; ensured <0.05% data variance and automated reconciliation before switchover",
        "Built and integrated new user management features across the portal stack, enhancing account administration for users"
      ],
      technologies: ["SvelteKit", "Prisma", "ASP.NET Core", "OAuth 2.0", "OIDC", "JWT", "SQL Server", "Amazon RDS", "AWS DMS"]
    },
    {
      company: "HONG KONG BAPTIST UNIVERSITY",
      role: "Research Assistant",
      period: "Jan 2024 – Aug 2024",
      description: "Adapted 7B LLM for financial sentiment analysis using PEFT-LoRA, achieving higher F1 scores than BERT with >95% fewer parameters.",
      details: [
        "Adapted a 7B LLM for financial sentiment and NER using PEFT–LoRA (4-bit QLoRA); achieved higher F1 scores than BERT with >95% fewer trainable parameters and 60–70% lower compute use",
        "Integrated the optimized model into a LangChain pipeline for large-scale financial inference",
        "Conducted research on the efficacy of using AI to read Financial Statements under Dr Kim Yoon Ho",
        "Developed comprehensive evaluation frameworks for financial text analysis models",
        "Published findings on parameter-efficient fine-tuning techniques for financial NLP"
      ],
      technologies: ["LLM", "PEFT-LoRA", "QLoRA", "BERT", "LangChain"]
    },
    {
      company: "ADMAZES",
      role: "Software Engineer Intern",
      period: "Dec 2023 - Jan 2024",
      description: "Built RAG pipeline improving QA accuracy by 25% and reducing hallucinations by ~60% through better retrieval and citation checks.",
      details: [
        "Built a RAG pipeline for a local LLM using LangChain and HuggingFace embeddings; improved QA accuracy by 25% on an internal test set and reduced hallucinations by ~60% via better retrieval and citation checks",
        "Enhanced BigQuery pipeline for RAG; boosted LLM retrieval and accuracy by 25% through SQL optimization on 50+ queries",
        "Developed comprehensive testing frameworks for LLM accuracy validation",
        "Implemented citation verification systems to reduce model hallucinations"
      ],
      technologies: ["RAG", "LLM", "LangChain", "HuggingFace", "BigQuery", "SQL"]
    },
    {
      company: "MARKWORTH",
      role: "Product Management Intern",
      period: "2022 Summer",
      description: "Part of the product team contributing to product design, implementation and discussions. Started using HTML, CSS and Javascript with Odoo.",
      details: [
        "Part of the product team contributing to product design, implementation and discussions",
        "Started using HTML, CSS and Javascript with Odoo to create websites for the company and clients",
        "Participated in client meetings and requirement gathering sessions",
        "Assisted in creating user documentation and training materials",
        "Collaborated with senior developers on complex feature implementations"
      ],
      technologies: ["HTML", "CSS", "Javascript", "Odoo"]
    },
    {
      company: "ROSARYHILL SECONDARY SCHOOL",
      role: "First Lines of Code",
      period: "2018",
      description: "ICT class introduction to programming - where Felix first encountered programming and began his coding journey.",
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
                {experiences.map((exp, index) => (
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
                        <h3 className="text-2xl font-bold text-blue-900">{exp.company}</h3>
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
