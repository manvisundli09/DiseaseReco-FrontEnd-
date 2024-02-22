import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Heart from './Heart';
import Diabetes from './Diabetes';
import Parkinson from './Parkinson';
import Header from './Header';
import Footer from './Footer';
import Body from './Body';
import './App.css';

function App() {
  return (
    <div>
      <Router>
      <Header />
      <Routes>
        <Route path="/heart" element={<Heart />} />
        <Route path="/diabetes" element={<Diabetes />} />
        <Route path="/parkinson" element={<Parkinson />} />
        <Route path='/' element={<Body />} />
      </Routes>
      <Footer />
      </Router>
      </div>
  );
}

export default App;