import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import uuid from 'react-uuid';



export const getDataAsync: any = createAsyncThunk(
    "todos/getDataAsync",
    async () => {
        const response = await fetch(`http://localhost:3000/todos`);
        if (response.ok) {
            const todosData = await response.json();
            return { todosData };
        }
    }
);


export const addDataAsync: any = createAsyncThunk(
    "todos/addDataAsync",
    async (payload: any) => {
        const response = await fetch(`http://localhost:3000/todos`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ element: payload.element }),
        });
        if (response.ok) {
            const todo = await response.json();
            return { todo };
        }
    }
);

export const deleteDataAsync: any = createAsyncThunk(
    "todos/deleteDataAsync",
    async (payload: any) => {
        const response = await fetch(
            `http://localhost:3000/todos/${payload.id}`,
            {
                method: "DELETE",
            }
        );
        if (response.ok) {
            return { id: payload.id };
        }
    }
);




export interface Todo {
    id: string,
    element: string
}

export const todos = createSlice({
    name: 'todos',
    initialState: [] as Todo[],
    reducers: {

        add: (state: any, action: PayloadAction<string>) => {
            const newTask = state.push({
                id: uuid(),
                element: action.payload

            })
        },

        remove: (state, action: PayloadAction<string>) => {
            return state.filter((todo) => todo.id !== action.payload);
        }
    },

})


export const { add, remove } = todos.actions


export default todos