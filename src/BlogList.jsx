import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function BlogList() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("blogs")) || [];
    setBlogs(saved);
  }, []);

  const handleDelete = (id) => {
    const updated = blogs.filter((b) => b.id !== id);
    localStorage.setItem("blogs", JSON.stringify(updated));
    setBlogs(updated);
  };

  return (
    <div>
      {blogs.length === 0 ? (
        <p>No blogs yet. <Link to="/new">Create one</Link>.</p>
      ) : (
        blogs.map((b) => (
          <div
            key={b.id}
            style={{
              border: "1px solid #ddd",
              borderRadius: "10px",
              padding: "15px",
              marginBottom: "15px",
            }}
          >
            <h2>
              <Link to={`/post/${b.id}`}>{b.title}</Link>
            </h2>
            <p>{b.content.slice(0, 100)}...</p>
            <div style={{ marginTop: "10px" }}>
              <Link to={`/edit/${b.id}`}>Edit</Link>
              <button
                onClick={() => handleDelete(b.id)}
                style={{
                  color: "white",
                  backgroundColor: "red",
                  border: "none",
                  borderRadius: "6px",
                  marginLeft: "10px",
                  padding: "5px 10px",
                }}
              >
                Delete
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
