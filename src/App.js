import React from 'react';

import { AboutUs, Presentation, Footer, Gallery, Header, Intro, Options } from './container';
import { Navbar } from './components';
import './App.css';

const App = () => (
  <div>
    <Navbar />
    <Header />
    <AboutUs />
    <Options />
    <Presentation />
    <Intro />
    <Gallery />
    <Footer />
  </div>
);

export default App;
