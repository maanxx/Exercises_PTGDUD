import { useState } from "react";

function SignIn({ show, onClose }) {
  return (
    <div className={`overlay ${show ? "show" : ""}`}>
      <div className="form-login">
        <span className="btn-close" onClick={onClose}>x</span>
        <h3>Sign In</h3>
        Username:
        <input type="text" placeholder="Username" />
        Password:
        <input type="password" placeholder="Password" />
        <button className="btn-login">Log in</button>
      </div>
    </div>
  );
}

export default SignIn;
