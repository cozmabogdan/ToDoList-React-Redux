import { createSlice } from '@reduxjs/toolkit'

const editList = createSlice({
    name: 'edit',
    initialState: 
        [
        {title: 'Cumpara cartofi', completed: false},
        {title: 'Spala vasele', completed: false},
        {title: 'Pleaca in vacanta', completed: false},
        ],
        reducers: {
            add: (state, action) => {
                const newTask = {                    
                    title: action.payload.title,
                    completed: false
                };
                state.push(newTask);
            }
        }  
});

export const { add } = editList.actions; 

export default editList.reducer; 
