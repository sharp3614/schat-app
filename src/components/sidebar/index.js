import { doc, onSnapshot } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { db } from '../../constants/firebase'
import { useChat } from '../../context/chat'
import { useAuth } from '../../context/useAuth'
import Search from '../search'

import Style from './style.module.scss'
const Sidebar = () => {
    const { currentUser } = useAuth()
    const { setAction } = useChat()
    const [chats, setChats] = useState([])

    const handleSelect = (user) => {
        setAction({
            user, chatId: currentUser.uid > user.uid
                ? currentUser.uid + user.uid
                : user.uid + currentUser.uid,
        })
    }

    useEffect(() => {
        //fetching user chats from firebase
        const getChats = () => {
            onSnapshot(doc(db, "userChats", currentUser.uid), (doc) => {
                setChats(doc.data())
            });
        }
        currentUser.uid && getChats()
    }, [currentUser.uid])
    return (
        <div className={Style.sidebar}>
            <h2 className={Style.header}>
                Messages
            </h2>
            <Search />
            <div className={Style.chats}>
                {chats &&
                    Object.entries(chats)?.map(item => (
                        <div className={Style.chat} key={item[0]} onClick={() => handleSelect(item[1].userInfo)}>
                            <img src={item[1].userInfo.photoURL} alt="chat" />
                            <div className={Style.text}>
                                <h4 className={Style.displayName}> {item[1].userInfo.displayName}</h4>
                                <span className={Style.message}></span>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Sidebar