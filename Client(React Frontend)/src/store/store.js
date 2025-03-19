// import { applyMiddleware, combineReducers, createStore } from "redux";
// import { thunk } from "redux-thunk";
// import recipeReducer from "./recipeReducer"; // Traditional reducer approach

// // Combine reducers (Only `recipeReducer` for now, can add more later)
// const rootReducer = combineReducers({
//   recipes: recipeReducer,
// });

// // Create Redux store with `thunk` middleware for async operations
// const store = createStore(rootReducer, applyMiddleware(thunk));

// export default store;

import { applyMiddleware, combineReducers, createStore } from "redux";
import { thunk } from "redux-thunk";
import recipeReducer from "./recipeReducer";

const rootReducer = combineReducers({
  recipes: recipeReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
