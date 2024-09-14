import { useEffect } from "react"

export default function Popular({value,setValue}){

    useEffect(() => {
        setValue(() => false)
    },[])

    return(
        <div className="popular-container">
            
        </div>
    )
}