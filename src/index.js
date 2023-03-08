import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import '../src/styles/App.scss';
import App from './App';

import { ThemeProvider, createTheme } from '@mui/material/styles';

let theme = createTheme({
  palette: {
    primary: {
      main: '#219EBC'
    }
  }
});

ReactDOM.render(
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </BrowserRouter>,
  document.getElementById('root')
);
