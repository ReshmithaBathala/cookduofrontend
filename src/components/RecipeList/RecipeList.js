// src/components/RecipeList.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { AiFillStar, AiOutlineStar } from "react-icons/ai"; // Importing the star icons from react-icons
import "./index.css";
import { IoIosArrowDropright, IoIosArrowDropleft } from "react-icons/io";

const RecipeList = () => {
  const [recipes, setRecipes] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const recipesPerPage = 3; // Number of recipes per page
  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await axios.get(
          "https://cookduobackend.onrender.com/"
        );
        setRecipes(response.data);
      } catch (error) {
        console.error("Error fetching recipes:", error);
      }
    };

    fetchRecipes();
  }, []);

  // Calculate the indices of the recipes to be displayed
  const indexOfLastRecipe = currentPage * recipesPerPage;
  const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage;
  const currentRecipes = recipes.slice(indexOfFirstRecipe, indexOfLastRecipe);

  // Calculate the total number of pages
  const totalPages = Math.ceil(recipes.length / recipesPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="container mt-5">
      <h2>Recipes</h2>
      <div className="row">
        {currentRecipes.map((recipe) => (
          <div className="col-md-4 recipe-card" key={recipe.id}>
            <div className="card mb-4">
              <img
                src={recipe.image_url}
                className="card-img-top"
                alt={recipe.title}
              />
              <div className="card-body">
                <h5 className="card-title">{recipe.title}</h5>
                <p className="card-text">
                  <strong>Ingredients:</strong> {recipe.ingredients}
                </p>
                <p className="card-text">
                  <strong>Instructions:</strong> {recipe.instructions}
                </p>
                <p className="card-text">
                  <strong>Rating:</strong>
                  {[...Array(5)].map((_, index) => (
                    <span key={index}>
                      {index < recipe.rating ? (
                        <AiFillStar style={{ color: "gold" }} />
                      ) : (
                        <AiOutlineStar style={{ color: "black" }} />
                      )}
                    </span>
                  ))}
                  <span>{` ${recipe.rating}/5`}</span>
                </p>
                <Link to={`/recipes/${recipe.id}`}>
                  <button className="btn btn-warning">Edit</button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="pagination-container">
        <div className="pagination">
          <button
            onClick={handlePrevPage}
            disabled={currentPage === 1}
            className="next-prev-btn"
          >
            <IoIosArrowDropleft height={60} width={60} color="blue" />
          </button>
          <span className="mx-2">
            {currentPage} of {totalPages}
          </span>
          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className="next-prev-btn"
          >
            <IoIosArrowDropright height={50} width={50} color="blue" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecipeList;
