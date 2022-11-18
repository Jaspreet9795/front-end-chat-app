
import React ,{useState, useEffect,} from "react";
import { useParams } from "react-router-dom";
import { Box, FormControl, Input, FormLabel , Button} from "@chakra-ui/react";


const SideMenu=()=>{
    const [isLoaded, setIsLoaded]=useState (false)
    const [groupChatName, setGroupChatName] = useState();
    const [user, setUser] = useState(null)

    const [selectedTeacher, setSelectedTeacher]= useState([])
    const [selectedStudent, setSelectedStudent]= useState([])

    const [searchTeacher, setSearchTeacher]=useState('')
    const [searchStudent, setSearchStudent]=useState('')

    const[searchResultTeacher, setSearchResultTeacher] =useState([])
    const[searchResultStudent, setSearchResultStudent] =useState([])
    
    const {id}=useParams();

    useEffect(()=>{
        fetch(`http://localhost:9292/users/${id}`)
        .then (r=>r.json())
        .then (user=> { setUser(user)
                     setIsLoaded(true)
        })
      },[id])

      useEffect(()=>{
        fetch("http://localhost:9292/students")
        .then (r=>r.json())
        .then (users=> setUsers(users))
      })
    
    
    if(!isLoaded) return <h2>Loading...</h2>

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