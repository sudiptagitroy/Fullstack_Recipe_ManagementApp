import { addRecipe, deleteRecipe, getRecipes, updateRecipe } from "../services/recipe.service";

// Fetch Recipes Action
export const fetchRecipes = () => async (dispatch) => {
  try {
    const data = await getRecipes();
    dispatch({ type: "FETCH_RECIPES_SUCCESS", payload: data });
  } catch (error) {
    dispatch({ type: "FETCH_RECIPES_FAILURE", payload: error.message });
  }
};

// Add Recipe Action
export const createRecipe = (recipe) => async (dispatch) => {
  try {
    const data = await addRecipe(recipe);
    dispatch({ type: "ADD_RECIPE_SUCCESS", payload: data });
  } catch (error) {
    console.error("Error adding recipe:", error);
  }
};

// Update Recipe Action
export const editRecipe = (id, recipe) => async (dispatch) => {
  try {
    const data = await updateRecipe(id, recipe);
    dispatch({ type: "UPDATE_RECIPE_SUCCESS", payload: data });
  } catch (error) {
    console.error("Error updating recipe:", error);
  }
};

// Remove Recipe Action
export const removeRecipe = (id) => async (dispatch) => {
  try {
    await deleteRecipe(id);
    dispatch({ type: "DELETE_RECIPE_SUCCESS", payload: id });
  } catch (error) {
    console.error("Error deleting recipe:", error);
  }
};
