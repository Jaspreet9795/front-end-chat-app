
import '../App.css';
import { Route, Switch  } from 'react-router-dom'
import React  from "react";
import HomePage from './HomePage';
import ChatPage from './ChatPage';
import { useEffect, useState } from 'react';

function App() {
   const [users, setUsers] = useState()



  useEffect(()=>{
    fetch("http://localhost:9292/users")
    .then (r=>r.json())
    .then (users=> setUsers(users))
  })


// for User Sign-up form 

function addUser(user){
  setUsers([...users, user])
}






  return (
    <div className="App">
      <Switch>
      <Route exact  path="/">
       <HomePage addUser={addUser}/>
      </Route>
      <Route exact  path="/chats">
       {/* <ChatPage /> */}
      </Route>
    </Switch>

    </div>
  );
}

export default App;
