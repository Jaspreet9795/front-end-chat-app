
import React ,{useState, useEffect,} from "react";

import { Box, FormControl, Input, FormLabel , Button} from "@chakra-ui/react";
import { MultiSelect } from "react-multi-select-component";


const CreateRoom=()=>{
    const [isLoaded, setIsLoaded]=useState (false)
    // const [groupChatName, setGroupChatName] = useState();
    
    const [students, setStudents] = useState([])
    const [teachers, setTeachers] = useState([])

    const [searchTeacher, setSearchTeacher]=useState('')
    const [searchStudent, setSearchStudent]=useState('')
    
    // for Selection
    const [selectedStudent, setSelectedStudent] = useState([]);
    const [selectedTeacher, setSelectedTeacher]= useState([])
    const [roomName, setRoomName]= useState('')
    const [rooms, setRooms] = useState(0)
    // const[searchResultTeacher, setSearchResultTeacher] =useState([])
    // const[searchResultStudent, setSearchResultStudent] =useState([])
    


      useEffect(()=>{
        fetch("http://localhost:9292/students")
        .then (r=>r.json())
        .then (students => setStudents(students))
      },[])
    
      useEffect(()=>{
        fetch("http://localhost:9292/teachers")
        .then (r=>r.json())
        .then (teachers => setTeachers(teachers))
      },[])
    
      // useEffect(()=>{
      //   fetch("http://localhost:9292/chatrooms")
      //   .then (r=>r.json())
      //   .then (chatrooms => setRooms(chatrooms))
      // },[])

   
  

    const filterSearchStudent = students.filter((student) => {
     return (student.first_name.toLowerCase().includes(searchStudent.toLowerCase()))
    });
    console.log(filterSearchStudent)
     
    const searchedStudent= filterSearchStudent.map((student)=>{
        return ({label: `${student.first_name}`, value: `${student.first_name}`} 
     )})
   
     const filterSearchTeacher = teachers.filter((teacher) => {
      return (teacher.first_name.toLowerCase().includes(searchTeacher.toLowerCase()))
     });
    
     const searchedTeacher= filterSearchTeacher.map((teacher)=>{
      return ({label: `${teacher.first_name}`, value: `${teacher.first_name}`}
   )})


    // const handleStudentSearch=(event)=>{
    //     setSearchStudent(event.target.value)
    // }

    const handleSubmit=()=>{
    }
    

    

    return (
    
    <Box
      display= 'flex'
      position={"absolute"}
      alignItems="center" 
      flexDir="column"
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
       <Input  marginLeft={90} width ='250px' 
        placeholder="Chat Title.."
        mb={3}
        onChange={(e) => setRoomName(e.target.value)}
        />
      </FormControl>
     

      <div  >
      <h1>Select Teachers</h1>
      <pre style={{flex: 1, width: 1, flexGrow: 0}}>{JSON.stringify(selectedTeacher)}</pre>
      <MultiSelect  
       options={searchedTeacher}
        value={selectedTeacher}
        onChange={setSelectedTeacher}
        labelledBy="Select"
      />
    </div>

  
    <div style={{flexDirection:'row'}}  >
      <h1>Select Students</h1>
      <pre style={{flex: 1, width: 1, flexGrow: 0}}>{JSON.stringify(selectedStudent)}</pre>
      <MultiSelect style={{flex: 1, width: 1}}
       options={searchedStudent}
        value={selectedStudent}
        onChange={setSelectedStudent}
        labelledBy="Select"
      />
    </div>

    
        <Button colorScheme={"blue"}
           width="50%"
           style={{marginTop: 15}}
           onClick={handleSubmit}>
            Create ChatRoom
        </Button>
        
      </Box>
    )}
    
    {/* </FormControl>
    <FormControl>
        <Input marginTop={5}
         placeholder="Add Teachers eg: Max,Daisy.."
         mb={1}
       
        
         />
    </FormControl> */}
    
   
    {/* <FormControl>
        <Input marginTop={7}
         placeholder="Add Students eg: Max,Daisy.."
         mb={1}
         type="text"
        //  onChange={(e) => handleSearch(e.target.value)}
        onChange={handleStudentSearch}
         />
        
    </FormControl>
    {searchedStudent} */}
  



 export default CreateRoom;