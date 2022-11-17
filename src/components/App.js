
import '../App.css';
import { Route, Switch  } from 'react-router-dom'
import React  from "react";
import HomePage from './HomePage';
import ChatPage from './ChatPage';
import { useEffect, useState } from 'react';
import InputText from './InputText';

const testUser = { username: "Duane" };

function App() {
   const [users, setUsers] = useState('')
   const [messages, setMessages] = useState([]);


  useEffect(()=>{
    fetch("http://localhost:9292/users")
    .then (r=>r.json())
    .then (users=> setUsers(users))
  })

  useEffect(()=>{
    fetch("http://localhost:9292/messages")
    .then((r=>r.json()))
    .then (messages=> setMessages(messages))
  })

// for User Sign-up form 

function addUser(user){
  setUsers([...users, user])
}
// for User login
// function checkUser(user){
//   setUsers([user])
// }


function handleAddMessage(newMessage) {
  setMessages([...messages, newMessage]);
}

// const displayedMessages = messages.filter((message) =>
// message.body.toLowerCase().includes(search.toLowerCase())
// );



  return (
    <div className="App">
      <Switch>
      <Route exact  path="/">
       <HomePage addUser={addUser} />
      </Route>
      <Route  path="/chats">
       <ChatPage  currentUser={testUser} onAddMessage={handleAddMessage} />
      </Route>
    </Switch>
    {/* <InputText  /> */}
    
    </div>
  );
}

export default App;
