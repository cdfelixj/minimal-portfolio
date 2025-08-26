import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  TextField,
  Button,
  Avatar,
  IconButton,
  Snackbar,
  Alert,
} from '@mui/material';
import { motion } from 'framer-motion';
import {
  Email,
  LinkedIn,
  GitHub,
  Instagram,
  Send,
  LocationOn,
  Phone,
  School,
} from '@mui/icons-material';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const contactInfo = [
    {
      icon: <Email />,
      label: 'Email',
      value: 'felix.pangestu@example.com',
      link: 'mailto:felix.pangestu@example.com',
      color: '#ea4335',
    },
    {
      icon: <LinkedIn />,
      label: 'LinkedIn',
      value: 'Felix Lau Pangestu',
      link: 'https://linkedin.com/in/felixpangestu',
      color: '#0077b5',
    },
    {
      icon: <GitHub />,
      label: 'GitHub',
      value: '@cdfelixj',
      link: 'https://github.com/cdfelixj',
      color: '#333',
    },
    {
      icon: <LocationOn />,
      label: 'Location',
      value: 'Hong Kong SAR',
      color: '#4285f4',
    },
  ];

  const socialLinks = [
    {
      icon: <LinkedIn />,
      url: 'https://linkedin.com/in/felixpangestu',
      color: '#0077b5',
      label: 'LinkedIn',
    },
    {
      icon: <GitHub />,
      url: 'https://github.com/cdfelixj',
      color: '#333',
      label: 'GitHub',
    },
    {
      icon: <Instagram />,
      url: 'https://instagram.com/felixpangestu',
      color: '#e4405f',
      label: 'Instagram',
    },
    {
      icon: <Email />,
      url: 'mailto:felix.pangestu@example.com',
      color: '#ea4335',
      label: 'Email',
    },
  ];

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    setSnackbarOpen(true);
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
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
              Let's Connect
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
              Ready to collaborate on exciting projects or discuss opportunities? 
              I'd love to hear from you!
            </Typography>
          </motion.div>

          <Grid container spacing={4}>
            {/* Contact Form */}
            <Grid item xs={12} md={7}>
              <motion.div variants={itemVariants}>
                <Card
                  sx={{
                    background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(139, 92, 246, 0.1) 100%)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                  }}
                >
                  <CardContent sx={{ p: 4 }}>
                    <Typography variant="h4" sx={{ mb: 3, fontWeight: 600 }}>
                      Send Me a Message
                    </Typography>
                    
                    <form onSubmit={handleSubmit}>
                      <Grid container spacing={3}>
                        <Grid item xs={12} sm={6}>
                          <TextField
                            fullWidth
                            label="Your Name"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                            sx={{
                              '& .MuiOutlinedInput-root': {
                                '&:hover fieldset': {
                                  borderColor: 'primary.main',
                                },
                              },
                            }}
                          />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <TextField
                            fullWidth
                            label="Your Email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            sx={{
                              '& .MuiOutlinedInput-root': {
                                '&:hover fieldset': {
                                  borderColor: 'primary.main',
                                },
                              },
                            }}
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <TextField
                            fullWidth
                            label="Subject"
                            name="subject"
                            value={formData.subject}
                            onChange={handleInputChange}
                            required
                            sx={{
                              '& .MuiOutlinedInput-root': {
                                '&:hover fieldset': {
                                  borderColor: 'primary.main',
                                },
                              },
                            }}
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <TextField
                            fullWidth
                            label="Your Message"
                            name="message"
                            value={formData.message}
                            onChange={handleInputChange}
                            required
                            multiline
                            rows={6}
                            sx={{
                              '& .MuiOutlinedInput-root': {
                                '&:hover fieldset': {
                                  borderColor: 'primary.main',
                                },
                              },
                            }}
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <motion.div
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            <Button
                              type="submit"
                              variant="contained"
                              size="large"
                              endIcon={<Send />}
                              sx={{
                                background: 'linear-gradient(45deg, #3b82f6, #8b5cf6)',
                                borderRadius: '25px',
                                px: 4,
                                py: 1.5,
                                textTransform: 'none',
                                fontWeight: 600,
                                fontSize: '1.1rem',
                                '&:hover': {
                                  background: 'linear-gradient(45deg, #2563eb, #7c3aed)',
                                },
                              }}
                            >
                              Send Message
                            </Button>
                          </motion.div>
                        </Grid>
                      </Grid>
                    </form>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>

            {/* Contact Info & Social */}
            <Grid item xs={12} md={5}>
              <motion.div variants={itemVariants}>
                {/* Contact Information */}
                <Card
                  sx={{
                    mb: 3,
                    background: 'rgba(255, 255, 255, 0.05)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                  }}
                >
                  <CardContent sx={{ p: 3 }}>
                    <Typography variant="h5" sx={{ mb: 3, fontWeight: 600 }}>
                      Contact Information
                    </Typography>
                    
                    {contactInfo.map((contact, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <Box
                          sx={{
                            display: 'flex',
                            alignItems: 'center',
                            mb: 2,
                            p: 2,
                            borderRadius: 2,
                            '&:hover': {
                              backgroundColor: 'rgba(255, 255, 255, 0.05)',
                            },
                          }}
                        >
                          <Avatar
                            sx={{
                              backgroundColor: `${contact.color}20`,
                              color: contact.color,
                              mr: 2,
                            }}
                          >
                            {contact.icon}
                          </Avatar>
                          <Box>
                            <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                              {contact.label}
                            </Typography>
                            {contact.link ? (
                              <Typography
                                component="a"
                                href={contact.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                variant="body2"
                                sx={{
                                  color: 'text.secondary',
                                  textDecoration: 'none',
                                  '&:hover': {
                                    color: contact.color,
                                  },
                                }}
                              >
                                {contact.value}
                              </Typography>
                            ) : (
                              <Typography variant="body2" color="text.secondary">
                                {contact.value}
                              </Typography>
                            )}
                          </Box>
                        </Box>
                      </motion.div>
                    ))}
                  </CardContent>
                </Card>

                {/* Social Links */}
                <Card
                  sx={{
                    background: 'rgba(255, 255, 255, 0.05)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                  }}
                >
                  <CardContent sx={{ p: 3, textAlign: 'center' }}>
                    <Typography variant="h5" sx={{ mb: 3, fontWeight: 600 }}>
                      Follow Me
                    </Typography>
                    
                    <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
                      {socialLinks.map((social, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          transition={{ delay: index * 0.1 }}
                        >
                          <IconButton
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            sx={{
                              backgroundColor: `${social.color}20`,
                              color: social.color,
                              '&:hover': {
                                backgroundColor: social.color,
                                color: 'white',
                              },
                            }}
                          >
                            {social.icon}
                          </IconButton>
                        </motion.div>
                      ))}
                    </Box>

                    <Typography
                      variant="body2"
                      sx={{ mt: 3, color: 'text.secondary', fontStyle: 'italic' }}
                    >
                      "Always open to interesting conversations and collaboration opportunities!"
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          </Grid>

          {/* Footer */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
          >
            <Box sx={{ textAlign: 'center', mt: 6, pt: 4, borderTop: '1px solid rgba(255, 255, 255, 0.1)' }}>
              <Typography variant="body2" sx={{ color: 'text.secondary', mb: 2 }}>
                © 2025 Felix Lau Pangestu. Built with React, Material-UI, and lots of ☕
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                Currently based in Hong Kong • Open to remote opportunities worldwide
              </Typography>
            </Box>
          </motion.div>
        </motion.div>
      </Container>

      {/* Success Snackbar */}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={() => setSnackbarOpen(false)}
      >
        <Alert
          onClose={() => setSnackbarOpen(false)}
          severity="success"
          variant="filled"
          sx={{
            background: 'linear-gradient(45deg, #10b981, #059669)',
          }}
        >
          Message sent successfully! I'll get back to you soon.
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default ContactSection;
