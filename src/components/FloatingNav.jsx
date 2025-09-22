import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
    Fab, 
    Paper, 
    Tabs, 
    Tab, 
    Button, 
    Box, 
    Divider,
    Tooltip
} from '@mui/material';

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

    const handleTabChange = (event, newValue) => {
        scrollToSection(newValue);
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <Box
                    component={motion.div}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 50 }}
                    sx={{
                        position: 'fixed',
                        bottom: 24,
                        left: 0,
                        right: 0,
                        zIndex: 1300,
                        display: 'flex',
                        justifyContent: 'center'
                    }}
                >
                    <Paper
                        elevation={8}
                        sx={{
                            backgroundColor: 'rgba(255, 255, 255, 0.9)',
                            backdropFilter: 'blur(10px)',
                            borderRadius: '50px',
                            padding: '8px 16px',
                            display: 'flex',
                            alignItems: 'center',
                            gap: 1
                        }}
                    >
                        <Tabs
                            value={activeSection}
                            onChange={handleTabChange}
                            variant="scrollable"
                            scrollButtons="auto"
                            sx={{
                                minHeight: 'auto',
                                '& .MuiTabs-indicator': {
                                    display: 'none'
                                },
                                '& .MuiTab-root': {
                                    minHeight: 'auto',
                                    minWidth: 'auto',
                                    padding: '6px 12px',
                                    fontSize: '0.875rem',
                                    fontWeight: 500,
                                    borderRadius: '20px',
                                    margin: '0 2px',
                                    transition: 'all 0.3s',
                                    textTransform: 'none',
                                    '&.Mui-selected': {
                                        backgroundColor: 'primary.main',
                                        color: 'white',
                                    },
                                    '&:hover': {
                                        backgroundColor: 'primary.light',
                                        color: 'white',
                                    }
                                }
                            }}
                        >
                            {sections.map((section) => (
                                <Tab
                                    key={section.id}
                                    label={section.label}
                                    value={section.id}
                                />
                            ))}
                        </Tabs>
                        
                        <Divider orientation="vertical" flexItem sx={{ mx: 1 }} />
                        
                        <Tooltip title="Download CV" arrow>
                            <Button
                                onClick={downloadCV}
                                variant="contained"
                                color="primary"
                                size="small"
                                sx={{
                                    borderRadius: '20px',
                                    textTransform: 'none',
                                    fontWeight: 500,
                                    px: 2
                                }}
                            >
                                CV
                            </Button>
                        </Tooltip>
                    </Paper>
                </Box>
            )}
        </AnimatePresence>
    );
};

export default FloatingNav;
