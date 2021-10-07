import { createSlice } from '@reduxjs/toolkit'


const editList = createSlice({
    name: 'edit',
    initialState: 
        [
        {id: 1, title: 'Cumpara cartofi', completed: false},
        {id: 2, title: 'Spala vasele', completed: false},
        {id: 3, title: 'Pleaca in vacanta', completed: false},
        ],
        reducers: {
            add: (state, action) => {
                const newTask = {  
                    id: Math.floor(Math.random() * 1000 + 1),                  
                    title: action.payload.title,
                    completed: false
                };
                state.push(newTask);
            },
            complete: (state, action) => {
                const index = state.findIndex(
                    (edit) => edit.id === action.payload.id
                );                
                state[index].completed = action.payload.completed;
            }
        }  
});

export const { add, complete } = editList.actions; 

export default editList.reducer; 
