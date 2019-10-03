import React, { useState, useEffect } from "react";
import { useLocalStorage } from './useLocalStorage';

export const useDarkMode = (initialValue ) => {
    const [value, setValue] = useLocalStorage('darkMode', initialValue);

 useEffect(() => {
     if(value){
         document.querySelector("body").classList.add("dark-mode");
     } else {
         document.querySelector("body").classList.remove("dark-mode");
     }
 })

  const toggleDarkMode = () => {
      console.log("darkmode")
        setValue(!value);
  };


    return [value, toggleDarkMode, setValue];
};