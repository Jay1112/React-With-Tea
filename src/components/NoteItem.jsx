import { useDispatch } from "react-redux";
import { removeTodo, setEditIndex, clearFormState } from "../features/todo/todoSlice";

function NoteItem({ item }) {
  const dispatch = useDispatch();

  function handleEditTodo(e){
    dispatch(setEditIndex(item.id));
  }

  function handleRemoveTodo(e){
    dispatch(removeTodo(item.id));
    dispatch(clearFormState());
  }

  return (
    <div className="relative bg-indigo-500 text-white rounded-md border-4 border-indigo-200 p-4">
      <div className="text-xl font-semibold flex">
        <p className="flex-1">{item?.title}</p>
        <div className="flex gap-2">
          <button onClick={handleEditTodo} className="flex bg-lime-400 text-slate-800 rounded-sm px-4 py-2 items-center justify-center text-xs ">
            Edit
          </button>
          <button onClick={handleRemoveTodo} className="flex bg-red-500 text-white rounded-sm p-2 items-center justify-center text-xs ">
            Remove
          </button>
        </div>
      </div>
      <p className="text-sm text-justify py-2 pr-4">
        { item?.description }
      </p>
    </div>
  );
}

export default NoteItem;
