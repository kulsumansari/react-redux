import React from 'react'
import styles from './Button.module.css'
function Button(props){
    return(
        <button onClick={props.onClick}> {props.label} </button>
    )
}

export default Button;