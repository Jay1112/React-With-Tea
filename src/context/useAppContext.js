import { useContext } from "react";
import { AppContext } from "./AppContext";

export function useAppContext(){
    const context = useContext(AppContext);

    if(!context){
        throw new Error("Context does not exist!");
    }

    return context;
}