// src/components/PostDetail.js
import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import { BlogContext } from "./BlogContext";

const PostDetail = ({ post }) => {
  const { addComment } = useContext(BlogContext);
  const [comment, setComment] = useState("");

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (comment.trim()) {
      addComment(post.id, comment);
      setComment("");
    }
  };

  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      <form onSubmit={handleCommentSubmit}>
        <input
          type="text"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Add a comment"
        />
        <button type="submit">Submit</button>
      </form>
      <div>
        {post.comments.map((comment, index) => (
          <p key={index}>{comment}</p>
        ))}
      </div>
    </div>
  );
};

PostDetail.propTypes = {
  post: PropTypes.object.isRequired,
};

export default PostDetail;
