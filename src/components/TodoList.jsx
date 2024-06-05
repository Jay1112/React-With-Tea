import TodoItem from "./TodoItem";

function TodoList(){
    return (
        <div className="mt-4 flex items-center justify-center flex-col overflow-scroll">
            <div className="w-full overflow-scroll">
            {
                [1,1,1,1,1,1,1,1,1,11,11,1,1,1,1,1,1,1].map((item) => {
                    return <TodoItem />
                })
            }
            </div>
        </div>
    );
}

export default TodoList;