import React, { Children } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import First from './components/First';
import Login from './components/Login';
import Form from './components/Form';
import ViewForm from './components/ViewForm';
import SignUp from './components/SignUp';
import Navbar from './components/Navbar';
import PropTypes from 'prop-types';


const App = () => {

  const PrivateRoute=({children})=>{
    const token=localStorage.getItem('token')
   return token ? children :<Navigate to='/signup' />
  }
  
PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={
          <PrivateRoute>
            <First/>
          </PrivateRoute>
        } />

        <Route path="/form" element={
          <PrivateRoute>
          <Form />
          </PrivateRoute>
          } />
        <Route path="/view" element={
        <PrivateRoute>
          <ViewForm />
        </PrivateRoute>} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Router>
  );
} 

export default App;