import React from 'react'
import Style from './style.module.scss'

const Input = (props) => {
  const { title, name, type, placeholder, inputRef, inputValue, onChange, error, onKeyDown } = props
  return (
    <div className={Style.Container}>
      {title &&
        <label
        htmlFor={name}
      >
        {title}
      </label>
      }
      <input
        ref={inputRef}
        value={inputValue}
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        onKeyDown={onKeyDown}
      />
      {error && <span className={Style.warning}>{error}</span>}
    </div>
  )
}

export default Input