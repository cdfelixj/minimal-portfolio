import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Box, Container, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const HeroContainer = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: theme.palette.mode === 'dark' 
    ? 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)'
    : 'linear-gradient(135deg, #ffffff 0%, #f8fafc 50%, #e2e8f0 100%)',
  position: 'relative',
  overflow: 'hidden',
}));

const FloatingOrb = styled(motion.div)(({ theme, size, top, left, color }) => ({
  position: 'absolute',
  width: size || '200px',
  height: size || '200px',
  borderRadius: '50%',
  background: `radial-gradient(circle, ${color}40 0%, ${color}10 70%, transparent 100%)`,
  top: top || '20%',
  left: left || '20%',
  filter: 'blur(1px)',
  zIndex: 1,
}));

const NameContainer = styled(Box)({
  position: 'relative',
  zIndex: 2,
  textAlign: 'center',
});

const InteractiveNameHero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
      return () => container.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  const nameVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        staggerChildren: 0.1,
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 50, rotateX: -90 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
    hover: {
      scale: 1.1,
      rotateY: 15,
      color: '#60a5fa',
      transition: {
        duration: 0.3,
        ease: 'easeOut',
      },
    },
  };

  const orbData = [
    { size: '300px', top: '10%', left: '10%', color: '#3b82f6' },
    { size: '250px', top: '60%', left: '70%', color: '#8b5cf6' },
    { size: '180px', top: '80%', left: '20%', color: '#06b6d4' },
    { size: '220px', top: '30%', left: '80%', color: '#f59e0b' },
  ];

  const firstName = "Felix";
  const lastName = "Lau Pangestu";

  return (
    <HeroContainer ref={containerRef}>
      {/* Floating Background Orbs */}
      {orbData.map((orb, index) => (
        <FloatingOrb
          key={index}
          size={orb.size}
          top={orb.top}
          left={orb.left}
          color={orb.color}
          animate={{
            x: mousePosition.x * 0.02 * (index + 1),
            y: mousePosition.y * 0.02 * (index + 1),
            rotate: 360,
          }}
          transition={{
            x: { duration: 2, ease: 'easeOut' },
            y: { duration: 2, ease: 'easeOut' },
            rotate: { duration: 20, repeat: Infinity, ease: 'linear' },
          }}
        />
      ))}

      {/* Cursor Follower */}
      <motion.div
        style={{
          position: 'absolute',
          width: '20px',
          height: '20px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, #60a5fa80, transparent)',
          pointerEvents: 'none',
          zIndex: 3,
        }}
        animate={{
          x: mousePosition.x - 10,
          y: mousePosition.y - 10,
        }}
        transition={{
          type: 'spring',
          damping: 30,
          stiffness: 200,
        }}
      />

      <Container maxWidth="lg">
        <NameContainer>
          {/* Main Name Animation */}
          <motion.div
            variants={nameVariants}
            initial="hidden"
            animate="visible"
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
          >
            {/* First Name */}
            <Box sx={{ mb: 2 }}>
              {firstName.split('').map((letter, index) => (
                <motion.span
                  key={`first-${index}`}
                  variants={letterVariants}
                  whileHover="hover"
                  style={{
                    display: 'inline-block',
                    fontSize: 'clamp(3rem, 8vw, 8rem)',
                    fontWeight: 700,
                    marginRight: letter === ' ' ? '1rem' : '0.1em',
                    cursor: 'pointer',
                    transformOrigin: 'center',
                  }}
                >
                  {letter}
                </motion.span>
              ))}
            </Box>

            {/* Last Name */}
            <Box>
              {lastName.split('').map((letter, index) => (
                <motion.span
                  key={`last-${index}`}
                  variants={letterVariants}
                  whileHover="hover"
                  style={{
                    display: 'inline-block',
                    fontSize: 'clamp(2rem, 6vw, 6rem)',
                    fontWeight: 400,
                    marginRight: letter === ' ' ? '1rem' : '0.1em',
                    cursor: 'pointer',
                    transformOrigin: 'center',
                    opacity: 0.8,
                  }}
                >
                  {letter}
                </motion.span>
              ))}
            </Box>
          </motion.div>

          {/* Subtitle Animation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 1 }}
          >
            <Typography
              variant="h4"
              sx={{
                mt: 4,
                fontWeight: 300,
                letterSpacing: '0.1em',
                background: 'linear-gradient(45deg, #3b82f6, #8b5cf6, #06b6d4)',
                backgroundClip: 'text',
                textFillColor: 'transparent',
                fontSize: 'clamp(1rem, 3vw, 2rem)',
              }}
            >
              Full Stack Developer & Data Analytics Enthusiast
            </Typography>
          </motion.div>

          {/* Animated Underline */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{ delay: 2, duration: 1.5, ease: 'easeInOut' }}
            sx={{
              height: '2px',
              background: 'linear-gradient(90deg, #3b82f6, #8b5cf6, #06b6d4)',
              mt: 3,
              maxWidth: '300px',
              mx: 'auto',
            }}
          />

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 2.5, duration: 0.8 }}
            style={{ marginTop: '3rem' }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{
                display: 'inline-block',
                padding: '12px 32px',
                background: 'linear-gradient(45deg, #3b82f6, #8b5cf6)',
                borderRadius: '50px',
                color: 'white',
                cursor: 'pointer',
                fontSize: '1.1rem',
                fontWeight: 500,
                letterSpacing: '0.05em',
                boxShadow: '0 8px 32px rgba(59, 130, 246, 0.3)',
              }}
              onClick={() => {
                document.getElementById('about')?.scrollIntoView({ 
                  behavior: 'smooth' 
                });
              }}
            >
              Explore My Journey
            </motion.div>
          </motion.div>
        </NameContainer>
      </Container>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3, duration: 1 }}
        style={{
          position: 'absolute',
          bottom: '2rem',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 2,
        }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          style={{
            width: '2px',
            height: '30px',
            background: 'linear-gradient(to bottom, transparent, #60a5fa)',
            borderRadius: '1px',
          }}
        />
      </motion.div>
    </HeroContainer>
  );
};

export default InteractiveNameHero;
