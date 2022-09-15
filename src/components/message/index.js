import React from 'react'
import { useChat } from '../../context/chat'
import { useAuth } from '../../context/useAuth'

import Style from './style.module.scss'
const Message = (props) => {

    const { message } = props
    const { currentUser } = useAuth()
    const { action } = useChat()
    const time = message.date.toDate().toString().substring(16, 21) // getting message sending time
    return (
        <>
            {
                message.senderId === currentUser.uid ?
                <div className={Style.chat1}>
                    <div key={message.id} className={Style.Message + " " + Style.user1}>
                        <span>{message.text}</span>
                        <span>{time}</span>
                    </div>
                    <img src={currentUser.photoURL} width={30} height={30} alt="img" />
                </div>
                : 
                <div className={Style.chat2}>
                    <img src={action.user.photoURL} width={30} height={30} alt="img" />
                    <div key={message.id} className={Style.Message + " " + Style.user2}>
                        <span>{message.text}</span>
                        <span>{time}</span>
                    </div>
                </div>

            }
        </>
    )
}

export default Message