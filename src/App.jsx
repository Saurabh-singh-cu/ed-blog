// import React, { useEffect, useState } from "react";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Navigate,
// } from "react-router-dom";
// import Home from "./pages/Home";
// import Contact from "./components/Contact";
// import Signin from "./components/Signin";
// import ReadMore from "./components/ReadMore";
// import Research from "./components/Research";
// import CreateBlog from "./Admin/CreateBlog";
// import Blogs from "./components/Blogs";
// import CreateResearch from "./Admin/CreateResearch";
// import UserTable from "./Admin/UserTable";

// const PrivateRoute = ({ element, isAuthenticated }) => {
//   return isAuthenticated ? element : <Navigate to="/login" replace />;
// };

// const App = () => {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);

//   useEffect(() => {
//     const checkAuthentication = () => {
//       const token = localStorage.getItem("AdminSaurabh")?.accessToken;
//       setIsAuthenticated(!!token);
//     };

//     checkAuthentication();
//   }, []);

//   return (
//     <Router>
//       <div>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/research" element={<Research />} />
//           <Route path="/blog/:id" element={<ReadMore />} />
//           <Route path="/contact" element={<Contact />} />
//           <Route path="/bg" element={<Blogs />} />

//           <Route
//             path="/cb"
//             element={
//               <PrivateRoute
//                 element={<CreateBlog />}
//                 isAuthenticated={isAuthenticated}
//               />
//             }
//           />

//           <Route
//             path="/cr"
//             element={
//               <PrivateRoute
//                 element={<CreateResearch />}
//                 isAuthenticated={isAuthenticated}
//               />
//             }
//           />

//           <Route
//             path="/ut"
//             element={
//               <PrivateRoute
//                 element={<UserTable />}
//                 isAuthenticated={isAuthenticated}
//               />
//             }
//           />

//           <Route path="/login" element={<Signin />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// };

// export default App;

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

const AuthContext = createContext();

const PrivateRoute = ({ element }) => {
  const { isAuthenticated } = useContext(AuthContext);
  return isAuthenticated ? element : <Navigate to="/login" replace />;
};

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const checkAuthentication = async () => {
      try {
        const token = localStorage.getItem("AdminSaurabh")?.accessToken;

        if (token) {
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
