import React, { Children } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import First from './components/First';
import Login from './components/Login';
import Form from './components/Form';
import ViewForm from './components/ViewForm';
import SignUp from './components/SignUp';
import Navbar from './components/Navbar';


const App = () => {


  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={
            <First/>
        } />

        <Route path="/form" element={
          
          <Form />
          
          } />
        <Route path="/view" element={
        
          <ViewForm />
        } />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Router>
  );
} 

export default App;