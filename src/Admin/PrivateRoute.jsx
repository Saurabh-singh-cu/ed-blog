const PrivateRoute = ({ element }) => {
    const { isAuthenticated } = useContext(AuthContext);
    return isAuthenticated ? <Route element={element} /> : <Navigate to="/login" replace />;
  };
  