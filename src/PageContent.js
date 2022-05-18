import React,{useContext} from 'react'
import {ThemeContext} from './contexts/ThemeContext';

export default function PageContent(props) {
  const {isDarkMode} = useContext(ThemeContext);
  const styles={
    background: isDarkMode ? "#525046" :"#fff",
    width:"100vw",
    height:"100vh"
  }
  return (
    <div style={styles}>
        {props.children}
    </div>
  )
}
