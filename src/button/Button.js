import React from 'react'
import './button.css'

const Button = (props) =>{
    return (
        <div className="btnContener">
            <button className='btnAdd' onClick={props.handelChange}>Plant an Emojit</button>
        </div>
    ) 
}

export default Button