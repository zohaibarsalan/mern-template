import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import '@radix-ui/themes/styles.css';
import { Theme } from '@radix-ui/themes';
import { ThemeProvider } from 'next-themes';
import { Provider } from 'react-redux';
import { store } from './Context/Stores/store.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider forcedTheme={'' || undefined} attribute="class">
        <Theme>
          <App />
        </Theme>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
);
