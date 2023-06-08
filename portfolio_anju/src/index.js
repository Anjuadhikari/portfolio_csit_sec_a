import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import NavBar from './navbar/NavBar';
import Footer from './footer/Footer';
import Body from './body/body';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <NavBar title="Dipak"/>
    <Body/>
    <Footer title="Dipak Shrestha"/>
  </>
);

