import { useAppContext } from '../context/useAppContext';
import { useState } from 'react';

function TodoForm(){
    const { commonActions } = useAppContext();
    const [todo,setTodo] = useState('');

    function handleSubmit(e){
        e.preventDefault();
        setTodo('');
        commonActions.addTodo(todo);
    }

    return (
        <div>
            <form onSubmit={handleSubmit} className="flex items-stretch justify-center">
                <input
                    className="flex-1 p-2 text-lg rounded-sm outline-none border-2 border-slate-800 w-full focus:border-indigo-600"
                    type="text"
                    value={todo}
                    onChange={(e)=>setTodo(e.target.value)}
                    placeholder="Enter your todo..."
                />
                <button type="submit" className="px-2 ml-2 text-lg border-2 border-slate-800 text-slate-800 bg-white hover:bg-slate-800 hover:border-slate-800 hover:text-white rounded-sm">ADD</button>
            </form>
        </div>
    );
}

export default TodoForm;