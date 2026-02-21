import { useState } from "react";
import "../../styles/FormInput.css";
export default function FormInput() {
  const [form, setForm] = useState({
    name: "",
    value: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  };

  return (
    <div className="container">
      <h3>Information</h3>
      <div className="form-container">
        <strong>Your name:</strong>

        <input
          name="name"
          type="text"
          onChange={handleChange}
          value={form.name}
          placeholder="Your name"
        />

        <strong>Your email:</strong>
        <input
          name="email"
          type="text"
          onChange={handleChange}
          value={form.email}
          placeholder="Your email"
        />
      </div>

      <hr />
      <h3>Preview</h3>
      <div className="preview">
        <p>Name: {form.name}</p>
        <p>Email: {form.email}</p>
      </div>
    </div>
  );
}
