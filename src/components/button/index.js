import React from 'react'

import Style from './style.module.scss'

const Button = (props) => {
  const { clss, title, click } = props
  
  return (
    <button
      className={Style.Btn + " " + clss}
      onClick={() => click()}
    >
      {title}
    </button>
  )
}

export default Button