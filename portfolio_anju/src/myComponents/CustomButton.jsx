import './custom_button.css'
import React from 'react'

function CustomButton(props){
    return(
        <button id={props.id} onClick={props.onClick} className={`btn ${props.colorClass}`}>{props.title}</button>
    )
}

export default CustomButton