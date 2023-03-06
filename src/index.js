import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Logo from './Logo';
import Name from './Name';
import Image from './Image';
import Usecase from './Usecase';
import Description from './Description';
import Price from './Price';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Logo/>
    <Name/>
    <Image/>
    <Description/>
    <Price/>
    <Usecase/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
