// import logo from './logo.svg';
import './App.css';
import React from 'react';
import {Container} from 'semantic-ui-react';
import ToDoList from './To-Do-List'

function App() {
  return (
    <div>
      <Container>
        <ToDoList />
      </Container>
    </div>
  );
}

export default App;
