import { useState } from 'react';
import Home from './pages/Home.jsx';
import Recipes from './pages/Recipes.jsx'
import SingleRecipe from './pages/SingleRecipes.jsx'
import './index.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {

  return(
    <Router>
      <Routes>
        <Route path = '/' element = {<Home/>}></Route>
        <Route path = "/recipes" element={<Recipes/>}></Route>
        <Route path = "/recipe/:recipeId" element = {<SingleRecipe/>}></Route>
      </Routes>
    </Router>
  );
}

export default App
