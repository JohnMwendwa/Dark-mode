import React, { useContext } from 'react';
import {ThemeContext} from './contexts/ThemeContext';
import {LanguageContext} from './contexts/LanguageContext';


export default function Navbar() {
  const {language,changeLanguage} = useContext(LanguageContext);
  const {isDarkMode,toggleTheme} = useContext(ThemeContext)
  return (
    <div className='Navbar' >
      <select value={language} onChange={changeLanguage}>
        <option value="english">Kenya</option>
        <option value="french">France</option>
        <option value="spanish">Spain</option>
      </select>
      
      <label htmlFor="checkbox">
        {isDarkMode? 'dark' :'light'}
        <input type="checkbox"  onClick={toggleTheme} />
      </label>
    </div>
  )
}
