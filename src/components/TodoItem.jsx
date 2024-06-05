function TodoItem(){
    return (
        <div className="bg-indigo-500 flex items-center justify-start rounded-sm w-full px-2 py-3 my-2">
            <div className="flex-1 px-2">
                <p className="text-white font-sans tracking-wide">Linkedlist</p>
                {/* <input 
                    type="text"
                    className="w-full p-2 bg-transparent text-white border-2 outline-none focus:border-slate-800 border-[#ffffff32]"
                /> */}
            </div>
            <div>
                <button className="px-2 py-1 mx-1 rounded-sm bg-white">✏️</button>
                <button className="px-2 py-1 mx-1 rounded-sm bg-white">{ true ? '✅' : '⛔'}</button>
                <button className="px-2 py-1 mx-1 rounded-sm bg-white">❌</button>
            </div>
        </div>
    );
}

export default TodoItem;