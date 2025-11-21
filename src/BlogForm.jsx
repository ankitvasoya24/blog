import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function BlogForm() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    if (id) {
      const saved = JSON.parse(localStorage.getItem("blogs")) || [];
      const blog = saved.find((b) => b.id === id);
      if (blog) {
        setTitle(blog.title);
        setContent(blog.content);
      }
    }
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBlog = {
      id: id || Date.now().toString(),
      title,
      content,
      date: new Date().toLocaleString(),
    };

    const saved = JSON.parse(localStorage.getItem("blogs")) || [];
    let updated;

    if (id) {
      updated = saved.map((b) => (b.id === id ? newBlog : b));
    } else {
      updated = [newBlog, ...saved];
    }

    localStorage.setItem("blogs", JSON.stringify(updated));
    navigate("/");
  };

  return (
    <div>
      <h2>{id ? "Edit Blog" : "Create New Blog"}</h2>
      <form onSubmit={handleSubmit} style={{ marginTop: "15px" }}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter title"
          required
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "10px",
            borderRadius: "6px",
          }}
        />
        <textarea
          rows="8"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Write your blog content..."
          required
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "10px",
            borderRadius: "6px",
          }}
        ></textarea>
        <button
          type="submit"
          style={{
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            padding: "10px 20px",
            borderRadius: "6px",
          }}
        >
          {id ? "Update" : "Publish"}
        </button>
      </form>
    </div>
  );
}
