import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import First from './components/First';
import Login from './components/Login';
import Form from './components/Form';
import ViewForm from './components/ViewForm';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<First />} />
        <Route path="/login" element={<Login />} />
        <Route path="/form" element={<Form />} />
        <Route path="/view" element={<ViewForm />} />

      </Routes>
    </Router>
  );
} 

export default App;