// import logo from './logo.svg';
import './App.css';
import Header from './MyComponents/Header';
import { Todos } from './MyComponents/Todos';
import { TodoItem } from './MyComponents/TodoItems';
import { Footer } from './MyComponents/Footer';
import React, { useState,useEffect } from 'react';
import { AddtTodo } from "./MyComponents/AddtTodo"
import {
  BrowserRouter as Routes,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  let initTodo;
 if( localStorage.getItem("todos")===null){
  initTodo=[];

  }
  else{
    initTodo=JSON.parse(localStorage.getItem("todos"))
  }
  
  const onDelete = (todo) => {
    console.log("I am ondelete", todo)


    setTodos(todos.filter((e) => {
      return e !== todo;

    }));
    localStorage.setItem("todos",JSON.stringify(todos));

  }

  const addTodo = (title, desc) => {
    console.log("I am adding this todo", title, desc)
    let SL;
    if (todos.length == 0) {
      SL = 0;
    }
    else {
      SL = todos[todos.length - 1].SL + 1;
    }
    const myTodo = {
      SL: SL,
      title: title,
      desc: desc,

    }
    setTodos([...todos, myTodo]);
    console.log(myTodo);

    
  
     
  }
  const [todos, setTodos] = useState(initTodo);


  return (
    <>
    <Routes>
      <Header title="MyToDOList" />

      <AddtTodo addTodo={addTodo} />
      <Todos todos={todos} onDelete={onDelete} />
      <Footer />
      </Routes>
    </>
  );
}

export default App;
