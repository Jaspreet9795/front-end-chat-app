import React from "react";
import { Box } from "@chakra-ui/react";


const ChatBox=()=>{
    return (
    <Box
        display="flex"
        flexDirection={"column"}
        alignItems="center"
        p="3"
        bg= "white"
        w= {{base:"100%", md:"31%"}}
        // m= '0 1px 800px 0px '
        borderRadius='5px'
        borderWidth= "5px"></Box>
    )
}

export default ChatBox; 