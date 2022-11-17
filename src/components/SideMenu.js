
import React ,{useState} from "react";
import { Box, FormControl, Input, FormLabel , Button} from "@chakra-ui/react";


const SideMenu=()=>{
    const [groupChatName, setGroupChatName] = useState();


    const handleSearch=()=>{

    }
    const handleSubmit=()=>{

    }

    return (
    <Box
   
      display= 'flex'
      position={"absolute"}
      alignItems="center" 
      flexDir="column"
     // float={'center'}
      p={1}
      bg="white"
      margin={'100px 50px 0 50px '}
      h= {650}
      w={{ base: "100%", md: "28%" }}
      borderRadius="lg"
      borderWidth="1px"
 >
   <FormControl>
    <FormLabel marginTop={'100px'} textAlign="center" textColor={"GrayText"}>Create New Chat Room +</FormLabel>
       <Input 
        placeholder="Chat Title.."
        mb={3}
        onChange={(e) => setGroupChatName(e.target.value)}
        />
    </FormControl>
    <FormControl>
        <Input marginTop={5}
         placeholder="Add Teachers eg: Max,Daisy.."
         mb={1}
         onChange={(e) => handleSearch(e.target.value)}
         />
    </FormControl>

    <FormControl>
        <Input marginTop={7}
         placeholder="Add Students eg: Max,Daisy.."
         mb={1}
         onChange={(e) => handleSearch(e.target.value)}
         />
    </FormControl>
      <Button colorScheme={"blue"}
           width="50%"
           style={{marginTop: 15}}
           onClick={handleSubmit}>
            Create ChatRoom
        </Button>
        
 </Box>
)}

 export default SideMenu;