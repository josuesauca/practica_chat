import { onSnapshot,doc } from "firebase/firestore";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { ChatContext } from "../Context/ChatContext";
import { db } from "../Firebase";
import { Message } from "./Message";

export const Messages = () => {

  const [messages,setMessages] = useState([]);
  const {data} = useContext(ChatContext);

  useEffect(()=>{
    const unSub = onSnapshot(doc(db, "chats", data.chatId), (doc) => {
      doc.exists() && setMessages(doc.data().messages);
    });
    return () => {
      unSub();
    };

  },[data.chatId]);

  //console.log(messages);

  return (
    <div className="messages">
      {messages.map((m)=>{
        return(
          <>
          <Message messages={m} key={m.id} />
          {console.log(m,"4645654654")}
          </>
        );
      })}
  
    </div>
  );
};
