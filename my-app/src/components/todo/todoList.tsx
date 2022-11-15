import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import "./todo.css"
import { RootState, AppDispatch } from '../../redux/store'
import { remove } from '../../redux/todos'


const TodoList = () => {

    const dispatch: AppDispatch = useDispatch();
    const todos = useSelector((state: RootState) => state.todos);

    return (
        <>
            {todos.map((todo: any) => {
                return (
                    <div key={todo.id} className="todos">


                        <div className="grid">{todo.element}</div>
                        <button className='redBtn' onClick={() => dispatch(remove(todo.id))}>remove</button>


                    </div>
                )
            })}

        </>
    )
}

export default TodoList
