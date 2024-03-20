import React, { useState } from 'react';
import axios from 'axios';

interface PostFormProps {
  onSubmit: () => void;
}

const PostForm: React.FC<PostFormProps> = ({ onSubmit }) => {
  const [post, setPost] = useState<Post>({ postId: 0 /* Add other default properties */ });

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      await axios.post('/weboard/posts/insertPost', post);
      onSubmit();
    } catch (error) {
      console.error('Error inserting post:', error);
    }
  };

  return (
    <div>
      <h2>Create Post</h2>
      <form onSubmit={handleSubmit}>
        {/* Add input fields for other post properties */}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default PostForm;
