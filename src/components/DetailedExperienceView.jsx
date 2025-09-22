import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Dialog,
  DialogContent,
  Typography,
  IconButton,
  Container,
  Card,
  CardContent,
  Button,
  Box,
  Divider,
  Chip,
  Collapse,
  Avatar
} from '@mui/material';
import {
  Timeline,
  TimelineItem,
  TimelineContent,
  TimelineDot,
  TimelineConnector,
  TimelineSeparator
} from '@mui/lab';
import { detailedExperiences } from '../data';

const DetailedExperienceView = React.memo(({ open, onClose }) => {
  const [expandedExperience, setExpandedExperience] = useState(null);
  const scrollContainerRef = useRef(null);

  const scrollToTop = () => {
    scrollContainerRef.current?.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleExpansion = (index) => {
    setExpandedExperience(expandedExperience === index ? null : index);
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth={false}
      fullScreen
      PaperProps={{
        component: motion.div,
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        transition: { duration: 0.4, ease: "easeInOut" },
        sx: {
          backgroundColor: 'background.default',
          overflow: 'hidden'
        }
      }}
    >
      <Box
        ref={scrollContainerRef}
        sx={{
          height: '100vh',
          overflow: 'auto',
          backgroundColor: 'background.default'
        }}
      >
        {/* Header */}
        <Box
          sx={{
            position: 'sticky',
            top: 0,
            zIndex: 1200,
            borderBottom: 1,
            borderColor: 'divider',
            backdropFilter: 'blur(10px)',
            backgroundColor: 'rgba(255, 255, 255, 0.95)'
          }}
        >
          <Container maxWidth="lg" sx={{ py: 3 }}>
            <Box display="flex" justifyContent="space-between" alignItems="center">
              <Box>
                <Typography variant="h1" color="primary" gutterBottom>
                  Complete Professional Journey
                </Typography>
                <Typography variant="h6" color="text.secondary">
                  My career progression in technology and innovation
                </Typography>
              </Box>
              <IconButton
                onClick={onClose}
                color="primary"
                size="large"
                component={motion.button}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                sx={{
                  '&:hover': {
                    backgroundColor: 'primary.light',
                    color: 'white'
                  }
                }}
              >
                ✕
              </IconButton>
            </Box>
          </Container>
        </Box>

        {/* Experience Content */}
        <Container maxWidth="lg" sx={{ py: 4 }}>
          <Timeline position="right" sx={{ px: 0 }}>
            {detailedExperiences.map((exp, index) => (
              <TimelineItem
                key={index}
                component={motion.div}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.08,
                  ease: "easeOut"
                }}
              >
                <TimelineSeparator>
                  <TimelineDot
                    color="primary"
                    variant="outlined"
                    sx={{
                      borderWidth: 3,
                      p: 1
                    }}
                  >
                    💼
                  </TimelineDot>
                  {index < detailedExperiences.length - 1 && <TimelineConnector />}
                </TimelineSeparator>
                
                <TimelineContent sx={{ py: 2 }}>
                  <Card
                    elevation={3}
                    sx={{
                      borderRadius: 3,
                      overflow: 'hidden',
                      '&:hover': {
                        elevation: 6,
                        transform: 'translateY(-2px)',
                        transition: 'all 0.3s ease-in-out'
                      }
                    }}
                  >
                    <CardContent sx={{ p: 3 }}>
                      <Box display="flex" alignItems="center" gap={2} mb={2}>
                        <Typography variant="h4" color="primary" sx={{ flexGrow: 1 }}>
                          {exp.company}
                        </Typography>
                        <IconButton
                          href={exp.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          color="primary"
                          size="small"
                          component={motion.a}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          sx={{
                            backgroundColor: 'primary.light',
                            color: 'white',
                            '&:hover': {
                              backgroundColor: 'primary.main'
                            }
                          }}
                        >
                          ↗
                        </IconButton>
                      </Box>

                      <Typography variant="h5" sx={{ fontWeight: 600, mb: 1 }}>
                        {exp.role}
                      </Typography>
                      
                      <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                        {exp.period}
                      </Typography>

                      <Typography variant="body1" paragraph sx={{ lineHeight: 1.7 }}>
                        {exp.description}
                      </Typography>

                      <Button
                        onClick={() => toggleExpansion(index)}
                        endIcon={expandedExperience === index ? <span>▲</span> : <span>▼</span>}
                        color="primary"
                        component={motion.button}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        sx={{ textTransform: 'none', mb: 1 }}
                      >
                        {expandedExperience === index ? 'Show less' : 'View details'}
                      </Button>

                      <Collapse in={expandedExperience === index}>
                        <Box sx={{ mt: 2, pt: 2, borderTop: 1, borderColor: 'divider' }}>
                          <Typography variant="h6" gutterBottom>
                            Key Achievements:
                          </Typography>
                          <Box component="ul" sx={{ pl: 3, mb: 3 }}>
                            {exp.details.map((detail, detailIndex) => (
                              <Typography
                                key={detailIndex}
                                component="li"
                                variant="body2"
                                sx={{ mb: 1, lineHeight: 1.6 }}
                              >
                                {detail}
                              </Typography>
                            ))}
                          </Box>
                          
                          <Typography variant="h6" gutterBottom>
                            Technologies Used:
                          </Typography>
                          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                            {exp.technologies.map((tech, techIndex) => (
                              <Chip
                                key={techIndex}
                                label={tech}
                                color="primary"
                                variant="outlined"
                                size="small"
                                sx={{
                                  fontWeight: 500,
                                  '&:hover': {
                                    backgroundColor: 'primary.light',
                                    color: 'white'
                                  }
                                }}
                              />
                            ))}
                          </Box>
                        </Box>
                      </Collapse>
                    </CardContent>
                  </Card>
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>

          {/* Back to top section */}
          <Box sx={{ mt: 6, pt: 4 }}>
            <Divider sx={{ mb: 4 }} />
            <Box display="flex" justifyContent="center">
              <Button
                onClick={scrollToTop}
                color="primary"
                component={motion.button}
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
                sx={{ textTransform: 'none' }}
              >
                Back to top ↑
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>
    </Dialog>
  );
});

export default DetailedExperienceView;
