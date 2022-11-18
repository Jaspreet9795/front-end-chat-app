import React from "react";
import { Avatar, Box, MenuDivider, MenuItem, MenuList, Text } from "@chakra-ui/react";
import {   Menu, MenuButton  }  from "@chakra-ui/react";
import { Button } from "@chakra-ui/button";
import { BellIcon, ChevronDownIcon } from "@chakra-ui/icons";


const Header =() => {
    return (
    <Box
    display="flex"
    alignItems="center"
    justifyContent='space-between'
    p={"5px 10px 5px 10px"}
    bg= "white"
    w="100%"
    m= '10px 35px 1000px 45px '
    borderRadius='10px'
    borderWidth= "5px">
      
  <Text  fontSize={"3xl"} fontFamily="Work sans">Welcome!</Text>

  <Text textColor={"GrayText"} fontSize={"3xl"} fontFamily="Work sans"><b>Ask your doubts! </b></Text>
  <div >
  <Menu >
    <MenuButton p={1} >
       <BellIcon fontSize={"2xl"} m={1}/>
    </MenuButton>
  </Menu>
 
 <Menu >
  <MenuButton as ={Button} leftIcon={<ChevronDownIcon />}>
      <Avatar size="sm" cursor={"pointer"} /> 
  </MenuButton>
  <MenuList>
      <MenuItem>My Profile</MenuItem>
      <MenuDivider />
      <MenuItem>LogOut</MenuItem>
  </MenuList>
</Menu>
</div>
</Box>
    )
}
export default Header ; 
