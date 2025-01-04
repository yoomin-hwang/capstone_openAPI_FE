import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import { ThemeProvider } from 'styled-components';

const lightTheme = {
  lightblue: '#47C5FF',
  blue: '#00A0F4',
  midblue: '#0088D6',
  darkblue: '#0071B9',
  fade0: '#F1FCFF',
  fade1: '#D1F4FF'
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RecoilRoot>
    <BrowserRouter>
      <React.StrictMode>
        <ThemeProvider theme={lightTheme}>
          <App />
        </ThemeProvider>
      </React.StrictMode>
    </BrowserRouter>
  </RecoilRoot>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
