// src/App.js
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import RecipeList from "./components/RecipeList/RecipeList";
import SubmitRecipe from "./components/SubmitRecipe/SubmitRecipe";
import UpdateRecipe from "./components/UpdateRecipe/UpdateRecipe";
import Category from "./components/Category/Category";

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<RecipeList />} />
          <Route path="/submitrecipe" element={<SubmitRecipe />} />
          <Route path="/viewrecipes" element={<RecipeList />} />
          <Route path="/recipes/:id" element={<UpdateRecipe />} />
          <Route path="/category/:categoryName" element={<Category />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
