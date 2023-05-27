import React from 'react'
import { TodoItems } from "./TodoItems"

export const Todos = (props) => {
  let mystyle={
    minHeight:"50vh",
    margin:"auto"
  }
  return (
    <div className='container my-3' style={mystyle}>
      <h3 className=" my-4">Todos LIst</h3>
      {props.todos.length===0?"No Todos to Display":
      
      props.todos.map((todo) => {
        return (
          <>
            <TodoItems todo={todo} key={todo.sno} onDelete={props.onDelete}/><hr />
          </>
        ) 

      })}

    </div>
  )
}
