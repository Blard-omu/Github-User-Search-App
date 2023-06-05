import React, { useState } from "react";

const Form = () => {
    // initial state
    const [firstName, setFirstName] = useState('');

    const handleChange = (event) => {
        // console.log(event.target.value);
        const value = event.target.value
        setFirstName(value)
        console.log(firstName);
    }

  return (
    <div className="col-md-6 offset-md-3">
      {/* <label className="">First Name: </label> <br /> */}
      <input
      className="form-control "
        type="text"
        id="firstName"
        name="firstName"
        placeholder="First Name"
        value={firstName}
        onChange={handleChange}
      />
      {firstName.length>=5 && <strong>First Name: {firstName}</strong>}

    </div>
  );
};

export default Form;
