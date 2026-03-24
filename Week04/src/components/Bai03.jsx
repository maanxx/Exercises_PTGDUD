import React, { useState, useEffect } from "react";
function Bai03() {
  const [userId, setUserid] = useState("");
  const [users, setUsers] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  useEffect(() => {
    if (!userId) return;
    const fetchUsers = async () => {
      setLoading(true);
      setError(null);
      try {
        if (userId < 1 || userId > 10) {
          throw new Error("Validate userId (1-10)");
        }

        const res = await fetch(
          `https://jsonplaceholder.typicode.com/users/${userId}`,
        );
        if (!res.ok) {
          throw new Error("User not found");
        }
        await delay(1500);

        const data = await res.json();

        setUsers(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false)
      }
    };

    fetchUsers();
  }, [userId]);
  return (
    <div>
      <h3>UserId:</h3>
      <input
        type="number"
        value={userId}
        onChange={(e) => setUserid(e.target.value)}
        placeholder="Enter your userid"
      />
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {users && (
        <div>
          <p>Name: {users.name}</p>
          <p>Phone: {users.phone}</p>
          <p>Website: {users.website}</p>
        </div>
      )}
    </div>
  );
}

export default Bai03;
