import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import BlogPage from "./Blog";
import BlogPostPage from "./BlogPostPage";

const blogPosts = [
  {
    id: 1,
    title: "My First Blog Post",
    date: "August 15, 2025",
    excerpt: "Truly just want to journal the things I learn about...",
    content: "Will go more in depth in a bit!",
  },
  
];

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<BlogPage blogPosts={blogPosts} />} />
        <Route path="/blog/:id" element={<BlogPostPage blogPosts={blogPosts} />} />
      </Routes>
    </Router>
  );
}

export default App;
