import { useState } from "react";

export const useLocalStorage = (key, initialValue) => {
    if (typeof key !== 'string') {
        throw new Error(
            'Invalid Params: useLacalStorage should receive a string for the first argument'
        );
    }

    const [storedValue, setStoredValue] = useState(() => {
        if(localStorage.getItem(key)) {
            return JSON.parse(window.localStorage.getItem(key));
        } else {
            window.localStorage.setItem(key, JSON.stringify(initialValue));
            return inivialValue;
        }
    });
  
    const setValue = value => {
        setStoredValue(value);
        window.localStorage.setItem(key, JSON.stringify(value));
    };
    return [storedValue, setValue];

}