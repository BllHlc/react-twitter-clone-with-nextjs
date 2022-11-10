import { createContext, useContext, useEffect, useState } from "react";

const MainContext = createContext();


const MainContextProvider = ({ children }) => {
  const [themes, setThemes] = useState(null);
  const [colors, setColors] = useState(null);

  useEffect(() => {
    const theme = localStorage.getItem("theme") || "default";
    const color = localStorage.getItem("color") || "#1d9bf0";
    setThemes(theme);
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

  const value = {
    colors,
    setColors,
    themes,
    changeTheme,
    changeColor,
  };

  return (
    <MainContext.Provider value={value}>
      {children}
    </MainContext.Provider>
  );
};

const useMainContext = () => useContext(MainContext);

export { MainContextProvider, useMainContext };

