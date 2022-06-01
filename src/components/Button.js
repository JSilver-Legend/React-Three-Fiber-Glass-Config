import React from 'react'
import '../styles/components/button.scss'

const Button = (props) => {
  return <button onClick={props.callback}>{props.label}</button>;   
}
 
export default Button