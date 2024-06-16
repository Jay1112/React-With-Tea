import { createContext, useReducer } from "react";

export const AppContext = createContext();

export const AppActions = {
    SET_TODO_LIST : 'SET_TODO_LIST',
    SET_EDIT_INDEX : 'SET_EDIT_INDEX'
}

const initialState = {
    todolist : [],
    editItemIndex : null,
}

function appReducer(state,action){
    switch(action.type){
        case AppActions.SET_TODO_LIST : 
            return {
                ...state,
                todolist : action.payload
            }

        case AppActions.SET_EDIT_INDEX : 
            return {
                ...state,
                editItemIndex : action.payload
            }

        default : return state;
    }
}

export function AppContextProvider({ children }){
    const [state,dispatch] = useReducer(appReducer,initialState);

    const commonActions = {
        initApp : () => {
            if(localStorage.getItem('mytodolist')){
                const list = JSON.parse(localStorage.getItem('mytodolist'));
            dispatch({ type : AppActions.SET_TODO_LIST, payload : list });
            }else{
                localStorage.setItem('mytodolist',JSON.stringify([]));
            }
        },
        addTodo : (text) => {
            const todoObj = {
                id : Date.now(),
                title : text,
                completed : false
            };
            const newtodolist = [todoObj,...state.todolist];
            dispatch({ type : AppActions.SET_TODO_LIST, payload : newtodolist });
            localStorage.setItem('mytodolist',JSON.stringify(newtodolist));
        },
        updateTodo : (todo) => {
            const newtodolist = state.todolist.map((item)=>{
                if(todo.id === item.id){
                    return todo ;
                }
                return item;
            });
            dispatch({ type : AppActions.SET_TODO_LIST, payload : newtodolist });
            localStorage.setItem('mytodolist',JSON.stringify(newtodolist));
        },
        removeTodo : (todo) => {
            const newtodolist = state.todolist.filter((item)=>{
                if(todo.id === item.id){
                    return false ;
                }
                return true;
            });
            dispatch({ type : AppActions.SET_TODO_LIST, payload : newtodolist });
            localStorage.setItem('mytodolist',JSON.stringify(newtodolist));
        },
    }

    return (
        <AppContext.Provider value={{ state, dispatch, commonActions }}>
            { children }
        </AppContext.Provider>
    );
}