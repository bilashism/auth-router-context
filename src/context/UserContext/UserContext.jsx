import React, { createContext, useEffect, useState } from "react";
import { app } from "../../firebase/firebase.config";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut
} from "firebase/auth";

export const AuthContext = createContext();

const auth = getAuth(app);

const UserContext = ({ children }) => {
  const [user, setUser] = useState({ displayName: "Dummy" });
  const createUser = (email, password) =>
    createUserWithEmailAndPassword(auth, email, password);
  const signIn = (email, password) =>
    signInWithEmailAndPassword(auth, email, password);

  const userSignOut = () => signOut(auth);

  // cleanup is required for the user and data management
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  const authInfo = { user, createUser, signIn, userSignOut };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default UserContext;
