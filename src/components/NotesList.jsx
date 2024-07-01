import { useSelector } from "react-redux";
import NoteItem from "./NoteItem";

function NotesList(){
    const state = useSelector((state)=>state.todo);

    return (
      <div className="px-2 py-4 flex-1 overflow-y-auto flex flex-col">
        {
            state.todos.map((item)=>{
                return <NoteItem key={`note-${item.id}`} item={item} />
            })
        }
      </div>
    );
}

export default NotesList;