import { Link, Outlet } from "react-router-dom";

export default function Header({ value, setValue }) {

    function dropDown() {
        setValue((a) => !a)
    }

    return (
        <div className="all">
            <div className="header">
                <i
                    className="fa-brands fa-x-twitter"
                    style={{ color: '#FFD43B' }}
                ></i>
                <div>
                    {!value ?
                        <i
                            className="fa-solid fa-bars"
                            style={{ color: '#FFD43B' }}
                            onClick={dropDown}
                        ></i>
                        :
                        <>
                            <i
                                class="fa-solid fa-x"
                                style={{ color: 'yellow' }}
                                onClick={dropDown}
                            ></i>
                            <div className="list">
                                <ul>
                                    <Link to="/"><li>Home</li></Link>
                                    <Link to="/"><li>All</li></Link>
                                    <Link to="/current"><li>Current</li></Link>
                                    <Link to="/month"><li>Month</li></Link>
                                    <Link to="/bita"><li>Popular</li></Link>
                                </ul>
                            </div>
                        </>
                    }
                </div>
            </div>
            <Outlet />
        </div>
    )
}



// https://cdn.myanimelist.net/images/anime/2/29550.webp