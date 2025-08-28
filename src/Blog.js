import React from "react";
import { Link } from "react-router-dom";
import "./Blog.css";

// List your Markdown blog posts here
const blogPosts = [
  {
    id: 2,
    title: "AI...pls stop trusting it so much",
    date: "August 24, 2025",
    excerpt: "Read some cool papers about AI faithfulness + plausability",
    file: "post2.md",
  }, 
  {
    id: 1,
    title: "Helloooooo, welcome in :)",
    date: "August 18, 2025",
    excerpt:
      "Truly just want to journal the things I learn about so I can improve my writing and retaining skills!",
    file: "post1.md", 
  }
];

export default function BlogPage() {
  return (
    <div className="blog-page">
      <div className="top-nav">
          <Link to="/">
              <button className="button">Return to Home</button>
          </Link>
      </div>

      <h1 className="blog-title">Blog</h1>
      <div className="blog-list">
        {blogPosts.map((post) => (
          <div key={post.id} className="blog-card">
            <p className="blog-post-title">{post.title}</p>
            <p className="blog-date">{post.date}</p>
            <p className="blog-excerpt">{post.excerpt}</p>
            <Link to={`/blog/${post.file}`}>
              <button className="button">Read More</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
