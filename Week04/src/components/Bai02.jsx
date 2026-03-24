import React, { useState, useEffect } from "react";

function Bai02() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  //Way 2: setTimeout
  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        setError(null);
        const res = await fetch("https://jsonplaceholder.typicode.com/usersa");

        if (!res.ok) {
          throw new Error("API error!");
        }
        const data = await res.json();
        await delay(1000);
        setUsers(data);
        // way1: to setTimeout
        // setTimeout(() => {
        //   setUsers(data);
        //   setLoading(false);
        // }, 3000);

        //way2: setTimeout pro
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false)
      }
    };
    fetchUsers();
  }, []);
  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Error: {error}</p>;
  }
  return (
    <div>
      <h1>User List</h1>
      <hr />
      {users.map((u) => (
        <div key={u.id}>
          <p>{u.name}</p>
          <p>{u.email}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default Bai02;
