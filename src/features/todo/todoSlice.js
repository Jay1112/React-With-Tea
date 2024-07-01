import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    todos : [],
    editIndex : null,
    title : '',
    description : ''
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers : {
        addTodo : (state,action) => {
            state.todos.push(action.payload);
        },
        removeTodo : (state,action) => {
            const id = action.payload ;
            state.todos = state.todos.filter((item) => item.id !== id);
        },
        updateTodo : (state,action) => {
            const id = action.payload.id ;
            state.todos = state.todos.map((item) => item.id === id ? action.payload : item );
        },
        setEditIndex : (state,action) => {
            state.editIndex = action.payload;
            state.todos.map((item) => {
                if(item.id === state.editIndex){
                    state.title = item.title;
                    state.description = item.description
                }
                return item;
            });
        },
        clearFormState : (state) => {
            state.title = '';
            state.description = '';
            state.editIndex = null;
        },
        setTitle: (state,action) => {
            state.title = action.payload;
        },
        setDescription: (state,action) => {
            state.description = action.payload;
        }
    }
});

export const { addTodo, removeTodo, updateTodo, setEditIndex, clearFormState, setTitle, setDescription } = todoSlice.actions ;

export default todoSlice.reducer ;