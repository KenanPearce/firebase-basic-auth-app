// Registration.js
import React, { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import app from './firebase';

const Registration = () => {
  const [email, setEmail] = useState(''); // Recieve state from the input feilds
  const [password, setPassword] = useState('');

  const handleRegistration = () => {
    const auth = getAuth(app);

    createUserWithEmailAndPassword(auth, email, password) // firebase function to create an account using the below credentials
      .then((userCredential) => {
        console.log('User registered:', userCredential.user);
      })
      .catch((error) => {
        // Handle registration errors
        console.error('Registration error:', error);
      });
  };

  //HTML Output and store the data to be processed above
  return (
    <div>
      <h2>Registration</h2>
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleRegistration}>Register</button>
    </div>
  );
};

export default Registration;
