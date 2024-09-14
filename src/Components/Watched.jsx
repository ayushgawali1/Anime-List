import { useEffect } from "react"

export default function Watched({value,setValue}){

    useEffect(() => {
        setValue(() => false)
    },[])

    return(
        <>Watched</>
    )
}