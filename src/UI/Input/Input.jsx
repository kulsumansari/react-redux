import React from 'react';
import { useState } from "react";
import styles from './Input.module.css';

function Input(props){
    const [value, setValue]= useState('')

    const handleChange=(event)=>{
        setValue(event.target.value)
    }
    return(
        <input
            type={props.type}
            placeholder={props.placeholder}
            onChange={handleChange}
            value={value} />
    )
}
export default Input