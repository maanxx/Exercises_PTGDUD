import React, { useState, useEffect } from "react";

function Bai04() {
  const [posts, setPosts] = useState([]);
  const [filterPosts, setFillterPosts] = useState([]);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");
  const delay = 
    (ms) => new Promise((solve) => setTimeout(solve, ms))
 
  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      try {
        if (!res.ok) {
          throw new Error("Posts not found");
        }

        const data = await res.json();
        await delay(1500);
        setPosts(data);
        setFillterPosts(data);
      } catch (error) {
        setError(error.message)
      }
    };
    fetchPosts();
  }, []);

  useEffect(() => {
    const result = posts.filter((p) =>
      p.title.toLowerCase().includes(search.toLowerCase()),
    );
    setFillterPosts(result);
  }, [search, posts]);
  return (
    <div>
        {error && <p style={{color: 'red'}}>{error}</p>}
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="What are you looking for now?"
      />
      {filterPosts.map((p) => (
        <div key={p.id}>
          <p>Title: {p.title}</p>
          <p>Body: {p.body}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default Bai04;
