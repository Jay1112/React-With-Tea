import { createContext, useReducer } from "react";

export const AppContext = createContext();

export const AppActions = {
    SET_TODO_LIST : 'SET_TODO_LIST'
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

        default : return state;
    }
}

export function AppContextProvider({ children }){
    const [state,dispatch] = useReducer(appReducer,initialState);

    return (
        <AppContext.Provider value={{ state, dispatch }}>
            { children }
        </AppContext.Provider>
    );
}