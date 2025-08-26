import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Chip,
  LinearProgress,
  Tabs,
  Tab,
  Avatar,
} from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Code,
  Storage,
  Cloud,
  Psychology,
  DeviceHub,
  BrushRounded,
} from '@mui/icons-material';

const TechnicalSkills = () => {
  const [activeTab, setActiveTab] = useState(0);

  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: <Code />,
      color: '#3b82f6',
      skills: [
        { name: 'JavaScript/TypeScript', level: 90, icon: '/assets/skills/javascript-svgrepo-com.svg' },
        { name: 'Python', level: 85, icon: '/assets/skills/python-127-svgrepo-com.svg' },
        { name: 'Java', level: 80, icon: '/assets/skills/java.svg' },
        { name: 'C#', level: 75, icon: '/assets/skills/695px-C_Programming_Language.svg.png' },
        { name: 'SQL', level: 85, icon: '/assets/skills/sql-svgrepo-com.svg' },
        { name: 'HTML/CSS', level: 90, icon: '/assets/skills/1024px-HTML5_Badge.svg.png' },
      ],
    },
    {
      title: 'Frameworks & Libraries',
      icon: <DeviceHub />,
      color: '#8b5cf6',
      skills: [
        { name: 'React/Next.js', level: 90 },
        { name: 'Express.js/Node.js', level: 85 },
        { name: 'ASP.NET Core', level: 75 },
        { name: 'Spring Boot', level: 70 },
        { name: 'Flask', level: 80 },
        { name: 'Svelte/SvelteKit', level: 75 },
        { name: 'TailwindCSS', level: 90 },
        { name: 'Bootstrap', level: 85 },
      ],
    },
    {
      title: 'Databases & Cloud',
      icon: <Storage />,
      color: '#06b6d4',
      skills: [
        { name: 'MongoDB', level: 85, icon: '/assets/skills/mongodb-icon-1.svg' },
        { name: 'MySQL', level: 80 },
        { name: 'Firebase', level: 85 },
        { name: 'AWS RDS', level: 75 },
        { name: 'BigQuery', level: 70 },
        { name: 'Amazon S3', level: 80 },
        { name: 'AWS Lambda', level: 70 },
      ],
    },
    {
      title: 'AI & Machine Learning',
      icon: <Psychology />,
      color: '#f59e0b',
      skills: [
        { name: 'TensorFlow/Keras', level: 75 },
        { name: 'PyTorch', level: 70 },
        { name: 'LangChain', level: 80 },
        { name: 'Hugging Face', level: 75 },
        { name: 'PEFT-LoRA', level: 70 },
        { name: 'Sentiment Analysis', level: 80 },
        { name: 'RAG Pipelines', level: 75 },
      ],
    },
    {
      title: 'Tools & Platforms',
      icon: <Cloud />,
      color: '#10b981',
      skills: [
        { name: 'Git/GitHub', level: 90 },
        { name: 'Docker', level: 75 },
        { name: 'AWS Services', level: 80 },
        { name: 'Vite/Webpack', level: 80 },
        { name: 'Prisma ORM', level: 75 },
        { name: 'Stripe API', level: 80 },
        { name: 'OAuth 2.0/OIDC', level: 85 },
      ],
    },
    {
      title: 'Design & Analytics',
      icon: <BrushRounded />,
      color: '#ef4444',
      skills: [
        { name: 'R/RStudio', level: 80, icon: '/assets/skills/r-lang.svg' },
        { name: 'Tableau', level: 75, icon: '/assets/skills/tableau-logo-1.svg' },
        { name: 'Adobe Photoshop', level: 70 },
        { name: 'Blender', level: 60 },
        { name: 'Data Visualization', level: 80 },
        { name: 'Statistical Analysis', level: 75 },
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  const SkillCard = ({ skill, delay = 0 }) => (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 0.5 }}
      whileHover={{ scale: 1.02 }}
    >
      <Card
        sx={{
          height: '100%',
          background: 'rgba(255, 255, 255, 0.05)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          '&:hover': {
            background: 'rgba(255, 255, 255, 0.1)',
            border: '1px solid rgba(59, 130, 246, 0.3)',
          },
        }}
      >
        <CardContent sx={{ p: 3 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            {skill.icon && (
              <Avatar
                src={skill.icon}
                sx={{ width: 32, height: 32, mr: 2 }}
                variant="rounded"
              />
            )}
            <Typography variant="h6" sx={{ fontWeight: 600, flex: 1 }}>
              {skill.name}
            </Typography>
          </Box>
          
          <Box sx={{ mb: 1 }}>
            <Typography variant="body2" sx={{ color: 'text.secondary', mb: 1 }}>
              Proficiency: {skill.level}%
            </Typography>
            <LinearProgress
              variant="determinate"
              value={skill.level}
              sx={{
                height: 6,
                borderRadius: 3,
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                '& .MuiLinearProgress-bar': {
                  borderRadius: 3,
                  background: `linear-gradient(90deg, ${skillCategories[activeTab].color}, ${skillCategories[activeTab].color}80)`,
                },
              }}
            />
          </Box>
        </CardContent>
      </Card>
    </motion.div>
  );

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
              Technical Skills
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
              A comprehensive overview of my technical expertise across different domains
            </Typography>
          </motion.div>

          {/* Category Tabs */}
          <motion.div variants={itemVariants}>
            <Box sx={{ mb: 4 }}>
              <Tabs
                value={activeTab}
                onChange={(e, newValue) => setActiveTab(newValue)}
                variant="scrollable"
                scrollButtons="auto"
                sx={{
                  '& .MuiTabs-indicator': {
                    background: 'linear-gradient(90deg, #3b82f6, #8b5cf6)',
                    height: 3,
                  },
                }}
              >
                {skillCategories.map((category, index) => (
                  <Tab
                    key={index}
                    label={category.title}
                    icon={category.icon}
                    iconPosition="start"
                    sx={{
                      textTransform: 'none',
                      fontWeight: 600,
                      minHeight: 'auto',
                      py: 2,
                      '&.Mui-selected': {
                        color: 'primary.main',
                      },
                    }}
                  />
                ))}
              </Tabs>
            </Box>
          </motion.div>

          {/* Skills Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <Grid container spacing={3}>
                {skillCategories[activeTab].skills.map((skill, index) => (
                  <Grid item xs={12} sm={6} md={4} key={index}>
                    <SkillCard skill={skill} delay={index * 0.1} />
                  </Grid>
                ))}
              </Grid>
            </motion.div>
          </AnimatePresence>

          {/* Skills Summary */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
          >
            <Card 
              sx={{ 
                mt: 6,
                background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(139, 92, 246, 0.1) 100%)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
              }}
            >
              <CardContent sx={{ p: 4, textAlign: 'center' }}>
                <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>
                  Always Learning, Always Growing
                </Typography>
                <Typography variant="body1" sx={{ color: 'text.secondary', mb: 3 }}>
                  With over 4 years of coding experience and hands-on industry exposure, 
                  I continuously expand my technical toolkit to tackle complex challenges 
                  and deliver innovative solutions.
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 1 }}>
                  {['Full-Stack Development', 'Machine Learning', 'Cloud Architecture', 'Data Analytics'].map((tag, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Chip
                        label={tag}
                        sx={{
                          background: 'linear-gradient(45deg, #3b82f6, #8b5cf6)',
                          color: 'white',
                          fontWeight: 600,
                        }}
                      />
                    </motion.div>
                  ))}
                </Box>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </Container>
    </Box>
  );
};

export default TechnicalSkills;
