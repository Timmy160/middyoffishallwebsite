import React from 'react';
import "./App.css";
import Hero from './Components/Hero';     // ← This is correct if your folder is named "Components" (capital C)
import Header from './Components/Header'; // ← Same here
import About from './Components/About';
import Discography from './Components/Discography';
import Show from './Components/show';
import Footer from './Components/Footer';

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <About/>
      <Discography/>
      <Show/>
      <Footer/>

    </div>
  );
}

export default App;
