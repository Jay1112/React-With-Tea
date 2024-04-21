import ColorItem from "./ColorItem";
import { colorsList } from '../mock/colorsData';

function ColorsList({
    list,
    callback
}){

    function handleColorChange(color){
        callback(color);
    }

    return (
        <div className="bg-[#fff] fixed bottom-[20px] left-1/2 -translate-x-1/2 w-[90%] p-4 rounded-md flex items-center justify-center">
            {
                colorsList.map((item,index)=>{
                    return <ColorItem callback={handleColorChange} key={`color-item-${index}`} colorData={item} />
                })
            }
        </div>
    );
}

export default ColorsList;