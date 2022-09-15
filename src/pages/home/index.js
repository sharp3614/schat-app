import React, { useEffect, useState } from 'react'

import { arrayUnion, doc, onSnapshot, Timestamp, updateDoc } from 'firebase/firestore'
import { db } from '../../constants/firebase'
import { v4 as uuid } from 'uuid';

import { useChat } from '../../context/chat'
import { useAuth } from '../../context/useAuth'
import { Button, Input, Message, Sidebar } from '../../components'

import Style from './style.module.scss'

const Home = () => {
  
  const { action } = useChat()
  const { currentUser } = useAuth()
  const [messages, setMessages] = useState([])
  const [text, setText] = useState("")


  const handleSend = async () => {
    await updateDoc(doc(db, "chats", action.chatId), {
      messages: arrayUnion({
        id: uuid(),
        text,
        senderId: currentUser.uid,
        date: Timestamp.now()
      })
    });
    setText("")
  }

  //
  useEffect(() => {
    onSnapshot(doc(db, "chats", action.chatId), (doc) => {
      doc.exists() && setMessages(doc.data().messages);
    });
  }, [action.chatId]);

  return (
    <div className={Style.Container}>
      <Sidebar />
      {
        action.user &&
        <div className={Style.chat_container}>
          <div className={Style.chat_nav}>
            {action && action.user.displayName}
          </div>
          <div className={Style.message_container}>
            <div className={Style.messages}>
              {
                messages && messages.map(message => (
                  <Message message={message} />
                ))
              }
            </div>
            <div className={Style.send}>
              <Input inputValue={text} placeholder="Send a message..." onChange={(e) => setText(e.target.value)} />
              <Button title="Send" click={handleSend} />
            </div>
          </div>
        </div>
      }
    </div>
  )
}

export default Home