import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState, AppDispatch } from '../../redux/store'
import "./todo.css"
import todos, { add } from '../../redux/todos'
import { store } from '../../redux/store'


const Todo = () => {

  const [input, setInput] = useState("");

  const dispatch: AppDispatch = useDispatch();

  return (
    <>
      <form className="form" action="" onSubmit={(event) => {

        event.preventDefault();
        if (input === '')
          alert("enter something");
        else {
          dispatch(add(input));
          setInput("");
        }

      }}>

        <div className='inputContainer'><input type="text" className="inputField" value={input} onChange={(event) => setInput(event.target.value)} /></div>
        <div><button className="btn">Add</button></div>

      </form>
  

    </>
  )
}

export default Todo
