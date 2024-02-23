import React, { useState, useEffect, createContext, useContext } from "react";
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
import Header from "./components/Header";

const AuthContext = createContext();

const PrivateRoute = ({ element }) => {
  const { isAuthenticated } = useContext(AuthContext);
  return isAuthenticated ? (
    <Route element={element} />
  ) : (
    <Navigate to="/login" replace />
  );
};

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const checkAuthentication = async () => {
      try {
        const accessToken = localStorage.getItem("AdminSaurabh")?.token;

        if (accessToken) {
          const decodedToken = atob(token);

          setIsAuthenticated(true);
        } else {
          setIsAuthenticated(false);
          console.error("Token not found");
        }
      } catch (error) {
        setIsAuthenticated(false);
        console.error("Error during token validation", error);
      }
    };

    checkAuthentication();
  }, []);

  return (
    <Router>
      <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
        <Header />
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/research" element={<Research />} />
            <Route path="/blog/:id" element={<ReadMore />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/bg" element={<Blogs />} />
            <Route path="/login" element={<Signin />} />
            
                <Route path="/cb" element={<CreateBlog />} />
                <Route path="/cr" element={<CreateResearch />} />
                <Route path="/ut" element={<UserTable />} />
            
          </Routes>
        </div>
      </AuthContext.Provider>
    </Router>
  );
};

export default App;
