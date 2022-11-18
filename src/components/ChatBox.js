import React from "react";
// eslint-disable-next-line
import { Box, Container } from "@chakra-ui/layout";
// eslint-disable-next-line
import { Text } from "@chakra-ui/react";
// eslint-disable-next-line
import { Flex } from "@chakra-ui/react";
import InputText from "./InputText";
import { useState, useEffect} from "react";


const ChatBox=({currentUser, onAddMessage})=>{

    const [messages,setMessages] = useState([])


    useEffect(() => {
        setInterval(() => {
            fetch("http://localhost:9292/messages")
             .then (r=>r.json())
             .then ( messages=>setMessages(messages))
        }, 1000)
    }, [])
    
     
   
    return (
    
        <Box
        // d={{ base: selectedChat ? "flex" : "none", md: "flex" }}
        display="flex"
        position={"absolute"}
        alignItems="center"
        flexDir="column"
        // float={'center'}
        p={1}
        bg="linen"
        margin={'100px 50px 10px 500px '}
        h= {650}
        w={{ base: "100%", md: "65%" }}
        borderRadius="lg"
        borderWidth="1px"
      >
       {messages.slice(-10).map((message) => {
          return <Box  bg="aliceblue" borderRadius="lg"
          borderWidth="2px" position={"relative"}  margin="10px"> {message.content}</Box>
            console.log(message)
        })}
     
        <Box  marginTop="50px">
         <InputText currentUser= {currentUser} onAddMessage={onAddMessage}> </InputText>
        </Box>
        {/* <SingleChat fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} /> */}
        </Box>
     
    )  
       }
    


export default ChatBox; 