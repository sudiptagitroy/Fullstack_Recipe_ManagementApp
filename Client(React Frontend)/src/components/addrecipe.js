import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createRecipe } from "../store/actions";


const AddRecipe = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");

  const [recipe, setRecipe] = useState({
    name: "",
    ingredients: "",
    instructions: "",
    category: "",
    imageUrl:"",
    userId:(localStorage.getItem('userId')==null)?0:localStorage.getItem('userId')
  });
console.log(localStorage.getItem('userId'));
  const [error, setError] = useState("");

  // Handle input changes
  const handleChange = (e) => {
    setRecipe({ ...recipe, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form fields
    if (!recipe.name || !recipe.ingredients || !recipe.instructions || !recipe.category) {
      setError("All fields are required.");
      return;
    }

    if (!token) {
      navigate("/login"); // Redirect to login if not authenticated
      return;
    }

    dispatch(createRecipe(recipe)); // Dispatch action to Redux store
    navigate("/"); // Redirect to recipe list after adding
  };

  return (
    <div className="container">
      <h2 className="my-3 text-white">Add Recipe</h2>
      {error && <p className="text-danger">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <input
            type="text"
            name="name"
            className="form-control p-3"
            placeholder="Recipe Name"
            value={recipe.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <textarea
            name="ingredients"
            className="form-control"
            placeholder="Ingredients (comma separated)"
            value={recipe.ingredients}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <textarea
            name="instructions"
            className="form-control"
            placeholder="Instructions"
            value={recipe.instructions}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            name="category"
            className="form-control"
            placeholder="Category"
            value={recipe.category}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-success">
          Add Recipe
        </button>
      </form>
    </div>
  );
};

export default AddRecipe;
