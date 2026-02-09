import { useState } from "react";
import "./Alert.css";
function Alert() {
  const [type, setType] = useState("");
  return (
    <div className="buttons">
      <button onClick={() => setType("success")}>Success</button>
      <button onClick={() => setType("warning")}>Warning</button>
      <button onClick={() => setType("error")}>Error</button>

      {type && (
        <div className={`alert alert-${type}`}>
          This is a notification of {type}
        </div>
      )}
    </div>
  );
}

export default Alert;
