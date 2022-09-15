import React, { useState } from 'react'
import { useContext } from "react";
import { createContext } from "react";


export const ChatContext = createContext()
export const useChat = () => useContext(ChatContext)

const ChatContextProvider = ({ children }) => {

    const [action, setAction] = useState({user: "", chatId:"null"})
    const [chatId, setChatId] = useState("")
    
    return (
        <ChatContext.Provider value={{ action, setAction, chatId, setChatId }}>
            {children}
        </ChatContext.Provider>
    )
}

export default ChatContextProvider