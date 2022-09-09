import React from 'react'
import Style from './style.module.scss'

const Input = (props) => {
    const {title, name, type, placeholder, inputRef} = props
  return (
    <div className={Style.Container}>
        <label htmlFor={name}>{title}</label>
        <input ref={inputRef} id={name} name={name} type={type} placeholder={placeholder} />
    </div>
  )
}

export default Input