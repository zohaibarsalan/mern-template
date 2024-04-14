import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { Toaster } from 'sonner';
import './index.css';
import { ThemeProvider } from 'next-themes';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider forcedTheme={'dark' || undefined} attribute="class">
      <App />
      <Toaster position="top-right" richColors closeButton />
    </ThemeProvider>
  </React.StrictMode>
);
