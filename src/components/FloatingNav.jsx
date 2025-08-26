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

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.nav
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 50 }}
                    className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50"
                >
                    <div className="bg-white/90 backdrop-blur-md border border-gray-200 rounded-full px-6 py-3 shadow-lg">
                        <div className="flex gap-2">
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
                        </div>
                    </div>
                </motion.nav>
            )}
        </AnimatePresence>
    );
};

export default FloatingNav;
