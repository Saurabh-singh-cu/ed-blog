import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./components/Contact";
import Signin from "./components/Signin";
import ReadMore from "./components/ReadMore";
import Research from "./components/Research";
import CreateBlog from "./Admin/CreateBlog";
import Blogs from "./components/Blogs";
import CreateResearch from "./Admin/CreateResearch";
import UserTable from "./Admin/UserTable";

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
          <Route path="/blog/:id" element={<ReadMore />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/bg" element={<Blogs />} />
          
          <Route path="/bg" element={<Blogs />} />
          <Route path="/cb" element={<CreateBlog />} />
          <Route path="/cr" element={<CreateResearch />} />
          <Route path="/ut" element={<UserTable />} />
          
        

          <Route path="/login" element={<Signin />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
