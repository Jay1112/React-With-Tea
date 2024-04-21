function ColorItem({
    callback,
    colorData,
}){

    function handleButtonClicked(e){
        callback(colorData?.code);
    }

    return (
        <button onClick={handleButtonClicked} className="flex-auto mx-2 py-2 rounded-md" style={{ background:colorData?.code, color: colorData?.text }}>
           <p>{colorData?.name }</p>
        </button>
    );
}

export default ColorItem;