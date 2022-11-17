import { Box } from "@chakra-ui/layout";
import React from "react";
import ChatBox from "./ChatBox";
import Header from "./Header";
import SideMenu from "./SideMenu"

const ChatPage= ({currentUser, onAddMessage})=>{


 return (
    <>

     <Header ></Header>
     <SideMenu></SideMenu>
     <ChatBox currentUser= {currentUser} onAddMessage={onAddMessage} ></ChatBox>
    </>
 )
}

export default ChatPage;
