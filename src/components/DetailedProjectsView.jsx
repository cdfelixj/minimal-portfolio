import React, { useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Dialog,
  DialogContent,
  DialogTitle,
  Typography,
  IconButton,
  Container,
  Card,
  CardContent,
  Button,
  Link,
  Box,
  Divider,
  Fab
} from '@mui/material';
import { detailedProjects } from '../data';

const DetailedProjectsView = React.memo(({ open, onClose }) => {
  const scrollContainerRef = useRef(null);

  const scrollToTop = () => {
    scrollContainerRef.current?.scrollTo({ top: 0, behavior: 'smooth' });
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
                  Complete Project Portfolio
                </Typography>
                <Typography variant="h6" color="text.secondary">
                  Innovative solutions that make a meaningful impact
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

        {/* Projects Content */}
        <Container maxWidth="lg" sx={{ py: 4 }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            {detailedProjects.map((project, index) => (
              <Card
                key={index}
                component={motion.div}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.08,
                  ease: "easeOut"
                }}
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
                <CardContent sx={{ p: 4 }}>
                  <Typography variant="h3" color="primary" gutterBottom>
                    {project.title}
                  </Typography>

                  {project.impact && (
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 500,
                        color: 'text.primary',
                        mb: 2
                      }}
                    >
                      {project.impact}
                    </Typography>
                  )}

                  <Typography variant="body1" paragraph sx={{ lineHeight: 1.7 }}>
                    {project.description}
                  </Typography>

                  {project.technical && (
                    <Typography
                      variant="body1"
                      paragraph
                      sx={{
                        color: 'text.secondary',
                        lineHeight: 1.7
                      }}
                    >
                      {project.technical}
                    </Typography>
                  )}

                  <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', mt: 3 }}>
                    {project.githubUrl && (
                      <Button
                        variant="outlined"
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{ textTransform: 'none' }}
                      >
                        GitHub
                      </Button>
                    )}
                    {project.liveUrl && (
                      <Button
                        variant="contained"
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{ textTransform: 'none' }}
                      >
                        Live Site
                      </Button>
                    )}
                    {project.links
                      .filter(link => !['GitHub', 'Live Site'].includes(link))
                      .map((link, linkIndex) => (
                        <Button
                          key={linkIndex}
                          variant="text"
                          sx={{ textTransform: 'none' }}
                        >
                          {link}
                        </Button>
                      ))}
                  </Box>
                </CardContent>
              </Card>
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

export default DetailedProjectsView;
