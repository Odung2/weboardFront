import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface Post {
  postId: number;
  // Add other properties as needed
}

const PostList: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    axios.get<Post[]>('/weboard/posts/')
      .then(response => {
        setPosts(response.data);
      })
      .catch(error => {
        console.error('Error fetching posts:', error);
      });
  }, []);

  return (
    <div>
      <h2>Posts</h2>
      <ul>
        {posts.map(post => (
          <li key={post.postId}>{post.postId} - {/* Display other post properties */}</li>
        ))}
      </ul>
    </div>
  );
};

export default PostList;
