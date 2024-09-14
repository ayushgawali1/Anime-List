import { Outlet } from "react-router-dom";
import Mobile_Header from "./Header/Mobile";
import Laptop from "./Header/Laptop";
import { useEffect } from "react";


export default function Header({ mode , setMode }) {

    // const height = window.innerHeight;
    const width = window.innerWidth; 

    function check(){
        if ( width > 1000){
            return(
                <Laptop 
                    mode={mode}
                    setMode={setMode} 
                /> 
            )
        }
        else if( width > 355 && width < 479 ){
            return(
                <Mobile_Header/>   
            )
        }
        else{
            console.log("error");
            return(
                <h1>Error</h1>
            )
        }
    }

    
    

    return (
        <div className="all">
            {check()}
            <Outlet />
        </div>
    )
}
