import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FloatingNav = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [activeSection, setActiveSection] = useState('');

    const sections = [
        { id: 'hero', label: 'About' },
        { id: 'skills', label: 'Skills' },
        { id: 'experience', label: 'Experience' },
        { id: 'projects', label: 'Projects' },
        { id: 'activities', label: 'Activities' },
        { id: 'contact', label: 'Contact' }
    ];

    useEffect(() => {
        const handleScroll = () => {
            // Show nav after scrolling past hero section
            setIsVisible(window.scrollY > 300);

            // Update active section
            const sectionElements = sections.map(section => 
                document.getElementById(section.id)
            ).filter(Boolean);

            const currentSection = sectionElements.find(element => {
                const rect = element.getBoundingClientRect();
                return rect.top <= 100 && rect.bottom >= 100;
            });

            if (currentSection) {
                setActiveSection(currentSection.id);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const downloadCV = () => {
        const link = document.createElement('a');
        link.href = '/assets/Felix Lau Pangestu_CV.pdf';
        link.download = 'Felix Lau Pangestu_CV.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div className="fixed bottom-6 left-0 right-0 z-50 flex justify-center">
                    <motion.nav
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 50 }}
                    >
                        <div className="bg-white/90 backdrop-blur-md border border-gray-200 rounded-full px-6 py-3 shadow-lg">
                            <div className="flex items-center gap-2">
                                {sections.map((section) => (
                                    <button
                                        key={section.id}
                                        onClick={() => scrollToSection(section.id)}
                                        className={`px-3 py-1 rounded-full text-sm font-medium transition-all duration-300 ${
                                            activeSection === section.id
                                                ? 'bg-blue-900 text-white'
                                                : 'text-gray-600 hover:text-blue-900 hover:bg-blue-50'
                                        }`}
                                    >
                                        {section.label}
                                    </button>
                                ))}
                                <div className="w-px h-6 bg-gray-300 mx-2"></div>
                                <button
                                    onClick={downloadCV}
                                    className="px-4 py-2 bg-blue-900 text-white rounded-full text-sm font-medium hover:bg-blue-800 transition-all duration-300 flex items-center gap-2"
                                    title="Download CV"
                                >
                                    <svg 
                                        width="16" 
                                        height="16" 
                                        viewBox="0 0 24 24" 
                                        fill="currentColor"
                                        className="inline-block"
                                    >
                                        <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z"/>
                                        <path d="M12,19L8,15H10.5V12H13.5V15H16L12,19Z"/>
                                    </svg>
                                    CV
                                </button>
                            </div>
                        </div>
                    </motion.nav>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default FloatingNav;
