import React, { useState } from 'react';

interface SignupFormProps {
  onSignup: (username: string, password: string) => void;
}

const SignupForm: React.FC<SignupFormProps> = ({ onSignup }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSignup(username, password);
  };

  return (
    <div>
      <h2>User Signup</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label><br />
        <input type="text" id="username" value={username} onChange={e => setUsername(e.target.value)} /><br />
        <label htmlFor="password">Password:</label><br />
        <input type="password" id="password" value={password} onChange={e => setPassword(e.target.value)} /><br /><br />
        <button type="submit">Signup</button>
      </form>
    </div>
  );
};

export default SignupForm;
