import React from "react";
import Cam from "../Img/cam.png";

import Add from "../Img/add.png";
import More from "../Img/more.png";
import { Messages } from "./Messages";
import { Input } from "./Input";
import { useContext } from "react";
import { ChatContext } from "../Context/ChatContext";

export const Chat = () => {

  const {data} = useContext(ChatContext);


  return (
    <div className="chat">
      <div className="chatInfo">
        <span>{data.user?.displayName}</span>
        <div className="chatIcons">
          <img src={Cam} alt="" />
          <img src={Add} alt="" />
          <img src={More} alt="" />
        </div>
      </div>
      <Messages></Messages>
      <Input></Input>
    </div>
  );
};
