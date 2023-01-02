import React from 'react';
import './App.css';
import { Navbar } from './layouts/navbar-footer/Navbar';
import { ExploreTopBooks } from './layouts/homepage/ExploreTopBooks';
import { Carousel } from './layouts/homepage/Carousel';
import { Heroes } from './layouts/homepage/Heroes';
import { LibraryServices } from './layouts/homepage/LibraryServices';

function App() {
  return (
    <div>
      <Navbar />
      <ExploreTopBooks />
      <Carousel />
      <Heroes />
      <LibraryServices />
    </div>
  );
}

export default App;
