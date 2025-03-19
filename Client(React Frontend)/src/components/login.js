import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../services/auth.service";
import { fetchRecipes } from "../store/actions";
const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [user, setUser] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      var response= login(user.email, user.password);
      if(response!=''){
        dispatch(fetchRecipes());
      navigate("/"); // Redirect to home page after login
      }
    } catch (err) {
      setError("Invalid credentials. Try again."+err);
    }
  };

  return (
    <div className="container">
      <h2 className="my-3 text-primary">Login</h2>
      {error && <p className="text-danger">{error}</p>}
      <form onSubmit={handleSubmit}>
        <label className="text-white fs-5">Enter Your Email : </label>
        <input className="mx-3" type="email" name="email" placeholder="Email" onChange={handleChange} required /><hr/>
        <label className="text-white fs-5">Enter Your Password : </label>
        <input className="ms-3"  type="password" name="password" placeholder="Password" onChange={handleChange} required />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
