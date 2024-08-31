import { useState } from "react"

export default function Header(){

    const [value,setValue] = useState(false);

    function dropDown(){
        setValue((a) => !a)
    }

    // console.log(value);
    

    return(
        <div className="header">
            <i 
                className="fa-brands fa-x-twitter" 
                style={{color: '#FFD43B'}} 
            ></i>
            <div>
                { !value ?
                    <i 
                        className="fa-solid fa-bars" 
                        style={{color: '#FFD43B'}}
                        onClick={dropDown}
                    ></i>
                    :
                    <div className="list">
                        <ul>
                            <li onClick={dropDown}>X</li>
                            <a href="/"><li>Home</li></a>
                            <a href="gama"><li>Current</li></a>
                        </ul>
                    </div>

                }
                
                
            </div>

            {/* <dialog >
                Done
            </dialog> */}
        </div>
    )
}