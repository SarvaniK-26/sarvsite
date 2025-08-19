import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import "./Blog.css";

export default function BlogPostPage() {
  const { file } = useParams();
  const [content, setContent] = useState("");

  useEffect(() => {
    import(`./blogs/${file}`)
      .then((res) => fetch(res.default))
      .then((r) => r.text())
      .then((text) => setContent(text));
  }, [file]);

  if (!content) return <p>Loading...</p>;


  return (
    <div className="blog-post-page">

      <div className="top-nav">
        <Link to="/">
          <button className="button">Home</button>
        </Link>
      </div>

      <div className="blog-content">
        <ReactMarkdown>{content}</ReactMarkdown>
      </div>

      <Link to="/blog">
        <button className="button">More Blogs</button>
      </Link>
    </div>
  );
}
