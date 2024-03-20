import React, { useState } from 'react';
import axios from 'axios';

interface CommentFormProps {
  postId: number;
  onSubmit: () => void;
}

const CommentForm: React.FC<CommentFormProps> = ({ postId, onSubmit }) => {
  const [comment, setComment] = useState<Comment>({ commentId: 0 /* Add other default properties */ });

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      await axios.post('/weboard/comments/insertComment', { ...comment, postId });
      onSubmit();
    } catch (error) {
      console.error('Error inserting comment:', error);
    }
  };

  return (
    <div>
      <h2>Create Comment for Post {postId}</h2>
      <form onSubmit={handleSubmit}>
        {/* Add input fields for other comment properties */}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CommentForm;
