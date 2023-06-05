import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const Register = () => {
  // creating an object of registration data
  const iniatialState = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  };
  // console.log(iniatialState);

  // useState
  const [formData, setFormData] = useState(iniatialState);
  // console.log(formData);

  // onChange handler
  const handleChange = (e) => {
    e.preventDefault();
    console.log(e.target);
    const { name, value } = e.target;
    setFormData({ [name]: value });
  };
  // Accessing the state values by destructuring the state
  const { firstName, lastName, email, password } = formData;

  // Form Validation
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const { data } = await axios.post("example/api/v1/post", {
        firstName,
        lastName,
        email,
        password,
      });
      console.log(data); // from the data base
      if (data?.error) {

      }
    } catch (error) {
      console.log(error);
    }

    if (firstName.length >= 5) {
      toast.success("First Name Ok!");
    }
  };

  return (
    <div>
      <h1 className="text-center">Register</h1>
      <form className="d-block col-md-6 offset-md-3" onSubmit={handleSubmit}>
        <input
          className="form-control "
          type="text"
          id="firstName"
          name="firstName"
          placeholder="First Name"
          value={firstName}
          onChange={handleChange}
        /> <br />
        <input
          className="form-control my-3"
          type="text"
          id="lastName"
          name="lastName"
          placeholder="Last Name"
          value={lastName}
          onChange={handleChange}
        />
        <br />
        <input
          className="form-control "
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={handleChange}
        />
        <br />
        <input
          className="form-control "
          type="password"
          id="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={handleChange}
        />       
        <div className="text-center">
          <button className="btn btn-primary mt-2">Sumit</button>
        </div>
      </form>
    </div>
  );
};

export default Register;
