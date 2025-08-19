import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import BlogPage from "./Blog";
import BlogPostPage from "./BlogPostPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:file" element={<BlogPostPage />} />
      </Routes>
    </Router>
  );
}

export default App;
