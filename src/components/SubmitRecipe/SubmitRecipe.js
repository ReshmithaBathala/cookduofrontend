import React, { useState } from "react";
import axios from "axios";
import { Form, Button } from "react-bootstrap";

function SubmitRecipe() {
  const [recipe, setRecipe] = useState({
    title: "",
    category: "",
    ingredients: "",
    instructions: "",
    author: "",
    image_url: "",
  });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setRecipe({
      ...recipe,
      [e.target.name]: e.target.value, // This will update category correctly
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Recipe:", recipe);
    axios
      .post("https://cookduobackend.onrender.com/recipes", recipe)
      .then((response) => {
        setMessage("Recipe added successfully!"); // Update success message
        // Reset form fields
        setRecipe({
          title: "",
          category: "",
          ingredients: "",
          instructions: "",
          author: "",
          image_url: "",
        });
        setTimeout(() => {
          setMessage("");
        }, 3000);
      })
      .catch((error) => {
        setMessage("Error adding the recipe. Please try again."); // Update error message
        console.error("Error in adding the recipe:", error);
      });
  };
  return (
    <div className="container mt-4">
      <h2>Submit a Recipe</h2>
      {message && <div className="alert alert-info">{message}</div>}{" "}
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            name="title"
            value={recipe.title}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Category</Form.Label>
          <Form.Control
            as="select"
            name="category"
            value={recipe.category}
            onChange={handleChange}
            required
          >
            <option value="">Select a category</option>{" "}
            {/* This option helps avoid empty submission */}
            <option value="maincourse">Main Course</option>
            <option value="appetizers">Appetizers</option>
            <option value="beverages">Beverages</option>
          </Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>Ingredients</Form.Label>
          <Form.Control
            as="textarea"
            name="ingredients"
            value={recipe.ingredients}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Instructions</Form.Label>
          <Form.Control
            as="textarea"
            name="instructions"
            value={recipe.instructions}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Author</Form.Label>
          <Form.Control
            type="text"
            name="author"
            value={recipe.author}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Image URL</Form.Label>
          <Form.Control
            type="text"
            name="image_url"
            value={recipe.image_url}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="mt-3">
          Submit Recipe
        </Button>
      </Form>
    </div>
  );
}

export default SubmitRecipe;
