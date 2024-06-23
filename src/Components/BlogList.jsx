// src/components/BlogList.js
import React, { useContext } from "react";
import { BlogContext } from "./BlogContext";
import PostDetail from "./PostDetail";

const BlogList = () => {
  const { posts } = useContext(BlogContext);

  return (
    <div>
      {posts.map((post) => (
        <PostDetail key={post.id} post={post} />
      ))}
    </div>
  );
};

export default BlogList;
