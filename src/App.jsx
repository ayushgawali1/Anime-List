import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useState } from "react";
import "./Mobile.css";
import './Laptop.css'
import Header from './Components/Header';
import Anime from './Components/Anime';
import Year from "./Components/Year";
import Current from "./Components/Current";
import TwoThousand24 from "./Components/Year_Month/2024/2024";
import Popular from "./Components/Popular";
import Watched from "./Components/Watched";
import {Context} from './Store/Context';
import { allAnimeList , currentAnimeList } from './data';









function App() {
    
    const [value,setValue] = useState(false);
    const [mode,setMode] = useState(true);
    const [search,setSearch] = useState(null);
    const [name,setName] = useState(null);
    const [searchSubmitButtonClick,setSearchSubmitButtonClick] = useState(false);
    const [listClickHandler,setListClickHandler] = useState([]);


    const route = createBrowserRouter([
        {path:'/' , element:<Header/>,errorElement:"Error",children:[
           {path:'/' , element: <Anime data={allAnimeList} />},
           {path:'/year',element:<Year value={value} setValue={setValue} />},
           {path:'/current',element:<Current data={currentAnimeList} />},
           {path:'/popular',element:<Popular value={value} setValue={setValue} mode={mode} />},
           {path:'/watched',element:<Watched value={value} setValue={setValue} mode={mode} />},
        ]},
        {
            path:'year',element:<Header/>,errorElement:"Error",children:[
                {path:'2024',element:<TwoThousand24 value={value} setValue={setValue} mode={mode} />},
                {path:'2023',element:"2023"},
            ]
        }
    ])

    return (
        <Context.Provider value={{value , setValue , mode , setMode , search , setSearch , name, setName  , searchSubmitButtonClick , setSearchSubmitButtonClick , listClickHandler , setListClickHandler }}>
            <RouterProvider router={route} /> 
        </Context.Provider>
        
    )
}

export default App
