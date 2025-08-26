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
      description: "Delivered full-stack MVP with automated reconciliation, managed hackathon masterclasses for 600+ participants, and built enterprise documentation systems.",
      details: [
        "Delivered an 8‑week full‑stack MVP (React/TypeScript + Python Flask) grounded in clear UML workflows/data models; integrated validation, rate versioning, and a jurisdictional rule engine to ensure accurate, scalable cross‑border calculations and reduce miscalculation risk",
        "Automated reconciliation and monthly reporting for ~40K shipment packets, covering ~HKD 10M in tariffs; reduced manual effort by hours and improved auditability with clear lineage from source data through computed tariffs and adjustments",
        "Assisted API standardization across teams and external partners: helped run design discussions, captured decisions in sequence/flow diagrams, and clarified endpoints, payloads, and error responses adopted by several services",
        "Coordinated technical hackathon masterclasses for 600+ participants by managing cross-functional relationships between internal business units and external partners, overseeing logistics coordination and maintaining comprehensive project documentation",
        "Built automated scheduling system reducing manual effort by creating VBA-powered rostering algorithm, optimizing multi-team on-call assignments and reducing scheduling conflicts",
        "Developed enterprise CLM documentation suite achieving faster user onboarding by creating structured guides, process workflows, and delegation frameworks, enabling efficient system adoption for 50+ cross-functional users"
      ],
      technologies: ["React", "TypeScript", "Python", "Flask", "UML", "VBA"]
    },
    {
      company: "WIZPRESSO",
      role: "Software Engineer Intern",
      period: "Jun 2024 - Aug 2024", 
      description: "Replatformed key services reducing API latency by 22%, implemented secure OAuth 2.0/OIDC for 15k+ users, and led zero-downtime production migration.",
      details: [
        "Replatformed key services from SvelteKit + Prisma to ASP.NET Core Web API, cutting median API latency ~22% (1.6s to 1.24s) by optimizing async I/O, tuning DbContext usage/connection settings, and adding in-memory caching for hot read endpoints; serving 1,500+ DAUs",
        "Implemented OAuth 2.0/OIDC with JWT (RS256), enabling SSO for 15k+ accounts; enforced PKCE for SPA/mobile clients, rotating keys via JWKS. Passed external pen test and SOC 2 controls review with no high/critical findings",
        "Led production migration from SQL Server to Amazon RDS using AWS DMS with CDC and parallel load; achieved zero-downtime cutover with <0.05% variance pre-cutover, verified via row-count and checksum reconciliation; discrepancies auto-remediated before final switch",
        "Developed 15 new features and optimized 10 existing ones using the Svelte framework. Improving portal speed by 20%, leading to an increase in user engagement and a 20% reduction in load times",
        "Collaborated effectively with cross-functional teams utilizing agile methodologies and Jira to enhance project delivery and responsiveness to change"
      ],
      technologies: ["SvelteKit", "Prisma", "ASP.NET Core", "OAuth 2.0", "OIDC", "JWT", "SQL Server", "Amazon RDS", "AWS DMS", "Jira"]
    },
    {
      company: "HONG KONG BAPTIST UNIVERSITY",
      role: "Research Assistant",
      period: "Jan 2024 – Aug 2024",
      description: "Domain-adapted 7B LLM for financial sentiment analysis using PEFT-LoRA, achieving superior F1 scores vs BERT with 95% fewer parameters.",
      details: [
        "Domain-adapted a 7B LLM for financial sentiment and NER using PEFT–LoRA in Transformers (4‑bit QLoRA), training on 20,000+ earnings-call transcripts; improved task F1 scores vs. BERT baselines while reducing trainable params by >95% and compute/memory by ~60–70% and integrated the model into a LangChain pipeline for large-scale inference",
        "Conducted research and finetuning of a Large Language Model through LangChain to analyze earnings 20,000 call transcripts and conferences, significantly enhancing its capabilities in classification and sentiment analysis",
        "Authored detailed documentation on research progress regarding the efficacy of using Large Language Models to process corporate financial statements"
      ],
      technologies: ["LLM", "PEFT-LoRA", "QLoRA", "BERT", "LangChain", "Transformers", "Financial NLP"]
    },
    {
      company: "ADMAZES",
      role: "Software Engineer Intern",
      period: "Dec 2023 - Jan 2024",
      description: "Enhanced Local LLM with RAG pipeline improving QA accuracy by 25% and optimized BigQuery infrastructure for 30% better retrieval performance.",
      details: [
        "Enhanced a Local Large Language Model using LangChain, HuggingFace, and Streamlit, improving response accuracy by 25% through better semantic understanding and advanced search capabilities with the RAG approach",
        "Built a RAG pipeline for a local LLM using LangChain and HuggingFace embeddings; improved QA accuracy by 25% on an internal test set and reduced hallucinations by ~60% via better retrieval and citation checks",
        "Optimized BigQuery analytics infrastructure using advanced SQL techniques including partition pruning, query parallelization, and columnar scanning, executing 50+ complex queries with JOINs and window functions to achieve 30% retrieval performance improvement",
        "Analyzed datasets with Google BigQuery, optimizing data retrieval by 30% and generating insights with 100+ complex SQL queries, leading to a 20% boost in operational efficiency"
      ],
      technologies: ["RAG", "LLM", "LangChain", "HuggingFace", "BigQuery", "SQL", "Streamlit"]
    },
    {
      company: "MARKWORTH",
      role: "Product Management Intern",
      period: "May 2023 - Aug 2023",
      description: "Integrated websites with Odoo's backend ERP system and supported full product development lifecycle through market research and cross-functional collaboration.",
      details: [
        "Integrated and developed websites with Odoo's backend ERP system to pull product catalogs, service listings, project details and events dynamically",
        "Supported the full product development lifecycle by conducting market research, creating requirements docs, developing prototypes, tracking metrics, and working cross-functionally with multiple departments",
        "Part of the product team contributing to product design, implementation and discussions",
      ],
      technologies: ["HTML", "CSS", "Javascript", "Odoo", "ERP Systems"]
    },
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
