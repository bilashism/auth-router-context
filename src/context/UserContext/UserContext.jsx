import React, { createContext, useEffect, useState } from "react";
import { app } from "../../firebase/firebase.config";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendEmailVerification,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut
} from "firebase/auth";

export const AuthContext = createContext();

const auth = getAuth(app);

const UserContext = ({ children }) => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) =>
    createUserWithEmailAndPassword(auth, email, password);
  const signIn = (email, password) => {
    setLoading(prev => (prev = true));
    return signInWithEmailAndPassword(auth, email, password);
  };

  const googleProvider = new GoogleAuthProvider();

  const signInWithGoogle = () => {
    setLoading(prev => (prev = true));
    return signInWithPopup(auth, googleProvider);
  };

  const userSignOut = () => {
    setLoading(prev => (prev = true));
    return signOut(auth);
  };

  const verifyEmail = () => {
    return sendEmailVerification(auth.currentUser);
  };

  const resetPassword = email => {
    return sendPasswordResetEmail(auth, email);
  };

  // cleanup is required for the user and data management
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      setUser(prev => (prev = { ...user, ...currentUser }));
      setLoading(prev => (prev = !loading));
    });

    return () => unsubscribe();
  }, []);

  const authInfo = {
    user,
    loading,
    verifyEmail,
    resetPassword,
    createUser,
    signIn,
    userSignOut,
    signInWithGoogle
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default UserContext;
