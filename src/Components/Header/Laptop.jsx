import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

export default function Laptop({ mode , setMode }) {


    // function toggleMode() {
    //     setMode((a) => !a)
    // }


    return (
        <div className="header">
            <i
                className="fa-brands fa-x-twitter"
                style={{ color: '#FFD43B' }}
            ></i>

            <ul className="list">
                <NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}><li>Home</li></NavLink>
                <NavLink to="/current" className={({ isActive }) => isActive ? 'active' : ''}><li>Current</li></NavLink>
                <NavLink to="/year" className={({ isActive }) => isActive ? 'active' : ''}><li>Year</li></NavLink>
                <NavLink to="/popular" className={({ isActive }) => isActive ? 'active' : ''}><li>Popular</li></NavLink>
                <NavLink to='/watched' className={({ isActive }) => isActive ? 'active' : ''}><li>Watched</li></NavLink>
            </ul>

            <span><i class="fa-solid fa-user"></i></span>
        </div>
    )
}

{/* <NavLink to='/random' className={({ isActive }) => isActive ? 'active' : ''}><li>Profile</li></NavLink> */}
{/* <li className="mode" onClick={toggleMode}><i class={`fa-solid fa-${mode ? 'sun' : 'moon'}`}></i></li> */}
{/* <NavLink to='/random' className={({ isActive }) => isActive ? 'active' : ''}><li>FeedBack Form</li></NavLink> */}
{/* <NavLink to='/random' className={({ isActive }) => isActive ? 'active' : ''}><li>Setting</li></NavLink> */}