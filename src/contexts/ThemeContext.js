import React,{createContext} from 'react'
import useLocalStorage from '../hooks/useLocalStorage';

export const ThemeContext = createContext();

export function ThemeProvider(props) {
    const [isDarkMode,setIsDarkMode] = useLocalStorage("Theme",false);
    const toggleTheme =()=>{
        setIsDarkMode(!isDarkMode);
    }
  return (
<ThemeContext.Provider value={{isDarkMode,toggleTheme}}>
    {props.children}
</ThemeContext.Provider>
  )
}
