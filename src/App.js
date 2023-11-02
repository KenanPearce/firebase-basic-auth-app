import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Login from './login';
import Registration from './registration';
import Home from './home';
import app from './firebase';

// Allows page to change depending on the state using react-router-dom
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <>
            <Login />
            <Registration />
            
          </>
        } />
        <Route path="/home" element={<Home/>}/>
      </Routes>
    </Router>
  );
};


export default App;