// import { data } from "autoprefixer";
import { useEffect, useState } from "react"

function useCurrencyInfo(currency){
    let [data,setData]=useState({})
    useEffect(()=>{
        fetch(`https://latest.currency-api.pages.dev/v1/currencies/${currency}.json
`)
        .then((res)=>res.json())
        .then((res)=>setData(res[currency]))
    },[currency])
    return data
}
export default useCurrencyInfo;
