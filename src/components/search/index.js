import React, { useState } from 'react'
import { collection, doc, getDoc, getDocs, query, serverTimestamp, setDoc, updateDoc, where } from 'firebase/firestore'

import { db } from '../../constants/firebase'
import { useAuth } from '../../context/useAuth'
import Input from '../input'

import Style from './style.module.scss'

const Search = () => {

    const [username, setUsername] = useState("")
    const [user, setUser] = useState(null)

    const { currentUser } = useAuth()
    
    const handleSearch = async () => {
        const q = query(collection(db, "users"), where("displayName", "==", username))
        try {
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
                setUser(doc.data())
            });
        }
        catch (error) {
            console.log("------>", error.message)
        }

    }
    const handleKey = (e) => {
        e.code === "Enter" && handleSearch()
    }

    const handleSelect = async () => {
        const chatId =
            currentUser.uid > user.uid
                ? currentUser.uid + user.uid
                : user.uid + currentUser.uid;
        try {
            const res = await getDoc(doc(db, "chats", chatId))
            if (!res.exists()) {

                await setDoc(doc(db, "chats", chatId), { messages: [] })

                //create user chat
                await updateDoc(doc(db, "userChats", currentUser.uid), {
                    [chatId + ".userInfo"]: {
                        uid: user.uid,
                        displayName: user.displayName,
                        photoURL: user.photoURL,
                    },
                    [chatId + ".date"]: serverTimestamp(),
                });

                await updateDoc(doc(db, "userChats", user.uid), {
                    [chatId + ".userInfo"]: {
                        uid: currentUser.uid,
                        displayName: currentUser.displayName,
                        photoURL: currentUser.photoURL,
                    },
                    [chatId + ".date"]: serverTimestamp(),
                });




            }
        } catch (error) {
            console.log(error.message)
        }
        setUser(null)
        setUsername("")
    }
    return (
        <>
            <div className={Style.Search}>
                <Input onKeyDown={handleKey} inputValue={username} onChange={(e) => setUsername(e.target.value)} />
            </div>
            {user && <div className={Style.chats}>
                <div className={Style.chat} onClick={handleSelect}>
                    <img src={user.photoURL} alt="chat" />
                    <div className={Style.text}>
                        <h4 className={Style.displayName}> {user.displayName}</h4>
                        <span className={Style.message}>lorem ipsum dolor</span>
                    </div>
                </div>
            </div>}
        </>
    )
}

export default Search