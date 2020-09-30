import React, { useState } from 'react';
import './App.css';
import TodoContainer from './TodoContainer';

function App() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);

  const addTodo = (e) => {
    e.preventDefault();

    setTodos([...todos, input]);
    setInput("");
  };

  return (
    <div>
      <h1>Hello World</h1>
      <form>
        <input value= {input} onChange={ e => setInput(e.target.value) } type="text"/>
        <button disabled={ !input } onClick={ addTodo } type="submit">add TODO</button>
      </form>

      <TodoContainer todos={ todos }/>
    </div>
  );
}

export default App;
