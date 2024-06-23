// src/BlogContext.js
import React, { createContext, useState, useEffect } from "react";

// Mock API data
const mockData = [
  {
    id: 1,
    title: "First Post",
    content: "This is the first post.",
    comments: [],
  },
  {
    id: 2,
    title: "Second Post",
    content: "This is the second post.",
    comments: [],
  },
];

export const BlogContext = createContext();

export const BlogProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Simulate fetching data from an API
    setPosts(mockData);
  }, []);

  const addPost = (post) => {
    setPosts([...posts, { ...post, id: posts.length + 1, comments: [] }]);
  };

  const addComment = (postId, comment) => {
    setPosts(
      posts.map((post) =>
        post.id === postId
          ? { ...post, comments: [...post.comments, comment] }
          : post
      )
    );
  };

  return (
    <BlogContext.Provider value={{ posts, addPost, addComment }}>
      {children}
    </BlogContext.Provider>
  );
};
