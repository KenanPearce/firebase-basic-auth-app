import React, { useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import app from './firebase';
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState(''); // Gets data from form
  const [password, setPassword] = useState('');

  const SignIn = async (e) => {
    e.preventDefault(); // prevents browser performing default events

    const auth = getAuth();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password); // checks if the login credentials are correct
      // User signed in successfully
      const user = userCredential.user;
      console.log("User signed in:", user);
      
      navigate('/home');

    } catch (error) {
      // Handle error
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error("Error signing in:", errorCode, errorMessage);
    }
  };

  return (
    <div>
      <h2>SignIn</h2>
      <form onSubmit={SignIn}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
};

export default SignIn;