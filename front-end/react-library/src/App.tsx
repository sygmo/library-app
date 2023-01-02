import React from 'react';
import './App.css';
import { Navbar } from './layouts/navbar-footer/Navbar';
import { Footer } from './layouts/navbar-footer/Footer';
import { Homepage } from './layouts/homepage/Homepage';

export const App = () => {
  return (
    <div>
      <Navbar />
      <Homepage />
      <Footer />
    </div>
  );
}