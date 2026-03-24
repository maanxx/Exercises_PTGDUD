import React, { useState, useEffect } from "react";

function Bai01() {
  const [user, setUser] = useState([]);
  // way 1: .then()
  //   useEffect(() => {
  //     fetch("https://jsonplaceholder.typicode.com/users")
  //       .then((res) => res.json())
  //       .then((data) => setUser(data))
  //       .catch((err) => console.log(err));
  //   }, []);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await res.json();
        setUser(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchUsers()
  }, []);
  return (
    <div>
      <h1>Nguyễn Phan Minh Mẫn - 22679171</h1>
      <h3>User List</h3>
      <hr />
      {user.map((u) => (
        <div key={u.id} style={{ textAlign: "center", fontSize: "2rem" }}>
          <p style={{ fontWeight: "bold" }}>{u.name}</p>
          <p style={{ fontSize: "1.2rem" }}>{u.email}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default Bai01;
