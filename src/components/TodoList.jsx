import TodoItem from "./TodoItem";
import { useAppContext } from "../context/useAppContext";

function TodoList(){
    const { state } = useAppContext();

    return (
        <div className="mt-4 flex items-center justify-center flex-col overflow-scroll">
            <div className="w-full overflow-scroll">
            {
                state.todolist.map((item,index) => {
                    return <TodoItem key={`todo-list-item-${item.id}`} item={item} index={index} />
                })
            }
            </div>
        </div>
    );
}

export default TodoList;