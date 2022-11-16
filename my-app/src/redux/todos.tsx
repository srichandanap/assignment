import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import uuid from 'react-uuid';
import { useState } from 'react';


const d = localStorage.getItem("users") != null
    ? JSON.parse(localStorage.getItem("users") || "[]")
    : [];



// export interface Todo {
//     id: string,
//     element: string
// }

export const todos = createSlice({

    name: 'todos',
    initialState: d,
    reducers: {

        add: (state: any, action: any) => {
            state.push({
                id: uuid(),
                element: action.payload
            })
            localStorage.setItem("users", JSON.stringify(state));


        },

        remove: (state, action: any) => {
            const filtered = state.filter((todo: any) => todo.id !== action.payload);

            localStorage.setItem("users", JSON.stringify(filtered));
            window.location.reload();
        }
    },

})

export const { add, remove } = todos.actions;


export default todos