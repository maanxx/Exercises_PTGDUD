import "./Button.css";

function Button({ type, children }) {
  return (
    <div>
      <button className={`btn btn-${type}`}>{children}</button>
    </div>
  );
}

export default Button;
