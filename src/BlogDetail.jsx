import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

export default function BlogDetail() {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("blogs")) || [];
    const blog = saved.find((b) => b.id === id);
    setPost(blog);
  }, [id]);

  if (!post) return <p>Post not found!</p>;

  return (
    <div>
      <h2>{post.title}</h2>
      <p style={{ color: "gray", fontSize: "14px" }}>{post.date}</p>
      <p style={{ marginTop: "10px" }}>{post.content}</p>

      <Link
        to="/"
        style={{
          display: "inline-block",
          marginTop: "10px",
          backgroundColor: "#007bff",
          color: "white",
          padding: "8px 15px",
          borderRadius: "6px",
        }}
      >
        Back to Home
      </Link>
    </div>
  );
}

