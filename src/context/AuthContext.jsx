import { createContext, useContext, useEffect, useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../config/firebase.js";
import PropTypes from "prop-types";

const AuthContext = createContext(undefined);

const useAuth = () => useContext(AuthContext);

const logout = () => signOut(auth);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    return onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
  }, []);

  return (
    <AuthContext.Provider value={{ user }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.element,
};
/* eslint-disable react-refresh/only-export-components */
export { AuthProvider as default, AuthContext, useAuth, logout };
