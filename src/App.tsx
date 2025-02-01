import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import SocialHandbook from './components/SocialHandbook';
import TipDetail from './components/TipDetail';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<SocialHandbook />} />
            <Route path="/tip/:id" element={<TipDetail />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App; 