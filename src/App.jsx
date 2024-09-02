import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useState } from "react";
import "./app.css";
import Header from './Components/Header';
import Anime from './Components/Anime';
import Year from "./Components/Year";
import Current from "./Components/Current";
import TwoThousand24 from "./Components/Year/2024/2024";


function App() {

    const [value,setValue] = useState(false);

    const header = <Header value={value} setValue={setValue} />;

    const route = createBrowserRouter([
        {path:'/' , element:header,errorElement:"Error",children:[
           {path:'/' , element: <Anime value={value} setValue={setValue} />},
           {path:'/year',element:<Year setValue={setValue} />},
           {path:'/current',element:<Current setValue={setValue} />} 
        ]},
        {
            path:'year',element:header,children:[
                {path:'2024',element:<TwoThousand24 />},
                {path:'2023',element:"2023"},
            ]
        }
    ])

    return (
        <RouterProvider router={route} />
    )
}

export default App