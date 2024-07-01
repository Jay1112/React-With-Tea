import { addTodo, updateTodo, setTitle, setDescription, clearFormState } from "../features/todo/todoSlice";
import { useDispatch, useSelector } from "react-redux";

function NoteForm(){
    const dispatch = useDispatch();
    const state = useSelector((state)=>state.todo);

    function handleSubmit(e){
        e.preventDefault();
        if(state.editIndex){
            const todo = {
                id : state.editIndex,
                title: state.title,
                description: state.description
            };
            dispatch(updateTodo(todo));
        }else{
            const todo = {
                id : Date.now(),
                title : state.title,
                description: state.description
            };
            dispatch(addTodo(todo));
        }
        dispatch(clearFormState());
    }

    return (
        <div className="w-full p-2">
            <h1 className="text-2xl font-sans font-semibold">Notes App</h1>
            <form onSubmit={handleSubmit} className="py-2">
                <input
                    type="text"
                    className="t-input my-2 p-2 w-full rounded-sm"
                    placeholder="Enter Note Title..."
                    value={state.title}
                    onChange={(e)=>dispatch(setTitle(e.target.value))}
                />
                <textarea
                    style={{maxHeight:'100px'}}
                    type="text"
                    maxLength={100}
                    className="t-input p-2 my-1 w-full rounded-sm"
                    placeholder="description..."
                    value={state.description}
                    onChange={(e)=>dispatch(setDescription(e.target.value))}
                />
                <button disabled={!state.title || !state.description} type="submit" className="t-dark-button px-3 py-1 text-md rounded-sm">Save</button>
            </form>
        </div>
    );
}

export default NoteForm;