import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import '@radix-ui/themes/styles.css';
import { Theme } from '@radix-ui/themes';
import { ThemeProvider } from 'next-themes';
import { Toaster } from 'sonner';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider forcedTheme={'' || undefined} attribute="class">
      <Theme accentColor="plum" grayColor="sand" appearance="solid">
        <App />
        <Toaster position="top-right" richColors closeButton />
      </Theme>
    </ThemeProvider>
  </React.StrictMode>
);
