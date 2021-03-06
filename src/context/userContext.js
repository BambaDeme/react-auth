import { createContext, useState, useEffect } from "react";

import {
  signUpWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";

import { auth } from "../firebase-config";
export const UserContext = createContext();

export function UserContextProvider(props) {
  const [currentUser, setCurrentUser] = useState();
  const [loadingData, setLoadingData] = useState(true);

  const signUp = (email, pwd) =>
    createUserWithEmailAndPassword(auth, email, pwd);
  //modal
  const [modalState, setModalState] = useState({
    signUpModal: false,
    signInModal: false,
  });

  const toggleModals = (modal) => {
    if (modal === "signUp") {
      setModalState({
        signUpModal: true,
        signInModal: false,
      });
    }
    if (modal === "signIn") {
      setModalState({
        signUpModl: false,
        signInModal: true,
      });
    }
    if (modal === "close") {
      setModalState({
        signUpModl: false,
        signInModal: false,
      });
    }
  };
  return (
    <UserContext.Provider value={{ modalState, toggleModals, signUp }}>
      {props.children}
    </UserContext.Provider>
  );
}
