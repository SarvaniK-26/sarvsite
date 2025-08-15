import React from "react";
import "./Blog.css"; 
import { Link } from "react-router-dom";

export default function BlogPage() {
  const blogPosts = [
    {
      id: 1, 
      title: "My First Blog Post",
      date: "August 15, 2025",
      excerpt:
        "Truly just want to journal the things I learn about so I can improve my writing and retaining skills :)",
        content: "This is the full text of my blog post. I can include multiple paragraphs, code snippets, or images."

    },
  ];

  return (
    <div className="blog-page">
      <h1 className="blog-title">Blog</h1>
      <div className="blog-list">
        {blogPosts.map((post) => (
          <div key={post.id} className="blog-card">
            <h2 className="blog-post-title">{post.title}</h2>
            <p className="blog-date">{post.date}</p>
            <p className="blog-excerpt">{post.excerpt}</p>
            <Link to={`/blog/${post.id}`}>
              <button className="button">Read More</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
