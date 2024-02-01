// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Home from "./pages/Home";
// import Contact from "./components/Contact";
// import Signin from "./components/Signin";


// const App = () => {
//   return (
//     <Router>
//       <div>
//         <Routes>

//           <Route path="/home" element={<Home />} />
//           <Route path="/contact" element={<Contact />} />
//           <Route path="/" element={<Signin />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// };

// export default App;

// App.js





// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from "./pages/Home";
import Contact from './components/Contact';
import Signin from './components/Signin';

const PrivateRoute = ({ element, isAuthenticated }) => {
  return isAuthenticated ? element : <Navigate to="/login" />;
};

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/home" element={<PrivateRoute element={<Home />} isAuthenticated={isAuthenticated} />} />
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


