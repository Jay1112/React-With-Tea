import { useEffect, useState } from "react";
import axios from "axios";

function useCurrencyInfo() {
    const [responseData,setResponseData] = useState(null);

    const convertCurrencyAPIcallback = async (from,to,amount) => {
        const options = {
        method: "GET",
        url: "https://currency-converter18.p.rapidapi.com/api/v1/convert",
        params: {
            from: from,
            to: to,
            amount: amount,
        },
        headers: {
            'X-RapidAPI-Key': '57b86707dfmsha7de0554c818d4dp1ad0f2jsn7c277c52fe48',
            'X-RapidAPI-Host': 'currency-converter18.p.rapidapi.com'
        },
        };

        try {
            const response = await axios.request(options);
            setResponseData(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    return {responseData,convertCurrencyAPIcallback};
}

export default useCurrencyInfo;
