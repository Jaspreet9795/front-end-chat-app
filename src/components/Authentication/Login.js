import {React, useState} from "react";
import { Button, FormControl, FormLabel, Input, InputGroup, InputRightElement, VStack } from "@chakra-ui/react";

g
const Login =()=>{
    
        const[email, setEmail]=useState()
        const [password, setPassword]=useState()
        const [show, setShow] =useState(false)
      
    
        const handleClick=()=> setShow(!show)
        const handleSubmit=()=>{}
        return (
            <VStack spacing={'5px'}> 
               
               <FormControl id="email" isRequired>
                <FormLabel>Email</FormLabel>
                <Input h="30px" placeholder="Enter your email-id " 
                onChange={e=>setEmail(e.target.value)}></Input>
               </FormControl>
               
    
               <FormControl id="password" isRequired>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                <Input h="40px" type={show? "text" : "password"} placeholder="Enter your password " 
                onChange={e=>setPassword(e.target.value)}></Input>
                <InputRightElement width={"4.5rem"}>
                    <Button   h="1.5rem" size="sm" onClick={handleClick}>{show? "Hide" : "Show"}</Button>
                </InputRightElement>
                </InputGroup>
               </FormControl>
    
              
               <Button colorScheme={"blue"}
               width="100%"
               style={{marginTop: 15}}
               onClick={handleSubmit}>
                Login
               </Button>
            </VStack>
    )
}

export default Login;