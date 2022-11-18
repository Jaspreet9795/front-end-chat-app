// eslint-disable-next-line
import { Box } from "@chakra-ui/layout";
import React from "react";
import ChatBox from "./ChatBox";
import Header from "./Header";
import CreateRoom from "./CreateRoom"

const ChatPage= ({currentUser, onAddMessage})=>{


 return (
    <>

     <Header ></Header>
     <CreateRoom></CreateRoom>
     <ChatBox currentUser= {currentUser} onAddMessage={onAddMessage} ></ChatBox>
    </>
 )
}

export default ChatPage;
