
// Base API URL - 
const API_URL = "http://localhost:5070/api/Recipe";

// Function to get authorization headers
const getAuthHeaders = () => {
    const token = localStorage.getItem("token");
    return token ? { Authorization: `Bearer ${token}`, "Content-Type": "application/json" } : { "Content-Type": "application/json" };
  };

// Fetch all recipes (Requires JWT authentication)
export const getRecipes = async () => {
    const response = await fetch(API_URL, { method: "GET", headers: getAuthHeaders() });
    if (!response.ok) throw new Error("Failed to fetch recipes");
    return await response.json();
};

// Add a new recipe (Requires JWT authentication)
export const addRecipe = async (recipe) => {
    const response = await fetch(API_URL, { method: "POST", headers: getAuthHeaders(), body: JSON.stringify(recipe) });
    if (!response.ok) throw new Error("Failed to add recipe");
    return await response.json();
};

// Update an existing recipe (Requires JWT authentication)
export const updateRecipe = async (id, recipe) => {
    const response = await fetch(`${API_URL}/${id}`, { method: "PUT", headers: getAuthHeaders(), body: JSON.stringify(recipe) });
    if (!response.ok) throw new Error("Failed to update recipe");
    return await response.json();
};

// Delete a recipe (Requires JWT authentication)
export const deleteRecipe = async (id) => {
    await fetch(`${API_URL}/${id}`, { method: "DELETE", headers: getAuthHeaders() });
};
