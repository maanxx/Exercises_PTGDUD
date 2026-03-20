import React, { useState } from "react";
import "../style/Btap01.css";

function Btap01() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    age: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;

    setUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("User: ", user);
  };
  return (
    <>
      <form onSubmit={handleSubmit} className="container">
        <div className="content">
          <label>Name: </label>
          <input
            type="text"
            name="name"
            value={user.name}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Email Address: </label>
          <input
            type="email"
            name="email"
            value={user.email}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Age: </label>
          <input
            type="number"
            name="age"
            value={user.age}
            onChange={handleChange}
          />
        </div>

        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default Btap01;
