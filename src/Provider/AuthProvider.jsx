import React, { useEffect, useState } from "react";
import { AuthContex } from "./AuthContex";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth } from "../Firebase/firebase.config";

const AuthProvider = ({ children }) => {
  const googleProvider = new GoogleAuthProvider();
  const [user, setUser] = useState(null);
  const [loding, setLoding] = useState(true);
  const createUser = (email, password) => {
    setLoding(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const singIn = (email, password) => {
    setLoding(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const SingWithGoogle = () => {
    setLoding(true);
    return signInWithPopup(auth, googleProvider);
  };

  const singOut = () => {
    setLoding(true);
    return signOut(auth);
  };
  const updeteUser = (updeteUser) => {
    setLoding(true);
    return updateProfile(auth.currentUser, updeteUser);
  };
  useEffect(() => {
    const unsuscrib = onAuthStateChanged(auth, (carrentUser) => {
      setUser(carrentUser);

      setLoding(false);
    });
    return () => {
      unsuscrib;
    };
  }, []);

  const AuthDAta = {
    user,
    loding,
    setLoding,
    setUser,
    createUser,
    singIn,
    SingWithGoogle,
    singOut,
    updeteUser,
  };

  return <AuthContex value={AuthDAta}>{children}</AuthContex>;
};

export default AuthProvider;
