import React from "react";
import { useParams } from "react-router-dom";
import "./Blog.css";

export default function BlogPostPage({ blogPosts }) {
  const { id } = useParams(); 
  const post = blogPosts.find((p) => p.id === parseInt(id));

  if (!post) return <p>Post not found.</p>;

  return (
    <div className="blog-post-page">
      <h1 className="blog-post-title">{post.title}</h1>
      <p className="blog-date">{post.date}</p>
      <p className="blog-content">{post.content}</p>
    </div>
  );
}
