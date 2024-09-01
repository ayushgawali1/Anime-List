import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useState } from "react";
import "./app.css";
import Header from './Components/Header';
import Anime from './Components/Anime';
import Month from "./Components/Month";
import Current from "./Components/Current";


function App() {

    const [value,setValue] = useState(false);

    const header = <Header value={value} setValue={setValue} />;

    const route = createBrowserRouter([
        {path:'/' , element:header,errorElement:"error",children:[
           {path:'/' , element: <Anime value={value} setValue={setValue} />},
           {path:'/month',element:<Month setValue={setValue} />},
           {path:'/current',element:<Current setValue={setValue} />} 
        ]}
    ])

    return (
        <RouterProvider router={route} />
    )
}
export default App