import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import './styles/tailwind.css'

// Minimal MUI theme for the detailed views
const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1f2937',
    },
    background: {
      default: '#ffffff',
    },
  },
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)

