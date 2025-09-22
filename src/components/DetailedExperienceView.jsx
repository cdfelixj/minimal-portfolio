import React, { useState, useRef } from 'react';
import {
  Dialog,
  Typography,
  IconButton,
  Container,
  Button,
  Box,
  Divider,
  Chip,
  Collapse
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
          <Timeline position="alternate" sx={{ px: 0 }}>
            {detailedExperiences.map((exp, index) => (
              <TimelineItem key={index}>
                <TimelineSeparator>
                  <TimelineDot 
                    color="primary" 
                    variant="filled"
                    sx={{ 
                      width: 16, 
                      height: 16,
                      boxShadow: 3
                    }}
                  />
                  {index < detailedExperiences.length - 1 && (
                    <TimelineConnector sx={{ bgcolor: 'primary.main' }} />
                  )}
                </TimelineSeparator>
                
                <TimelineContent sx={{ py: 3, px: 2 }}>
                  <Box sx={{ mb: 3 }}>
                    <Box display="flex" alignItems="center" gap={2} mb={1}>
                      <Typography 
                        variant="h5" 
                        component="h3" 
                        sx={{ 
                          fontWeight: 600,
                          color: 'primary.main'
                        }}
                      >
                        {exp.company}
                      </Typography>
                      <IconButton
                        href={exp.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        size="small"
                        sx={{ 
                          color: 'primary.main',
                          '&:hover': { color: 'primary.dark' }
                        }}
                      >
                        ↗
                      </IconButton>
                    </Box>

                    <Typography 
                      variant="h6" 
                      sx={{ 
                        fontWeight: 500,
                        color: 'text.primary',
                        mb: 0.5
                      }}
                    >
                      {exp.role}
                    </Typography>
                    
                    <Typography 
                      variant="body2" 
                      sx={{ 
                        color: 'text.secondary',
                        mb: 2
                      }}
                    >
                      {exp.period}
                    </Typography>

                    <Typography 
                      variant="body1" 
                      sx={{ 
                        lineHeight: 1.6,
                        mb: 2
                      }}
                    >
                      {exp.description}
                    </Typography>

                    <Button
                      onClick={() => toggleExpansion(index)}
                      variant="text"
                      color="primary"
                      size="small"
                      sx={{ 
                        textTransform: 'none',
                        fontWeight: 500,
                        mb: 2
                      }}
                    >
                      {expandedExperience === index ? 'Show less ↑' : 'View details ↓'}
                    </Button>

                    <Collapse in={expandedExperience === index}>
                      <Box sx={{ mt: 2, pt: 2, borderTop: 1, borderColor: 'divider' }}>
                        <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1 }}>
                          Key Achievements:
                        </Typography>
                        
                        <Box component="ul" sx={{ pl: 2, mb: 3 }}>
                          {exp.details.map((detail, detailIndex) => (
                            <Typography
                              key={detailIndex}
                              component="li"
                              variant="body2"
                              sx={{ 
                                mb: 1, 
                                lineHeight: 1.5,
                                '&::marker': { color: 'primary.main' }
                              }}
                            >
                              {detail}
                            </Typography>
                          ))}
                        </Box>
                        
                        <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1 }}>
                          Technologies:
                        </Typography>
                        
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                          {exp.technologies.map((tech, techIndex) => (
                            <Chip
                              key={techIndex}
                              label={tech}
                              size="small"
                              variant="outlined"
                              sx={{
                                borderColor: 'primary.main',
                                color: 'primary.main',
                                '&:hover': {
                                  backgroundColor: 'primary.main',
                                  color: 'white'
                                }
                              }}
                            />
                          ))}
                        </Box>
                      </Box>
                    </Collapse>
                  </Box>
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
                sx={{ 
                  textTransform: 'none',
                  '&:hover': {
                    transform: 'translateY(-2px)'
                  }
                }}
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
