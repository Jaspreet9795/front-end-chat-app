import React from "react";
// eslint-disable-next-line
import { Box, Container } from "@chakra-ui/layout";
// eslint-disable-next-line
import { Text } from "@chakra-ui/react";
// eslint-disable-next-line
import { Flex } from "@chakra-ui/react";
import InputText from "./InputText";


const ChatBox=({currentUser, onAddMessage})=>{
    
    return (
    
        <Box
        // d={{ base: selectedChat ? "flex" : "none", md: "flex" }}
        display="flex"
        position={"absolute"}
        alignItems="center"
        flexDir="column"
        // float={'center'}
        p={1}
        bg="white"
        margin={'100px 50px 0 500px '}
        h= {650}
        w={{ base: "50%", md: "65%" }}
        borderRadius="lg"
        borderWidth="1px"
      >
        <Box 
        display="flex"
        margin="550px">
         <InputText currentUser= {currentUser} onAddMessage={onAddMessage}> </InputText>
        </Box>
        {/* <SingleChat fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} /> */}
      </Box>
     
    )  
       }
    


export default ChatBox; 