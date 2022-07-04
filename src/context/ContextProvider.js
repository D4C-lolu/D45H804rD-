import React, { createContext, useContext, useState } from "react";

const StateContext = createContext();

export const ContextProvider = ({ children }) => {
  const [activeMenu, setActiveMenu] = useState(false);
  const [activeChat, setActiveChat] = useState(false);
  const [activeCart, setActiveCart] = useState(false);
  const [activeUserProfile, setActiveUserProfile] = useState(false);
  const [activeNotification, setActiveNotification] = useState(false);
  const [screenSize, setScreenSize] = useState(undefined);
  const [currentColour, setCurrentColour] = useState("#03C907");
  const [currentMode, setCurrentMode] = useState("Light");
  const [themeSettings, setThemeSettings] = useState(false);

  const setChat = (val) => {
    if (typeof val === "boolean") {
      setActiveChat(val);
      setActiveCart(false);
      setActiveUserProfile(false);
      setActiveNotification(false);
    }
  };

  const setCart = (val) => {
    if (typeof val === "boolean") {
      setActiveChat(false);
      setActiveCart(val);
      setActiveUserProfile(false);
      setActiveNotification(false);
    }
  };
  const setUserProfile = (val) => {
    if (typeof val === "boolean") {
      setActiveChat(false);
      setActiveCart(false);
      setActiveUserProfile(val);
      setActiveNotification(false);
    }
  };
  const setNotification = (val) => {
    if (typeof val === "boolean") {
      setActiveChat(false);
      setActiveCart(false);
      setActiveUserProfile(false);
      setActiveNotification(val);
    }
  };

  const setMode = (e) => {
    setCurrentMode(e.target.value);
    localStorage.setItem("themeMode", e.target.value);
    setThemeSettings(false);
  };

  const setColour = (colour) => {
    setCurrentColour(colour);
    localStorage.setItem("colourMode", colour);
    setThemeSettings(false);
  };

  return (
    <StateContext.Provider
      value={{
        activeMenu,
        setActiveMenu,
        activeCart,
        activeChat,
        activeUserProfile,
        activeNotification,
        setCart,
        setChat,
        setNotification,
        setUserProfile,
        screenSize,
        setScreenSize,
        currentColour,
        setColour,
        setMode,
        currentMode,
        themeSettings,
        setThemeSettings,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
