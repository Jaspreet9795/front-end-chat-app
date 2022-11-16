
import '../App.css';
import { Route, Switch  } from 'react-router-dom'
import React from "react";
import HomePage from './HomePage';
import ChatPage from './ChatPage';

function App() {
  return (
    <div className="App">
      <Switch>
      <Route exact  path="/">
       <HomePage />
      </Route>
      <Route exact  path="/chats">
       <ChatPage />
      </Route>
    </Switch>

    </div>
  );
}

export default App;
