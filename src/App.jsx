
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from "./pages/Home";
import Contact from './components/Contact';
import Signin from './components/Signin';
import ReadMore from './components/ReadMore';
import Research from './components/Research';

const PrivateRoute = ({ element, isAuthenticated }) => {
  return isAuthenticated ? element : <Navigate to="/login" />;
};

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/research" element={<Research />} />
          <Route path="/readmore" element={<ReadMore />} />
          <Route path="/contact" element={<PrivateRoute element={<Contact />} isAuthenticated={isAuthenticated} />} />
          <Route
            path="/login"
            element={<Signin setIsAuthenticated={setIsAuthenticated} />}
          />
          {/* Add other public routes here */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;


