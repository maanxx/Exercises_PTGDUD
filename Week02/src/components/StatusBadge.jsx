import { useState } from "react";

export default function StatusBadge({ status: initialStatus }) {
  const [status, setStatus] = useState(initialStatus);

  const colorMap = {
    online: "green",
    offline: "gray",
    busy: "red",
  };

  const handleChangeStatus = () => {
    if (status === "online") {
      setStatus("offline");
    } else if (status === "offline") {
      setStatus("busy");
    } else {
      setStatus("online");
    }
  };

  const badgeStyle = {
    padding: "10px 20px",
    borderRadius: "20px",
    color: "white",
    fontWeight: "bold",
    backgroundColor: colorMap[status],
    display: "inline-block",
  };

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h3>Changing your status here, please wait... {status}</h3>

      <div style={badgeStyle}>
        {status.toUpperCase()}
      </div>

      <br />

      <button onClick={handleChangeStatus}>
        Change color
      </button>
    </div>
  );
}