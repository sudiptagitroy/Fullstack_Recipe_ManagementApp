import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { editRecipe, fetchRecipes } from "../store/actions";

const EditRecipe = () => {
  const { id } = useParams(); // Get recipe ID from URL
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { recipes } = useSelector((state) => state.recipes);
  const token = localStorage.getItem("token");

  const [recipe, setRecipe] = useState({
    name: "",
    ingredients: "",
    instructions: "",
    category: "",
    imageUrl:"",
    userId:(localStorage.getItem('userId')==null)?0:localStorage.getItem('userId')
  });

  const [error, setError] = useState("");

  // Load recipe details on mount
  useEffect(() => {
    if (!token) {
      navigate("/login"); // Redirect if not logged in
      return;
    }

    if (recipes.length === 0) {
      dispatch(fetchRecipes()); // Fetch recipes if not already loaded
    }

    const selectedRecipe = recipes.find((r) => r.id === parseInt(id));
    if (selectedRecipe) {
      setRecipe(selectedRecipe);
    }
  }, [id, recipes, dispatch, token, navigate]);

  // Handle input changes
  const handleChange = (e) => {
    setRecipe({ ...recipe, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!recipe.name || !recipe.ingredients || !recipe.instructions || !recipe.category) {
      setError("All fields are required.");
      return;
    }

    dispatch(editRecipe(id, recipe));
    navigate("/"); // Redirect to Recipe List after update
  };

  return (
    <div className="container">
      <h2 className="my-3 text-white">Edit Recipe</h2>
      {error && <p className="text-danger">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <input
            type="text"
            name="name"
            className="form-control"
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
        <button type="submit" className="btn btn-warning">
          Update Recipe
        </button>
      </form>
    </div>
  );
};

export default EditRecipe;
