const initialState = {
    recipes: [],
    status: "idle",
    error: null,
  };
  
  const recipeReducer = (state = initialState, action) => {
    switch (action.type) {
      case "FETCH_RECIPES_SUCCESS":
        return { ...state, recipes: action.payload, status: "succeeded" };
  
      case "FETCH_RECIPES_FAILURE":
        return { ...state, status: "failed", error: action.payload };
  
      case "ADD_RECIPE_SUCCESS":
        return { ...state, recipes: [...state.recipes, action.payload] };
  
      case "UPDATE_RECIPE_SUCCESS":
        return {
          ...state,
          recipes: state.recipes.map((recipe) =>
            recipe.id === action.payload.id ? action.payload : recipe
          ),
        };
  
      case "DELETE_RECIPE_SUCCESS":
        return {
          ...state,
          recipes: state.recipes.filter((recipe) => recipe.id !== action.payload),
        };
  
      default:
        return state;
    }
  };
  
  export default recipeReducer;
  