// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FormPage from './Components/FormPage';
import PortfolioPage from './Components/PortfolioPage';
import './App.css';

function App() {
  return (
    <Router>
      <h2>hiiiiiiiiii</h2>
      <div className="App">
        <Routes>
          <Route path="/" element={<FormPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
