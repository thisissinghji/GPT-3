import React from 'react';

import {Footer, Header, Blog, Possibility, Feature, WhatGPT3} from './containers';
import {Cta, Brand, Navbar} from './components';
import './App.css';
import Features from './containers/Features/Features';
const App = () => {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <Navbar/>
        <Header/>
      </div>
      <Brand/>
      <WhatGPT3/>
      <Features/>
      <Possibility/>
      <Cta/>
      <Blog/>
      <Footer/>
        
    </div>
  )
}

export default App