import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface Comment {
  commentId: number;
  // Add other properties as needed
}

interface CommentListProps {
  postId: number;
}

const CommentList: React.FC<CommentListProps> = ({ postId }) => {
  const [comments, setComments] = useState<Comment[]>([]);

  useEffect(() => {
    axios.get<Comment[]>(`/weboard/comments/${postId}`)
      .then(response => {
        setComments(response.data);
      })
      .catch(error => {
        console.error('Error fetching comments:', error);
      });
  }, [postId]);

  return (
    <div>
      <h2>Comments for Post {postId}</h2>
      <ul>
        {comments.map(comment => (
          <li key={comment.commentId}>{comment.commentId} - {/* Display other comment properties */}</li>
        ))}
      </ul>
    </div>
  );
};

export default CommentList;
