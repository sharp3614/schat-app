import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/useAuth'

import Style from './style.module.scss'

const Setting = () => {
  const { currentUser } = useAuth()
  const navigate = useNavigate()
  return (
    <div className={Style.Setting}>
      <div className={Style.back} >
        <button className={Style.btn_back} onClick={
          () => navigate("/")
        } >X</button>
      </div>
      <div>
        <img className={Style.avatar_update} src={currentUser.photoURL} alt="avatar" />
      </div>
    </div>

  )
}

export default Setting