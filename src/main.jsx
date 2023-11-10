import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'src/App.jsx';
import { Global, ThemeProvider } from '@emotion/react';
import { GlobalStyles, theme } from 'src/styles';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Global styles={GlobalStyles} />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
