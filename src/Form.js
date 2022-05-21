import React,{useContext} from 'react'
import { ThemeContext } from './contexts/ThemeContext';
import { LanguageContext } from './contexts/LanguageContext';
import './Form.css'

const words = {
  english: {
    signIn: "Sign In",
    email: "Email Address",
    password: "Password",
    remember: "Remember Me"
  },
  french: {
    signIn: "Se Connecter",
    email: "Adresse Électronique",
    password: "Mot de Passe",
    remember: "Souviens-toi De Moi"
  },
  spanish: {
    signIn: "Registrarse",
    email: "Correo Electrónico",
    password: "Contraseña",
    remember: "Recuérdame"
  }
};

export default function Form() {
  const {isDarkMode} = useContext(ThemeContext);
  const {language} = useContext(LanguageContext);
  const {email,password,signIn,remember} = words[language];
  return (
    <div className='Form-wrapper'>
       <div className={isDarkMode ? "Form dark" : "Form light"}>
      <h1 className="Form-title">{signIn}</h1>

      <div className="inputContainer">
        <input type="text" className="Form-input" placeholder="email" />
        <label htmlFor="" className={isDarkMode?"label dark":"label light"}>{email}</label>
      </div>

      <div className="inputContainer">
        <input type="text" className="Form-input" placeholder="password" />
        <label htmlFor="" className={isDarkMode?"label dark":"label light"}>{password}</label>   
      </div>
      <div className="inputContainer">
      <label htmlFor="checkbox" className={isDarkMode?"label dark remember":"label light remember"}>
         <input type="checkbox" />
         {remember}
       </label>
      </div>
    <button className='submitBtn'>{signIn}</button>
    </div>
    </div>
  )
}
