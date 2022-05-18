import React,{useContext} from 'react'
import { ThemeContext } from './contexts/ThemeContext'

export default function Form() {
  const {isDarkMode} = useContext(ThemeContext)
  return (
    <div className='Form-wrapper'>
       <div className={isDarkMode ? "Form dark" : "Form light"}>
      <h1 className="Form-title">Sign In</h1>

      <div className="inputContainer">
        <input type="text" className="Form-input" placeholder="a" />
        <label htmlFor="" className={isDarkMode?"label dark":"label light"}>Email</label>
      </div>

      <div class="inputContainer">
        <input type="text" className="Form-input" placeholder="a" />
        <label htmlFor="" className={isDarkMode?"label dark":"label light"}>Password</label>   
      </div>

    <button className='submitBtn'>Sign In</button>
    </div>
    </div>
  )
}
