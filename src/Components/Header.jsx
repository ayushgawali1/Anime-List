import { Link } from "react-router-dom"

export default function Header({value,dropDown}){
 

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
                    <>
                        {/* <div className="menu"> */}
                            {/* <span><h3>Menu</h3></span> */}
                            <i 
                                class="fa-solid fa-x" 
                                style={{color:'yellow'}} 
                                onClick={dropDown}
                            ></i>
                        {/* </div> */}
                        <div className="list">
                            <ul>
                                <Link to="/"><li>Home</li></Link>
                                <Link to="/"><li>All</li></Link>
                                <Link to="/Month"><li>Month</li></Link>
                                <Link to="/saga"><li>Popular</li></Link>
                            </ul>
                        </div>
                    </>
                }
            </div>
        </div>
    )
}



// https://cdn.myanimelist.net/images/anime/2/29550.webp