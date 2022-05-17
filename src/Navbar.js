import React, { useContext } from 'react';
import {LanguageContext} from './contexts/LanguageContext';


export default function Navbar() {
  const {isDarkMode} = useContext(LanguageContext)
  return (
    <div className='Navbar' >
      <select >
        <option value="english">Kenya</option>
        <option value="french">France</option>
        <option value="spanish">Spain</option>
      </select>
      
      <label htmlFor="checkbox">
        {isDarkMode? 'dark' :'light'}
        <input type="checkbox"  />
      </label>
    </div>
  )
}
