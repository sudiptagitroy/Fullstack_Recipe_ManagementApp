import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token"); // Check if user is logged in

  // Logout function
  const handleLogout = () => {
    localStorage.removeItem("token"); // Remove token
    navigate("/login"); // Redirect to login page
  };
 useEffect(()=>{
  console.log(token);
     if(token==null){
      localStorage.removeItem("token"); // Remove token
    navigate("/login"); // Redirect to login page
     }
 },[])
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">
          Recipe App
        </Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ms-auto">
            {token ? (
              // If logged in, show Recipe List, Add Recipe, and Logout
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/recipelist">Recipe List</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/add">Add Recipe</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/edit">Edit Recipe</Link>
                </li>
                <li className="nav-item">
                  <button className="btn btn-danger" onClick={handleLogout}>Logout</button>
                </li>
              </>
            ) : (
              // If not logged in, show Signup and Login
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/signup">Signup</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/login">Login</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
