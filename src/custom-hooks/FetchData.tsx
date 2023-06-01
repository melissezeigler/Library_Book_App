import {useEffect, useState } from "react"
import { server_calls } from "../api/server"


export const useGetData = () => {
    const [ bookData, setData ] = useState<[]>([])

    async function handleDataFetch(){
        const result = await server_calls.get();
        setData(result)
    }

    // useEffect on mount
    useEffect( () => {
        handleDataFetch();
    }, [])
    
    //nothing means occurs everytime
    //empty list means occurs on "mount" (comes into existence)
    //component name inside square brackets means anytime that specific component changes, then the useEffect happens
    
    return { bookData, getData:handleDataFetch }
}