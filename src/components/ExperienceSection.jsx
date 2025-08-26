import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Chip,
  Button,
  Collapse,
  Avatar,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
} from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ExpandMore,
  ExpandLess,
  WorkRounded,
  CalendarToday,
  LocationOn,
  TrendingUp,
  CheckCircle,
} from '@mui/icons-material';

const ExperienceSection = () => {
  const [expandedCard, setExpandedCard] = useState(null);

  const experiences = [
    {
      id: 1,
      company: 'Cathay Pacific',
      position: 'Full Stack Developer Intern',
      duration: 'July - August 2025',
      location: 'Hong Kong',
      type: 'Internship',
      logo: '/public/assets/cathay-logo.png', // You'll need to add this
      color: '#00a650',
      shortDescription: 'Developed full-stack MVP for automated financial reconciliation using React/TypeScript and Python Flask.',
      achievements: [
        'Built full-stack MVP for automated financial reconciliation using React/TypeScript frontend and Python Flask backend',
        'Assisted API standardization initiatives across multiple development teams',
        'Coordinated hackathon masterclasses for 600+ participants, managing logistics and technical workshops',
        'Implemented secure authentication and role-based access control for financial data',
        'Optimized database queries resulting in 40% faster data processing',
        'Created comprehensive API documentation and testing frameworks',
      ],
      technologies: ['React', 'TypeScript', 'Python', 'Flask', 'PostgreSQL', 'JWT', 'Docker'],
      skills: ['Full-Stack Development', 'API Design', 'Financial Technology', 'Event Management'],
    },
    {
      id: 2,
      company: 'Wizpresso',
      position: 'Backend Developer Intern',
      duration: 'June - August 2024',
      location: 'Hong Kong',
      type: 'Internship',
      logo: '/public/assets/wizpresso-logo.png', // You'll need to add this
      color: '#6366f1',
      shortDescription: 'Refactored core services achieving 22% API latency reduction and implemented OAuth 2.0 for 15,000+ users.',
      achievements: [
        'Refactored core services from SvelteKit/Prisma to ASP.NET Core Web API, achieving 22% reduction in API latency',
        'Implemented OAuth 2.0/OIDC authentication system serving 15,000+ active users',
        'Led zero-downtime database migration from SQL Server to Amazon RDS',
        'Designed and implemented RESTful APIs with comprehensive error handling',
        'Set up automated CI/CD pipelines reducing deployment time by 60%',
        'Collaborated with frontend team to optimize API integration and data flow',
      ],
      technologies: ['ASP.NET Core', 'C#', 'Amazon RDS', 'OAuth 2.0', 'SQL Server', 'Docker', 'CI/CD'],
      skills: ['Backend Architecture', 'Database Migration', 'Authentication Systems', 'DevOps'],
    },
    {
      id: 3,
      company: 'HKBU Research Lab',
      position: 'AI Research Assistant',
      duration: 'March - June 2024',
      location: 'Hong Kong',
      type: 'Research',
      logo: '/public/assets/hkbu-logo.png', // You'll need to add this
      color: '#f59e0b',
      shortDescription: 'Adapted 7B LLM for financial sentiment analysis using PEFT-LoRA, achieving higher F1 scores than BERT.',
      achievements: [
        'Adapted a 7B parameter LLM for financial sentiment analysis using PEFT-LoRA technique',
        'Achieved higher F1 scores than traditional BERT models with 95% fewer trainable parameters',
        'Implemented efficient fine-tuning pipeline reducing training time by 70%',
        'Created comprehensive evaluation metrics for financial text classification',
        'Published research findings and presented at university symposium',
        'Collaborated with finance professors to validate model performance on real-world data',
      ],
      technologies: ['Python', 'PyTorch', 'Hugging Face', 'PEFT-LoRA', 'Transformers', 'CUDA'],
      skills: ['Machine Learning', 'NLP', 'Research Methodology', 'Academic Writing'],
    },
  ];

  const handleToggleExpand = (cardId) => {
    setExpandedCard(expandedCard === cardId ? null : cardId);
  };

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

  const ExperienceCard = ({ experience, index }) => {
    const isExpanded = expandedCard === experience.id;

    return (
      <motion.div
        variants={itemVariants}
        whileHover={{ y: -5 }}
        transition={{ duration: 0.3 }}
      >
        <Card
          sx={{
            mb: 3,
            background: `linear-gradient(135deg, ${experience.color}10 0%, ${experience.color}05 100%)`,
            backdropFilter: 'blur(10px)',
            border: `1px solid ${experience.color}30`,
            overflow: 'visible',
            position: 'relative',
            '&:hover': {
              border: `1px solid ${experience.color}60`,
              boxShadow: `0 8px 32px ${experience.color}20`,
            },
          }}
        >
          <CardContent sx={{ p: 4 }}>
            <Grid container spacing={3}>
              {/* Company Info */}
              <Grid item xs={12} md={8}>
                <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 3 }}>
                  <Avatar
                    sx={{
                      width: 60,
                      height: 60,
                      mr: 3,
                      backgroundColor: experience.color,
                      fontSize: '1.5rem',
                      fontWeight: 'bold',
                    }}
                  >
                    {experience.company[0]}
                  </Avatar>
                  <Box sx={{ flex: 1 }}>
                    <Typography variant="h5" sx={{ fontWeight: 700, mb: 1 }}>
                      {experience.position}
                    </Typography>
                    <Typography
                      variant="h6"
                      sx={{ color: experience.color, fontWeight: 600, mb: 1 }}
                    >
                      {experience.company}
                    </Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, mb: 2 }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                        <CalendarToday sx={{ fontSize: '1rem', color: 'text.secondary' }} />
                        <Typography variant="body2" color="text.secondary">
                          {experience.duration}
                        </Typography>
                      </Box>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                        <LocationOn sx={{ fontSize: '1rem', color: 'text.secondary' }} />
                        <Typography variant="body2" color="text.secondary">
                          {experience.location}
                        </Typography>
                      </Box>
                    </Box>
                    <Chip
                      label={experience.type}
                      size="small"
                      sx={{
                        backgroundColor: experience.color,
                        color: 'white',
                        fontWeight: 600,
                      }}
                    />
                  </Box>
                </Box>

                <Typography
                  variant="body1"
                  sx={{
                    lineHeight: 1.7,
                    color: 'text.secondary',
                    mb: 3,
                  }}
                >
                  {experience.shortDescription}
                </Typography>

                {/* Technologies */}
                <Box sx={{ mb: 3 }}>
                  <Typography variant="subtitle2" sx={{ mb: 1, fontWeight: 600 }}>
                    Technologies Used:
                  </Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                    {experience.technologies.map((tech, i) => (
                      <Chip
                        key={i}
                        label={tech}
                        size="small"
                        variant="outlined"
                        sx={{
                          borderColor: experience.color,
                          color: experience.color,
                          '&:hover': {
                            backgroundColor: experience.color,
                            color: 'white',
                          },
                        }}
                      />
                    ))}
                  </Box>
                </Box>
              </Grid>

              {/* Quick Stats */}
              <Grid item xs={12} md={4}>
                <Card
                  sx={{
                    background: 'rgba(255, 255, 255, 0.05)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                  }}
                >
                  <CardContent>
                    <Typography variant="subtitle2" sx={{ mb: 2, fontWeight: 600 }}>
                      Key Skills Developed:
                    </Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                      {experience.skills.map((skill, i) => (
                        <Box key={i} sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                          <TrendingUp sx={{ fontSize: '1rem', color: experience.color }} />
                          <Typography variant="body2">{skill}</Typography>
                        </Box>
                      ))}
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>

            {/* Expand Button */}
            <Box sx={{ textAlign: 'center', mt: 3 }}>
              <Button
                onClick={() => handleToggleExpand(experience.id)}
                endIcon={isExpanded ? <ExpandLess /> : <ExpandMore />}
                sx={{
                  color: experience.color,
                  fontWeight: 600,
                  '&:hover': {
                    backgroundColor: `${experience.color}20`,
                  },
                }}
              >
                {isExpanded ? 'Show Less' : 'View Detailed Achievements'}
              </Button>
            </Box>

            {/* Expanded Content */}
            <Collapse in={isExpanded} timeout="auto" unmountOnExit>
              <Box sx={{ mt: 3 }}>
                <Divider sx={{ mb: 3, borderColor: `${experience.color}30` }} />
                <Typography variant="h6" sx={{ mb: 3, fontWeight: 600 }}>
                  Key Achievements & Responsibilities:
                </Typography>
                <List>
                  {experience.achievements.map((achievement, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <ListItem sx={{ pl: 0, py: 1 }}>
                        <ListItemIcon sx={{ minWidth: 36 }}>
                          <CheckCircle
                            sx={{ fontSize: '1.2rem', color: experience.color }}
                          />
                        </ListItemIcon>
                        <ListItemText
                          primary={achievement}
                          primaryTypographyProps={{
                            variant: 'body2',
                            lineHeight: 1.6,
                          }}
                        />
                      </ListItem>
                    </motion.div>
                  ))}
                </List>
              </Box>
            </Collapse>
          </CardContent>
        </Card>
      </motion.div>
    );
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
              Professional Experience
            </Typography>
            <Typography
              variant="h6"
              sx={{
                textAlign: 'center',
                mb: 6,
                color: 'text.secondary',
                maxWidth: '600px',
                mx: 'auto',
              }}
            >
              My journey through internships and research roles, building expertise in full-stack development and AI
            </Typography>
          </motion.div>

          {/* Experience Cards */}
          <Box>
            {experiences.map((experience, index) => (
              <ExperienceCard
                key={experience.id}
                experience={experience}
                index={index}
              />
            ))}
          </Box>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
          >
            <Card
              sx={{
                mt: 6,
                textAlign: 'center',
                background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(139, 92, 246, 0.1) 100%)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
              }}
            >
              <CardContent sx={{ p: 4 }}>
                <WorkRounded sx={{ fontSize: '3rem', color: 'primary.main', mb: 2 }} />
                <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>
                  Ready for New Challenges
                </Typography>
                <Typography variant="body1" sx={{ color: 'text.secondary', mb: 3 }}>
                  With hands-on experience across different industries and technologies, 
                  I'm excited to contribute to innovative projects and continue growing as a developer.
                </Typography>
                <Button
                  variant="contained"
                  size="large"
                  onClick={() => {
                    document.getElementById('contact')?.scrollIntoView({ 
                      behavior: 'smooth' 
                    });
                  }}
                  sx={{
                    background: 'linear-gradient(45deg, #3b82f6, #8b5cf6)',
                    borderRadius: '25px',
                    px: 4,
                    py: 1.5,
                    textTransform: 'none',
                    fontWeight: 600,
                    fontSize: '1.1rem',
                  }}
                >
                  Let's Work Together
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </Container>
    </Box>
  );
};

export default ExperienceSection;
