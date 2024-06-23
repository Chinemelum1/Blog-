// src/components/BlogForm.js
import React, { useState, useContext } from "react";
import { BlogContext } from "./BlogContext";

const BlogForm = () => {
  const { addPost } = useContext(BlogContext);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() && content.trim()) {
      addPost({ title, content });
      setTitle("");
      setContent("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
      />
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Content"
      />
      <button type="submit">Add Post</button>
    </form>
  );
};

export default BlogForm;
