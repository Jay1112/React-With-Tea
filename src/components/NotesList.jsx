function NotesList(){
    return (
        <div className="px-2 py-4 flex-1 overflow-y-auto flex flex-col">
            <div className="relative bg-indigo-500 text-white rounded-md border-4 border-indigo-200 p-4">
                <p className="text-xl font-semibold">Solio Backend Discussion</p>
                <p className="text-sm text-justify py-2 pr-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet similique deserunt eius iusto quod, consequuntur non? Corporis impedit tempore temporibus aliquid error ratione magni quas perspiciatis, tempora laudantium quo voluptatum.
                </p>
                <button className="flex items-center justify-center text-xl absolute top-0 right-0 translate-x-1/2 -translate-y-1/2">
                ❎
                </button>
            </div>
        </div>
    );
}

export default NotesList;