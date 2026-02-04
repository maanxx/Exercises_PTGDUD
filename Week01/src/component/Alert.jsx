import useState from "react";

function Alert() {
  const [type, setType] = useState("");
  return (
    <div>
      <button onClick={() => setType("sucess")}>Success</button>
      <button onClick={() => setType("warning")}>Warning</button>
      <button onClick={() => setType("error")}>Error</button>

      <div></div>
    </div>
  );
}

export default Alert;
