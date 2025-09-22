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
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Accordion,
  AccordionSummary,
  AccordionDetails
} from '@mui/material';
import { detailedActivities } from '../data';

const DetailedActivitiesView = React.memo(({ open, onClose }) => {
  const [expandedActivity, setExpandedActivity] = useState(null);
  const scrollContainerRef = useRef(null);

  const scrollToTop = () => {
    scrollContainerRef.current?.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleActivityChange = (panel) => (event, isExpanded) => {
    setExpandedActivity(isExpanded ? panel : null);
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
          backgroundColor: 'grey.50',
          overflow: 'hidden'
        }
      }}
    >
      <Box
        ref={scrollContainerRef}
        sx={{
          height: '100vh',
          overflow: 'auto',
          backgroundColor: 'grey.50'
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
            backgroundColor: 'rgba(249, 250, 251, 0.95)'
          }}
        >
          <Container maxWidth="lg" sx={{ py: 3 }}>
            <Box display="flex" justifyContent="space-between" alignItems="center">
              <Box>
                <Typography variant="h1" color="primary" gutterBottom>
                  Activities & Achievements
                </Typography>
                <Typography variant="h6" color="text.secondary">
                  Leadership roles, awards, hackathons, and community contributions that shaped my journey
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

        {/* Activities Content */}
        <Container maxWidth="lg" sx={{ py: 4 }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
            {detailedActivities.map((activity, index) => (
              <Accordion
                key={index}
                expanded={expandedActivity === index}
                onChange={handleActivityChange(index)}
                component={motion.div}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                elevation={3}
                sx={{
                  borderRadius: 3,
                  '&:before': {
                    display: 'none',
                  },
                  '&.Mui-expanded': {
                    margin: 0,
                  },
                  '&:hover': {
                    elevation: 6,
                    transform: 'translateY(-2px)',
                    transition: 'all 0.3s ease-in-out'
                  }
                }}
              >
                <AccordionSummary
                  expandIcon={<span>▼</span>}
                  sx={{
                    backgroundColor: 'background.paper',
                    borderRadius: 3,
                    '&.Mui-expanded': {
                      borderBottomLeftRadius: 0,
                      borderBottomRightRadius: 0,
                    },
                    p: 3
                  }}
                >
                  <Box sx={{ width: '100%' }}>
                    <Box 
                      sx={{ 
                        display: 'flex', 
                        flexDirection: { xs: 'column', lg: 'row' },
                        alignItems: { lg: 'center' },
                        justifyContent: 'space-between',
                        gap: 2
                      }}
                    >
                      <Box sx={{ flex: 1 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                          <Typography variant="h4" color="primary" sx={{ fontWeight: 'bold' }}>
                            {activity.title}
                          </Typography>
                          <Chip 
                            label={activity.period} 
                            color="primary" 
                            variant="outlined"
                            size="small"
                          />
                        </Box>
                        <Typography variant="h6" sx={{ fontWeight: 500, mb: 1, color: 'text.primary' }}>
                          {activity.organization}
                        </Typography>
                        <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.6 }}>
                          {activity.description}
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </AccordionSummary>
                
                <AccordionDetails
                  sx={{
                    backgroundColor: 'grey.50',
                    borderBottomLeftRadius: 12,
                    borderBottomRightRadius: 12,
                    p: 3
                  }}
                >
                  <Box sx={{ pt: 2, borderTop: 1, borderColor: 'divider' }}>
                    <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                      Detailed Highlights:
                    </Typography>
                    
                    <List sx={{ mb: 3 }}>
                      {activity.details.map((detail, detailIndex) => (
                        <ListItem key={detailIndex} sx={{ py: 0.5, px: 0 }}>
                          <ListItemIcon sx={{ minWidth: 20 }}>
                            <span style={{ fontSize: 8, color: 'primary.main', marginTop: 4 }}>•</span>
                          </ListItemIcon>
                          <ListItemText 
                            primary={detail}
                            primaryTypographyProps={{
                              variant: 'body2',
                              sx: { lineHeight: 1.6 }
                            }}
                          />
                        </ListItem>
                      ))}
                    </List>

                    <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                      Technologies & Skills:
                    </Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                      {activity.technologies.map((tech, techIndex) => (
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
                </AccordionDetails>
              </Accordion>
            ))}
          </Box>

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

export default DetailedActivitiesView;
