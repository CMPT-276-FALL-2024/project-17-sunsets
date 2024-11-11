import { useState } from 'react';
import Navbar from './components/Navbar.jsx';
import Banner from './components/Banner.jsx';
import MealList from './components/MealList.jsx';
import Footer from './components/Footer.jsx';
import './index.css'

function App() {

  return(
    <>
      Hi
      <Navbar />
      <Banner />
      <MealList />
      <Footer />
    </>
  );
}

export default App
