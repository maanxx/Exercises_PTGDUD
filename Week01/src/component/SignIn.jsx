import { useState } from "react";
import "./SignIn.css"
function SignIn({ show, onClose }) {
  return (
    <div className={`overlay ${show ? "show" : ""}`}>
      <div className="login-form">
        <span className="close-btn" onClick={onClose}>×</span>

        <h2>Login</h2>

        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />

        <button className="login-btn">Login</button>
      </div>
    </div>
  );
}

export default SignIn;
