import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signUp } from "../services/auth.service";
const Signup = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({ firstname: "", lastname: "", email: "", password: "", phone: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      var data = {
        firstname: user.firstname,
        lastname: user.lastname,
        email: user.email,
        password: user.password,
        phone: user.phone
      }
      var response = signUp(data);
      if (response != null)
        navigate("/login"); // Redirect to login after successful signup
    } catch (err) {
      setError("Signup failed. Try again.");
    }
  };

  return (
    <div className="container">
      <h2 className="my-3 text-primary">Signup</h2>
      {error && <p className="text-danger">{error}</p>}
      <form onSubmit={handleSubmit}>
        <label className="text-white fs-5">Enter Your First Name : </label>
        <input className="mx-3" type="text" name="firstname" placeholder="First Name" onChange={handleChange} required /><hr />
        <label className="text-white fs-5">Enter Your Last Name : </label>
        <input className="mx-3" type="text" name="lastname" placeholder="Last Name" onChange={handleChange} required /><hr />
        <label className="text-white fs-5">Enter Your Email: </label>
        <input className="mx-3" type="email" name="email" placeholder="Email" onChange={handleChange} required /><hr />
        <label className="text-white fs-5">Enter Your Password : </label>
        <input className="mx-3" type="password" name="password" placeholder="Password" onChange={handleChange} required /><hr />
        <label className="text-white fs-5">Enter Your Phone No : </label>
        <input className="ms-3" type="number" name="phone" placeholder="Phone" onChange={handleChange} required />
        <button type="submit">Signup</button>
      </form>
    </div>
  );
};

export default Signup;
