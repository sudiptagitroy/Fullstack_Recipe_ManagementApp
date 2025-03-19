import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchRecipes, removeRecipe } from "../store/actions";

const RecipeList = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { recipes, status } = useSelector((state) => state.recipes);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if(token==null)
        navigate("/login");
    if (status === "idle") dispatch(fetchRecipes());
  }, [dispatch, status]);

  return (
    <div className="container">
      {/* <button style={{marginTop:"1%"}} className="btn btn-primary" onClick={() => navigate("/add")}>Add Recipe</button> */}
      <h2 className="text-white my-4">Recipes List</h2>
      <div className="row">
          {
            recipes.map((recipe) => (
              <div className="col-md-4">
              <div className="card">
                  <div className="card-header text-bg-warning">{recipe.name} - {recipe.category}</div>
                  <div className="card-body text-bg-light">
                  <div className="card-text"><b>Ingredients : </b>{recipe.ingredients}</div><hr/>
                  <div className="card-text"><b>Instructions : </b>{recipe.instructions}</div>
                  </div>
                  <div className="card-footer text-bg-transparent py-2">
                    <button onClick={() => navigate(`/edit/${recipe.id}`)} style={{float:"left"}} className="btn btn-primary">Edit</button>
                    <button onClick={() => dispatch(removeRecipe(recipe.id))} style={{float:"right"}} className="btn btn-danger">Delete</button>
                  </div>
                  
               </div>
              </div>
            ))
          }
      </div>
      {/* <ul style={{listStyle:"none"}}>
        {recipes.map((recipe) => (
          <li key={recipe.id}>
            {recipe.name} - {recipe.category}
            <button className="btn btn-primary" onClick={() => navigate(`/edit/${recipe.id}`)}>Edit</button>
            <button className="btn btn-danger" onClick={() => dispatch(removeRecipe(recipe.id))}>Delete</button>
          </li>
        ))}
      </ul> */}
    </div>
  );
};

export default RecipeList;
