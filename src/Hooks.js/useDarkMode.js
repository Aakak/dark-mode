import React, { useEffect } from "react";
import { useLocalStorage } from './Hooks/useLocalStorage';

export const useDarkMode = (key, initialValue ) => {
    const [value, setValue] = useLocalStorage(key, initialValue);

 useEffect(() => {
     if(value){
         document.querySelector("body").classList.add("dark-mode");
     } else {
         document.querySelector("body").classList.remove("dark-mode");
     }
 })

    return [value, handleChanges, setValue];
};