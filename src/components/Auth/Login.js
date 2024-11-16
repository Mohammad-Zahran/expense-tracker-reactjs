import React, { useState } from 'react';
import './Auth.css'; 
import { useNavigate } from 'react-router-dom'; 

function Login({ onLoginSuccess }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate(); 

  const handleSubmit = async (e) => {
    e.preventDefault();

    const loginData = { username, password }; 

    try {
      const response = await fetch('http://localhost/expense-tracker/server/login.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginData),
      });

      const result = await response.json();

      if (result.success) {
        localStorage.setItem('username', username);
        onLoginSuccess(); 
        navigate('/home'); 
      } else {
        setError(result.message);
      }
    } catch (error) {
      setError('Error logging in. Please try again.');
    }
  };

  return (
    <div className="auth-container">
      <h1>Login</h1>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label> 
          <input
            type="text"
            value={username} 
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
