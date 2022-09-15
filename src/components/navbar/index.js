import { signOut } from 'firebase/auth'
import React from 'react'
import { auth } from '../../constants/firebase'
import { useAuth } from '../../context/useAuth'
import Style from './style.module.scss'
import message_ico from '../../assets/comment-dots-regular.svg'
import setting_ico from '../../assets/gear-solid.svg'
import { Link } from 'react-router-dom'
import { useChat } from '../../context/chat'

const Navbar = () => {
    const { currentUser } = useAuth()
    const { setAction } = useChat()
    return (
        <div className={Style.Navbar}>
            <h3 className={Style.logo}>sChat</h3>
            <ul className={Style.nav}>

                <Link to="/">
                    <li>
                        <img src={message_ico} alt="message_ico" />
                    </li>
                </Link>

                <Link to="/setting">
                    <li>
                        <img src={setting_ico} alt="setting_ico" />
                    </li>
                </Link>
            </ul>
            <div className={Style.avatar}>
                <img src={currentUser.photoURL} alt="setting_ico" />
                <button onClick={
                    () => {
                        signOut(auth)
                        setAction({ user: "", chatId: "null" })
                    }}
                >logout</button>
            </div>

        </div>
    )
}

export default Navbar