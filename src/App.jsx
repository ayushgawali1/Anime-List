import { useState } from "react"
import Anime from './Components/Anime';
import Header from './Components/Header';
import Month from "./Components/Month";
import "./app.css"
import { createBrowserRouter, RouterProvider } from "react-router-dom";


function App() {

    const [value,setValue] = useState(false);

    function dropDown(){
        setValue((a) => !a)
    }

    const route = createBrowserRouter([
        {path:'/' ,element:<div className="all">
            <Header
                value={value}
                dropDown={dropDown}
            />
            <Anime 
                value={value}
            />
        </div>},
        {path:'Month' , element:<div className="all">
            <Header
                value
                setValue
            />
            <Month 
                value={value}
            />
        </div>}
    ])


    return (
        <RouterProvider router={route} />
    )
}
export default App