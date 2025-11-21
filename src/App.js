import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import BlogList from "./BlogList";
import BlogForm from "./BlogForm";
import BlogDetail from "./BlogDetail";

export default function App() {
  return (
    <Router>
      <div style={{ padding: "20px", fontFamily: "Arial" }}>
        <h1 style={{ textAlign: "center", color: "#007bff" }}>📝 Dynamic Blog App</h1>

        <nav style={{ marginBottom: "20px", textAlign: "center" }}>
          <Link to="/new">Add Blog</Link>
        </nav>

        <Routes>
          <Route path="/" element={<BlogList />} />
          <Route path="/new" element={<BlogForm />} />
          <Route path="/edit/:id" element={<BlogForm />} />
          <Route path="/post/:id" element={<BlogDetail />} />
        </Routes>
      </div>
    </Router>
  );
}
