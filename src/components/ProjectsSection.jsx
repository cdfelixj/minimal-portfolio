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
  IconButton,
} from '@mui/material';
import { motion } from 'framer-motion';
import {
  ExpandMore,
  ExpandLess,
  GitHub,
  Launch,
  Star,
  Code,
  TrendingUp,
  CheckCircle,
} from '@mui/icons-material';

const ProjectsSection = () => {
  const [expandedCard, setExpandedCard] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'PowerLift E-commerce Platform',
      category: 'Full-Stack Web Application',
      description: 'A comprehensive MERN stack e-commerce platform for fitness equipment with integrated payment processing.',
      image: '/assets/personalWebsite.png',
      color: '#3b82f6',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express.js', 'Stripe API', 'JWT', 'Render'],
      githubUrl: 'https://github.com/cdfelixj/powerlift-ecommerce',
      liveUrl: 'https://powerlift-frontend.onrender.com',
      features: [
        'Complete user authentication system with JWT tokens and secure password hashing',
        'Dynamic product catalog with search, filtering, and sorting capabilities',
        'Shopping cart functionality with persistent storage across sessions',
        'Integrated Stripe payment processing with order confirmation system',
        'Admin dashboard for product management and order tracking',
        'Responsive design optimized for mobile and desktop experiences',
        'RESTful API architecture with comprehensive error handling',
        'Deployed with separate frontend and backend hosting on Render platform',
      ],
      achievements: [
        'Successfully processed 50+ test transactions without payment failures',
        'Achieved 98% uptime with optimized database queries and caching',
        'Implemented secure authentication protecting user data and transactions',
        'Built scalable architecture supporting concurrent user sessions',
      ],
      skills: ['MERN Stack', 'Payment Integration', 'REST APIs', 'Database Design', 'Cloud Deployment'],
    },
    {
      id: 2,
      title: 'MealMatch - Food Donation Platform',
      category: 'Social Impact Application',
      description: 'A React-based platform connecting food donors with beneficiaries using advanced matching algorithms.',
      image: '/assets/react.svg',
      color: '#10b981',
      technologies: ['React', 'Firebase', 'Hungarian Algorithm', 'Google Maps API', 'Material-UI', 'Real-time Database'],
      githubUrl: 'https://github.com/cdfelixj/mealmatch',
      liveUrl: null,
      features: [
        'Real-time matching system using Hungarian Algorithm for optimal donor-beneficiary pairing',
        'Firebase Authentication with role-based access for donors and recipients',
        'Interactive map integration showing nearby donation opportunities',
        'Real-time notifications for donation status updates and matches',
        'Comprehensive donation tracking and history management',
        'Multi-language support for accessibility in diverse communities',
        'Mobile-responsive design with offline capability for essential features',
        'Analytics dashboard showing donation impact and community statistics',
      ],
      achievements: [
        'Optimized matching algorithm reducing average delivery distance by 35%',
        'Implemented real-time updates supporting 100+ concurrent users',
        'Created intuitive UI reducing user onboarding time by 60%',
        'Built scalable Firebase architecture handling high data throughput',
      ],
      skills: ['Algorithm Design', 'Real-time Systems', 'Social Impact Tech', 'Firebase', 'Geolocation APIs'],
    },
    {
      id: 3,
      title: 'Sentiment Analysis Deep Learning Suite',
      category: 'Machine Learning & NLP',
      description: 'A comprehensive NLP project comparing multiple neural network architectures for sentiment classification.',
      image: '/assets/LLMBot.png',
      color: '#f59e0b',
      technologies: ['Python', 'TensorFlow', 'Keras', 'LSTM', 'CNN', 'Attention Mechanisms', 'Jupyter', 'Pandas'],
      githubUrl: 'https://github.com/cdfelixj/sentiment-analysis-suite',
      liveUrl: null,
      features: [
        'Implemented and compared 5 different neural network architectures (RNN, LSTM, GRU, CNN, Attention)',
        'Comprehensive data preprocessing pipeline with text normalization and tokenization',
        'Advanced feature engineering including word embeddings and n-gram analysis',
        'Hyperparameter tuning using grid search and Bayesian optimization',
        'Detailed performance analysis with confusion matrices and classification reports',
        'Interactive Jupyter notebooks with step-by-step model development',
        'Visualization tools for model performance and training progress',
        'Production-ready model deployment pipeline with API endpoints',
      ],
      achievements: [
        'Achieved 81% test accuracy with attention-based model outperforming baseline by 15%',
        'Reduced training time by 40% through optimized data preprocessing',
        'Created comprehensive documentation enabling easy model reproduction',
        'Published detailed methodology and results for academic reference',
      ],
      skills: ['Deep Learning', 'NLP', 'Model Evaluation', 'Research Methodology', 'Data Science'],
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

  const ProjectCard = ({ project, index }) => {
    const isExpanded = expandedCard === project.id;

    return (
      <motion.div
        variants={itemVariants}
        whileHover={{ y: -5 }}
        transition={{ duration: 0.3 }}
      >
        <Card
          sx={{
            mb: 3,
            background: `linear-gradient(135deg, ${project.color}10 0%, ${project.color}05 100%)`,
            backdropFilter: 'blur(10px)',
            border: `1px solid ${project.color}30`,
            overflow: 'visible',
            position: 'relative',
            '&:hover': {
              border: `1px solid ${project.color}60`,
              boxShadow: `0 8px 32px ${project.color}20`,
            },
          }}
        >
          <CardContent sx={{ p: 4 }}>
            <Grid container spacing={3}>
              {/* Project Info */}
              <Grid item xs={12} md={8}>
                <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 3 }}>
                  <Avatar
                    src={project.image}
                    sx={{
                      width: 60,
                      height: 60,
                      mr: 3,
                      backgroundColor: project.color,
                    }}
                  >
                    <Code />
                  </Avatar>
                  <Box sx={{ flex: 1 }}>
                    <Typography variant="h5" sx={{ fontWeight: 700, mb: 1 }}>
                      {project.title}
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      sx={{ color: project.color, fontWeight: 600, mb: 1 }}
                    >
                      {project.category}
                    </Typography>
                    <Box sx={{ display: 'flex', gap: 1, mb: 2 }}>
                      {project.githubUrl && (
                        <IconButton
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          sx={{
                            color: project.color,
                            '&:hover': { backgroundColor: `${project.color}20` },
                          }}
                        >
                          <GitHub />
                        </IconButton>
                      )}
                      {project.liveUrl && (
                        <IconButton
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          sx={{
                            color: project.color,
                            '&:hover': { backgroundColor: `${project.color}20` },
                          }}
                        >
                          <Launch />
                        </IconButton>
                      )}
                    </Box>
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
                  {project.description}
                </Typography>

                {/* Technologies */}
                <Box sx={{ mb: 3 }}>
                  <Typography variant="subtitle2" sx={{ mb: 1, fontWeight: 600 }}>
                    Technologies Used:
                  </Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                    {project.technologies.map((tech, i) => (
                      <Chip
                        key={i}
                        label={tech}
                        size="small"
                        variant="outlined"
                        sx={{
                          borderColor: project.color,
                          color: project.color,
                          '&:hover': {
                            backgroundColor: project.color,
                            color: 'white',
                          },
                        }}
                      />
                    ))}
                  </Box>
                </Box>
              </Grid>

              {/* Project Stats */}
              <Grid item xs={12} md={4}>
                <Card
                  sx={{
                    background: 'rgba(255, 255, 255, 0.05)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    mb: 2,
                  }}
                >
                  <CardContent>
                    <Typography variant="subtitle2" sx={{ mb: 2, fontWeight: 600 }}>
                      Key Skills Developed:
                    </Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                      {project.skills.map((skill, i) => (
                        <Box key={i} sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                          <Star sx={{ fontSize: '1rem', color: project.color }} />
                          <Typography variant="body2">{skill}</Typography>
                        </Box>
                      ))}
                    </Box>
                  </CardContent>
                </Card>

                {/* Quick Actions */}
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                  {project.githubUrl && (
                    <Button
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      startIcon={<GitHub />}
                      variant="outlined"
                      fullWidth
                      sx={{
                        borderColor: project.color,
                        color: project.color,
                        '&:hover': {
                          backgroundColor: project.color,
                          color: 'white',
                        },
                      }}
                    >
                      View Code
                    </Button>
                  )}
                  {project.liveUrl && (
                    <Button
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      startIcon={<Launch />}
                      variant="contained"
                      fullWidth
                      sx={{
                        backgroundColor: project.color,
                        '&:hover': {
                          backgroundColor: `${project.color}dd`,
                        },
                      }}
                    >
                      Live Demo
                    </Button>
                  )}
                </Box>
              </Grid>
            </Grid>

            {/* Expand Button */}
            <Box sx={{ textAlign: 'center', mt: 3 }}>
              <Button
                onClick={() => handleToggleExpand(project.id)}
                endIcon={isExpanded ? <ExpandLess /> : <ExpandMore />}
                sx={{
                  color: project.color,
                  fontWeight: 600,
                  '&:hover': {
                    backgroundColor: `${project.color}20`,
                  },
                }}
              >
                {isExpanded ? 'Show Less' : 'View Detailed Features'}
              </Button>
            </Box>

            {/* Expanded Content */}
            <Collapse in={isExpanded} timeout="auto" unmountOnExit>
              <Box sx={{ mt: 3 }}>
                <Divider sx={{ mb: 3, borderColor: `${project.color}30` }} />
                
                {/* Features */}
                <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                  Key Features & Implementation:
                </Typography>
                <List sx={{ mb: 3 }}>
                  {project.features.map((feature, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <ListItem sx={{ pl: 0, py: 1 }}>
                        <ListItemIcon sx={{ minWidth: 36 }}>
                          <CheckCircle
                            sx={{ fontSize: '1.2rem', color: project.color }}
                          />
                        </ListItemIcon>
                        <ListItemText
                          primary={feature}
                          primaryTypographyProps={{
                            variant: 'body2',
                            lineHeight: 1.6,
                          }}
                        />
                      </ListItem>
                    </motion.div>
                  ))}
                </List>

                {/* Achievements */}
                <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                  Project Achievements:
                </Typography>
                <List>
                  {project.achievements.map((achievement, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <ListItem sx={{ pl: 0, py: 1 }}>
                        <ListItemIcon sx={{ minWidth: 36 }}>
                          <TrendingUp
                            sx={{ fontSize: '1.2rem', color: project.color }}
                          />
                        </ListItemIcon>
                        <ListItemText
                          primary={achievement}
                          primaryTypographyProps={{
                            variant: 'body2',
                            lineHeight: 1.6,
                            fontWeight: 600,
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
    <Box sx={{ py: 8, backgroundColor: 'background.paper' }}>
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
              Featured Projects
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
              A showcase of my most impactful projects, from full-stack applications to AI research
            </Typography>
          </motion.div>

          {/* Project Cards */}
          <Box>
            {projects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
              />
            ))}
          </Box>

          {/* More Projects Call to Action */}
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
                <GitHub sx={{ fontSize: '3rem', color: 'primary.main', mb: 2 }} />
                <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>
                  Explore More on GitHub
                </Typography>
                <Typography variant="body1" sx={{ color: 'text.secondary', mb: 3 }}>
                  These are just a few highlights from my portfolio. Visit my GitHub to see more projects, 
                  contributions, and code samples across different technologies and domains.
                </Typography>
                <Button
                  href="https://github.com/cdfelixj"
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="contained"
                  size="large"
                  startIcon={<GitHub />}
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
                  View All Projects
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </Container>
    </Box>
  );
};

export default ProjectsSection;
