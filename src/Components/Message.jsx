import React from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import { ChatContext } from "../Context/ChatContext";

export const Message = (m) => {
  //console.log(m);

  const { currentUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);

  const ref = useRef();

  useEffect(()=>{
    ref.current?.scrollIntoView({behavior: 'smooth'});

  },[m]);

  return (
    <div className={`message ${m.senderId === currentUser.uid && "owner"}`}>
      <div className="messaeInfo">
        <img
          src={
            m.senderId === currentUser.uid
              ? currentUser.photoURL
              : data.user.photoURL
          }
          alt=""
        />
        <span>Just now</span>
      </div>

      <div className="messageContent">
        <p>{m.text}</p>
        {m.img && <img src={m.img} alt="" />}
      </div>
    </div>
  );
};
