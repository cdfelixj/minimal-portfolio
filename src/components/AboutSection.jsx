import React from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Grid, 
  Card, 
  CardContent,
  Avatar,
  Chip,
  LinearProgress,
} from '@mui/material';
import { motion } from 'framer-motion';
import { 
  School,
  EmojiEvents,
  Public,
  Psychology,
} from '@mui/icons-material';

const AboutSection = () => {
  const stats = [
    { label: 'GPA', value: '3.6/4.0', icon: <School />, color: '#3b82f6' },
    { label: 'Competitions Won', value: '3+', icon: <EmojiEvents />, color: '#f59e0b' },
    { label: 'Exchange Programs', value: '1', icon: <Public />, color: '#06b6d4' },
    { label: 'Years Coding', value: '4+', icon: <Psychology />, color: '#8b5cf6' },
  ];

  const interests = [
    'Powerlifting (1058lbs total)',
    'Rugby - University Varsity',
    'Science Fiction (Liu Cixin fan)',
    'Poker Strategy',
    'R&B Music',
    'Learning Cantonese',
  ];

  const highlights = [
    'Final-year Business Computing & Data Analytics student at HKBU',
    'Exchange semester at NTU Singapore (Fung Scholarship recipient)',
    'Chinese-Indonesian ethnicity, native English speaker',
    'First Class Honors with multiple academic scholarships',
    'AWS Student Ambassador since January 2025',
    'Founder of "Read the Vision" - computer vision startup',
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  return (
    <Box sx={{ py: 8, backgroundColor: 'background.default' }}>
      <Container maxWidth="lg">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants}>
            <Typography
              variant="h2"
              component="h2"
              sx={{
                textAlign: 'center',
                mb: 2,
                fontSize: { xs: '2.5rem', md: '3.5rem' },
                background: 'linear-gradient(45deg, #3b82f6, #8b5cf6)',
                backgroundClip: 'text',
                textFillColor: 'transparent',
                fontWeight: 700,
              }}
            >
              About Felix
            </Typography>
            <Typography
              variant="h6"
              sx={{
                textAlign: 'center',
                mb: 6,
                color: 'text.secondary',
                maxWidth: '600px',
                mx: 'auto',
                lineHeight: 1.6,
              }}
            >
              A passionate developer with a unique blend of business acumen and technical expertise
            </Typography>
          </motion.div>

          <Grid container spacing={4}>
            {/* Main Bio Card */}
            <Grid item xs={12} md={8}>
              <motion.div variants={itemVariants}>
                <Card 
                  sx={{ 
                    height: '100%',
                    background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(139, 92, 246, 0.1) 100%)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                  }}
                >
                  <CardContent sx={{ p: 4 }}>
                    <Typography variant="h4" sx={{ mb: 3, fontWeight: 600 }}>
                      Hello, I'm Felix! 👋
                    </Typography>
                    <Typography 
                      variant="body1" 
                      sx={{ 
                        mb: 3, 
                        lineHeight: 1.8,
                        fontSize: '1.1rem',
                        color: 'text.secondary',
                      }}
                    >
                      Also known as Juan Felix Pangestu, I'm a 21-year-old final-year student at Hong Kong Baptist University 
                      pursuing Business Computing & Data Analytics. With Chinese-Indonesian heritage and a passion for 
                      technology, I bridge the gap between business strategy and technical implementation.
                    </Typography>
                    
                    <Typography 
                      variant="body1" 
                      sx={{ 
                        mb: 3, 
                        lineHeight: 1.8,
                        fontSize: '1.1rem',
                        color: 'text.secondary',
                      }}
                    >
                      My journey spans from full-stack development to machine learning, with hands-on experience at 
                      companies like Cathay Pacific, Wizpresso, and Admazes. I'm particularly passionate about 
                      creating solutions that make a real impact - from financial automation systems to 
                      accessibility tools for the deaf/mute community.
                    </Typography>

                    <Box sx={{ mt: 4 }}>
                      <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                        Key Highlights:
                      </Typography>
                      <Grid container spacing={1}>
                        {highlights.map((highlight, index) => (
                          <Grid item xs={12} key={index}>
                            <motion.div
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.1 }}
                              style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '8px' }}
                            >
                              <Box
                                sx={{
                                  width: 6,
                                  height: 6,
                                  borderRadius: '50%',
                                  backgroundColor: 'primary.main',
                                  mr: 2,
                                  mt: 1,
                                  flexShrink: 0,
                                }}
                              />
                              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                {highlight}
                              </Typography>
                            </motion.div>
                          </Grid>
                        ))}
                      </Grid>
                    </Box>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>

            {/* Stats & Interests */}
            <Grid item xs={12} md={4}>
              <motion.div variants={itemVariants}>
                {/* Stats Cards */}
                <Grid container spacing={2} sx={{ mb: 3 }}>
                  {stats.map((stat, index) => (
                    <Grid item xs={6} key={index}>
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Card 
                          sx={{ 
                            textAlign: 'center',
                            background: `linear-gradient(135deg, ${stat.color}20, ${stat.color}10)`,
                            border: `1px solid ${stat.color}30`,
                          }}
                        >
                          <CardContent sx={{ py: 2 }}>
                            <Box sx={{ color: stat.color, mb: 1 }}>
                              {stat.icon}
                            </Box>
                            <Typography 
                              variant="h6" 
                              sx={{ fontWeight: 700, fontSize: '1.2rem' }}
                            >
                              {stat.value}
                            </Typography>
                            <Typography 
                              variant="caption" 
                              sx={{ color: 'text.secondary', fontSize: '0.8rem' }}
                            >
                              {stat.label}
                            </Typography>
                          </CardContent>
                        </Card>
                      </motion.div>
                    </Grid>
                  ))}
                </Grid>

                {/* Interests Card */}
                <Card 
                  sx={{ 
                    background: 'linear-gradient(135deg, rgba(6, 182, 212, 0.1) 0%, rgba(59, 130, 246, 0.1) 100%)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                  }}
                >
                  <CardContent>
                    <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                      Personal Interests
                    </Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                      {interests.map((interest, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.1 }}
                        >
                          <Chip
                            label={interest}
                            variant="outlined"
                            sx={{
                              borderColor: 'primary.main',
                              color: 'primary.main',
                              '&:hover': {
                                backgroundColor: 'primary.main',
                                color: 'white',
                              },
                            }}
                          />
                        </motion.div>
                      ))}
                    </Box>
                  </CardContent>
                </Card>

                {/* Fun Fact */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  <Card 
                    sx={{ 
                      mt: 2,
                      background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.1) 0%, rgba(139, 92, 246, 0.1) 100%)',
                      border: '1px solid rgba(245, 158, 11, 0.3)',
                    }}
                  >
                    <CardContent sx={{ textAlign: 'center' }}>
                      <Typography 
                        variant="body2" 
                        sx={{ 
                          fontStyle: 'italic',
                          color: 'text.secondary',
                        }}
                      >
                        🚴‍♂️ Fun Fact: Learned to ride a bike at 21!
                      </Typography>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
            </Grid>
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default AboutSection;
