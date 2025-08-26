import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Box,
  Button,
  useScrollTrigger,
  Slide,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { 
  LightMode, 
  DarkMode, 
  Menu as MenuIcon,
  Download,
  Close
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import CV from "/assets/Juan-Felix-Pangestu_CV.pdf";

const NavigationBar = ({ darkMode, toggleTheme }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  
  const trigger = useScrollTrigger({
    target: window,
  });

  const navItems = [
    { name: 'Home', id: 'hero' },
    { name: 'About', id: 'about' },
    { name: 'Skills', id: 'skills' },
    { name: 'Experience', id: 'experience' },
    { name: 'Projects', id: 'projects' },
    { name: 'Contact', id: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
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
    setDrawerOpen(false);
  };

  const NavButton = ({ item }) => (
    <Button
      onClick={() => scrollToSection(item.id)}
      sx={{
        color: activeSection === item.id ? 'primary.main' : 'text.primary',
        fontWeight: activeSection === item.id ? 600 : 400,
        mx: 1,
        position: 'relative',
        '&::after': {
          content: '""',
          position: 'absolute',
          bottom: -2,
          left: '50%',
          transform: 'translateX(-50%)',
          width: activeSection === item.id ? '80%' : '0%',
          height: '2px',
          backgroundColor: 'primary.main',
          transition: 'width 0.3s ease-in-out',
        },
        '&:hover::after': {
          width: '80%',
        },
      }}
    >
      {item.name}
    </Button>
  );

  return (
    <>
      <Slide appear={false} direction="down" in={!trigger}>
        <AppBar 
          position="fixed" 
          sx={{ 
            backgroundColor: darkMode ? 'rgba(15, 23, 42, 0.9)' : 'rgba(255, 255, 255, 0.9)',
            backdropFilter: 'blur(10px)',
            borderBottom: `1px solid ${darkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'}`,
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
          }}
        >
          <Toolbar sx={{ justifyContent: 'space-between' }}>
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Typography
                variant="h6"
                component="div"
                sx={{
                  fontWeight: 700,
                  background: 'linear-gradient(45deg, #3b82f6, #8b5cf6)',
                  backgroundClip: 'text',
                  textFillColor: 'transparent',
                  cursor: 'pointer',
                }}
                onClick={() => scrollToSection('hero')}
              >
                Felix.dev
              </Typography>
            </motion.div>

            {/* Desktop Navigation */}
            {!isMobile && (
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <NavButton item={item} />
                  </motion.div>
                ))}
              </Box>
            )}

            {/* Actions */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              {/* CV Download */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  href={CV}
                  target="_blank"
                  rel="noopener noreferrer"
                  startIcon={<Download />}
                  variant="outlined"
                  sx={{
                    borderRadius: '25px',
                    textTransform: 'none',
                    fontWeight: 500,
                  }}
                >
                  CV
                </Button>
              </motion.div>

              {/* Theme Toggle */}
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <IconButton onClick={toggleTheme} color="inherit">
                  {darkMode ? <LightMode /> : <DarkMode />}
                </IconButton>
              </motion.div>

              {/* Mobile Menu */}
              {isMobile && (
                <IconButton
                  color="inherit"
                  onClick={() => setDrawerOpen(true)}
                >
                  <MenuIcon />
                </IconButton>
              )}
            </Box>
          </Toolbar>
        </AppBar>
      </Slide>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        PaperProps={{
          sx: {
            width: 280,
            background: darkMode 
              ? 'linear-gradient(135deg, #1e293b 0%, #334155 100%)'
              : 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
          },
        }}
      >
        <Box sx={{ p: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="h6" sx={{ fontWeight: 700 }}>
            Menu
          </Typography>
          <IconButton onClick={() => setDrawerOpen(false)}>
            <Close />
          </IconButton>
        </Box>
        
        <List>
          {navItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <ListItem 
                button 
                onClick={() => scrollToSection(item.id)}
                sx={{
                  backgroundColor: activeSection === item.id ? 'primary.main' : 'transparent',
                  color: activeSection === item.id ? 'white' : 'text.primary',
                  '&:hover': {
                    backgroundColor: 'primary.main',
                    color: 'white',
                  },
                }}
              >
                <ListItemText 
                  primary={item.name}
                  primaryTypographyProps={{
                    fontWeight: activeSection === item.id ? 600 : 400,
                  }}
                />
              </ListItem>
            </motion.div>
          ))}
        </List>
      </Drawer>
    </>
  );
};

export default NavigationBar;
