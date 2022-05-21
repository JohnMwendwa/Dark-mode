import React,{createContext} from 'react'
import useLocalStorage from '../hooks/useLocalStorage';

export const LanguageContext = createContext();

export  function LanguageProvider(props) {
   const [language,setLanguage] = useLocalStorage("Language",'english');

  const changeLanguage=(e)=>{
       setLanguage(e.target.value);
   }
  return (
    <LanguageContext.Provider value={{language,changeLanguage}}>
        {props.children}
    </LanguageContext.Provider>
  )
}
