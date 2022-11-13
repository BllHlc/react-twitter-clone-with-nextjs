import { createContext, useContext, useEffect, useState } from "react";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { app, auth, database } from "../constants/firebase";
import { getDatabase, ref, set } from "firebase/database";


const MainContext = createContext();

const MainContextProvider = ({ children }) => {
  const [themes, setThemes] = useState(null);
  const [colors, setColors] = useState(null);
  const [login, setLogin] = useState(false);
  const [user, setUser] = useState(null);
  const [tweets, setTweets] = useState(null);

  useEffect(() => {
    const theme = localStorage.getItem("theme") || "default";
    const color = localStorage.getItem("color") || "#1d9bf0";
    const login = localStorage.getItem("login") || false;
    const user = localStorage.getItem("user");
    setThemes(theme);
    setColors(color);
    setLogin(login);
    if (user && login) {
      setLogin(true);
      setUser(JSON.parse(user));
    }
  }, []);

  const changeTheme = (theme) => {
    setThemes(theme);
    localStorage.setItem("THEME", theme);
  };

  const changeColor = (color) => {
    setColors(color);
    localStorage.setItem("COLOR", color);
  };

  useEffect(() => {
    const $html = document.querySelector("html");
    const theme = localStorage.getItem("THEME");
    const color = localStorage.getItem("COLOR");
    theme && setThemes(theme);
    color && setColors(color);
    $html.classList = "";
    $html.classList = theme + " " + color;
  }, [themes, colors]);

  const loginWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider).then((result) => {
      localStorage.setItem("user", JSON.stringify(auth.currentUser));
      localStorage.setItem("login", true);
      setLogin(true);
      setUser(auth.currentUser);
    }).catch((error) => {
      console.log(error);
    });
  };

  const logout = () => {
    signOut(auth).then(() => {
      localStorage.removeItem("user");
      localStorage.removeItem("login");
      setLogin(false);
      setUser(null);
    }).catch((error) => {
      console.log(error);
    });
  };




  const value = {
    colors,
    setColors,
    themes,
    changeTheme,
    changeColor,
    login,
    setLogin,
    loginWithGoogle,
    logout,
    user,
    setUser


  };

  return (
    <MainContext.Provider value={value}>
      {children}
    </MainContext.Provider>
  );
};

const useMainContext = () => useContext(MainContext);

export { MainContextProvider, useMainContext };

