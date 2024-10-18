// src/components/UpdateRecipe/UpdateRecipe.js
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const UpdateRecipe = () => {
  const { id } = useParams(); // Get the recipe ID from the URL
  const navigate = useNavigate(); // Initialize navigate function
  const [recipe, setRecipe] = useState({
    title: "",
    category: "",
    ingredients: "",
    instructions: "",
    author: "",
    rating: 0,
    image_url: "",
  });
  const [message, setMessage] = useState(""); // State for success/error message

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const response = await axios.get(
          `https://cookduobackend.onrender.com/recipes/${id}`
        );
        setRecipe(response.data);
      } catch (error) {
        console.error("Error fetching the recipe:", error);
      }
    };

    fetchRecipe();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRecipe((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(
        `https://cookduobackend.onrender.com/recipes/${id}`,
        recipe
      );
      setMessage("Recipe updated successfully!"); // Success message
      setTimeout(() => {
        navigate("/viewrecipes"); // Navigate to the view recipes page after a brief delay
      }, 2000); // Navigate after 2 seconds to let the user see the message
    } catch (error) {
      setMessage("Error updating the recipe. Please try again."); // Error message
      console.error("Error updating the recipe:", error);
    }
  };

  return (
    <div className="container mt-5">
      <h2>Update Recipe</h2>
      {message && <div className="alert alert-info">{message}</div>}{" "}
      {/* Display message */}
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Title</label>
          <input
            type="text"
            className="form-control"
            name="title"
            value={recipe.title}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Category</label>
          <input
            type="text"
            className="form-control"
            name="category"
            value={recipe.category}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Ingredients</label>
          <textarea
            className="form-control"
            name="ingredients"
            value={recipe.ingredients}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Instructions</label>
          <textarea
            className="form-control"
            name="instructions"
            value={recipe.instructions}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Author</label>
          <input
            type="text"
            className="form-control"
            name="author"
            value={recipe.author}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Rating</label>
          <input
            type="number"
            className="form-control"
            name="rating"
            value={recipe.rating}
            onChange={handleChange}
            min="0"
            max="5"
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Image URL</label>
          <input
            type="text"
            className="form-control"
            name="image_url"
            value={recipe.image_url}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default UpdateRecipe;
