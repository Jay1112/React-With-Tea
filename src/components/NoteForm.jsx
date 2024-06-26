import { useState } from "react";

function NoteForm(){
    const [title,setTitle] = useState('');
    const [description,setDescription] = useState('');

    function handleSubmit(e){
        e.preventDefault();
    }

    return (
        <div className="w-full p-2">
            <h1 className="text-2xl font-sans font-semibold">Notes App</h1>
            <form onSubmit={handleSubmit} className="py-2">
                <input
                    type="text"
                    className="t-input my-2 p-2 w-full rounded-sm"
                    placeholder="Enter Note Title..."
                    value={title}
                    onChange={(e)=>setTitle(e.target.value)}
                />
                <textarea
                    style={{maxHeight:'100px'}}
                    type="text"
                    maxLength={100}
                    className="t-input p-2 my-1 w-full rounded-sm"
                    placeholder="description..."
                    value={description}
                    onChange={(e)=>setDescription(e.target.value)}
                />
                <button disabled={!title || !description} type="submit" className="t-dark-button px-3 py-1 text-md rounded-sm">Save</button>
            </form>
        </div>
    );
}

export default NoteForm;