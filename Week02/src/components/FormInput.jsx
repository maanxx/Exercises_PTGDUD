import { useState } from "react`";

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
    <div>
      <h3>Information</h3>
      Your name:{" "}
      <input
        name="name"
        type="text"
        onChange={handleChange}
        value={form.name}
        placeholder="Your name"
      />
      Your email:{" "}
      <input
        name="email"
        type="text"
        onChange={handleChange}
        value={form.email}
        placeholder="Your email"
      />
      <hr />
      <h3>Preview</h3>
      <p>Name: {form.name}</p>
      <p>Email: {form.email}</p>
    </div>
  );
}
