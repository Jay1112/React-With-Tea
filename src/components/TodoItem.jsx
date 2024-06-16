import { useState } from "react";
import { useAppContext } from "../context/useAppContext";
import { AppActions } from "../context/AppContext";
import clsx from "clsx";

function TodoItem({ item, index }){
    const [todo,setTodo] = useState(item?.title);
    const { state, dispatch, commonActions } = useAppContext();

    function handleEdit(e){
        dispatch({ type : AppActions.SET_EDIT_INDEX, payload : index });
    }

    function handleEditDone(e){
        const todoObj = {
            ...item,
            title : todo
        };
        commonActions.updateTodo(todoObj);
        dispatch({ type : AppActions.SET_EDIT_INDEX, payload : null });
    }

    function handleCompleted(){
        const todoObj = {
            ...item,
            completed : !item.completed
        };
        commonActions.updateTodo(todoObj);
    }

    function handleRemove(e){
        commonActions.removeTodo(item);
    }

    return (
        <div className={clsx("flex items-center justify-start rounded-sm w-full px-2 py-3 my-2",item.completed ? 'bg-gray-500' : 'bg-indigo-500 ')}>
            <div className="flex-1 px-2">
                { 
                    ( state.editItemIndex !== null && state.editItemIndex === index ) ?
                    <input 
                        value={todo}
                        onChange={(e)=>setTodo(e.target.value)}
                        type="text"
                        className="w-full p-2 bg-transparent text-white border-2 outline-none focus:border-slate-800 border-[#ffffff32]"
                    /> :
                    <p className={clsx("text-white p-2 border-2 border-transparent font-sans tracking-wide", item.completed && 'line-through' )}>
                        {item?.title}
                    </p>
                }
            </div>
            <div>
                {   
                    ( state.editItemIndex !== null && state.editItemIndex === index ) ?
                    <button onClick={handleEditDone} className="px-2 py-1 mx-1 rounded-sm bg-white">👍</button> : 
                    <button onClick={handleEdit} className="px-2 py-1 mx-1 rounded-sm bg-white">✏️</button> 
                }
                <button onClick={handleCompleted} className="px-2 py-1 mx-1 rounded-sm bg-white">{ item.completed ? '⛔' : '✅' }</button>
                <button onClick={handleRemove} className="px-2 py-1 mx-1 rounded-sm bg-white">❌</button>
            </div>
        </div>
    );
}

export default TodoItem;