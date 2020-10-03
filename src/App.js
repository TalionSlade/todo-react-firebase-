import React, { useEffect, useState } from 'react';
import './App.css';
import { Button } from '@material-ui/core';
import { FormControl , Input , InputLabel } from '@material-ui/core';
import Todo from './Todo.js';
import db from './firebase';
import firebase from 'firebase';

function App() {
  const [todos,setTodos] =useState([]);
  const [input, setInput] = useState('');

  useEffect(() => {
      db.collection('todos').orderBy('timestamp','desc').onSnapshot(snapshot => {
        setTodos(snapshot.docs.map({id:doc.id ,todo:doc => doc.data().todo}))
      })

  },[input] );

  const addTodo = (event) =>{
    event.preventDefault();
    db.collection('todos').add({
      todo:input,
      timestamp:firebase.firestore.FieldValue.serverTimestamp()
    });

    setTodos([...todos,input]);
    setInput('');
  }

  return (
    <div className="App">
      <h1>Hello World</h1>
      <form>
        <FormControl>
        <InputLabel>Enter a todo</InputLabel>
        <Input type="text" value={input} onChange={event => setInput(event.target.value)}/>
        </FormControl>
        <Button disabled={!input} type="submit"  onClick= { addTodo} variant="contained" color="primary">Add new Todo</Button>
      </form>
      <ul>
        {todos.map(todo =>(
          <Todo text={todo}/>
        ))}
      </ul>
    </div>
  );
}

export default App;
