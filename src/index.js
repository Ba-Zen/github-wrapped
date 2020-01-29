import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ThemeProvider, CSSReset } from '@chakra-ui/core';

// Use at the root of your app

ReactDOM.render(
  <ThemeProvider>
    <CSSReset />
    <App />
  </ThemeProvider>,
  document.getElementById('root')
);
