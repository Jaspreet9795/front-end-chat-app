import React, { useState } from "react";
import {InputGroup, FormControl,Button,  Input, InputRightElement, VStack} from "@chakra-ui/react"


function InputText({currentUser, onAddMessage}) {

 const [content, setContent] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    fetch("http://localhost:9292/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: currentUser.username,
        content: content,
      }),
    })
      .then((r) => r.json())
      .then((newMessage) => {
        onAddMessage(newMessage);
        setContent("");
      });
  }

    return(
       <VStack>
        <FormControl  >
            <InputGroup>
            <Input  display= "flex" h="60px" w='900px'  placeholder="Enter here..  " 
            onChange={(e) => setContent(e.target.value)}></Input>
            <InputRightElement width={"6.5rem"} paddingTop={5} >
                <Button    onClick={handleSubmit}   m={'4.5px'} h="2.5rem" size="md">Send</Button>
            </InputRightElement>
            </InputGroup>
           </FormControl>
           </VStack>
    )}

export default InputText; 