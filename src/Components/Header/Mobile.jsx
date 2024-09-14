import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaSearch } from "react-icons/fa";
// import { FaStudiovinari } from "react-icons/fa"; 
import { FaCaretDown } from "react-icons/fa";
import { Fragment, useEffect, useRef, useState } from "react";
import { useContext } from "react";
import { Context } from "../../Store/Context";

export default function Mobile_Header() {

    const input_value = useRef('');
    const [inputValue,setInputValue] = useState('');
    const [displayName,setDisplayName] = useState([]);
    const [disableButton,setDisableButton] = useState(true);
    const [suggestionInput,setSuggestionInput] = useState(false);
    

    const { value, setValue, mode, setMode, setSearch , name , setName , setSearchSubmitButtonClick , setListClickHandler} = useContext(Context);


    function dropDown() {
        setValue((a) => !a)
    }

    function toggleMode() {
        setMode((a) => !a)
    }

    function input_click() {
        setValue(() => false);
        setSearchSubmitButtonClick(() => false);
    }

    function handleChange() {
        const b = input_value.current.value;
        setSearch((a) => a = b);
        setInputValue(b);
    }

    function submit(){
        setSearchSubmitButtonClick(() => true);
        setInputValue('');
        setName([]);
        setDisableButton(true)
    }

    function submitList(name){
        setSearch(name);
        setName([]);
        setInputValue('');
        setDisableButton(true);
        setListClickHandler(name)
    }

    function autoSuggestionInput(){
        setSuggestionInput((a) => !a)
    }

    useEffect(() => {
        const updatedNames = name?.map(({name}) => name);
        const length = updatedNames?.length; 
        const inputValue_length = inputValue.length;
        
        if(inputValue_length > 1){
            setDisplayName(() => (
                updatedNames
            ))
            setDisableButton(false)
        }
        else{
            setDisplayName(() => [])
        }
        
    },[name])
    

    return (
        <>
            <div className="header" style={{ backgroundColor: mode ? 'rgb(22 20 20)' : 'white' }}>
                <motion.i
                    key='main-symbol'
                    initial={{ scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ scale: 0 }}
                    className="fa-brands fa-x-twitter"
                    style={{ color: '#FFD43B' }}
                ></motion.i>

                <div className="manySymbol">
                    <motion.span key='symbol5' initial={{ scale: 0 }} animate={{ opacity: 1, scale: 1 }} exit={{ scale: 0 }} onClick={autoSuggestionInput} className="search" ><FaSearch /></motion.span>
                    <motion.span key='main-symbol' initial={{ scale: 0 }} animate={{ opacity: 1, scale: 1 }} exit={{ scale: 0 }} className="mode" onClick={toggleMode}><i class={`fa-solid fa-${mode ? 'sun' : 'moon'}`}></i></motion.span>
                    <AnimatePresence mode="wait">
                        {!value ? (
                            <motion.i
                                key="symbol1"
                                initial={{ scale: 0 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ scale: 0 }}
                                transition={{
                                    duration: 0.2,
                                    type: "spring",
                                    // stiffness:'100'
                                }}
                                className="fa-solid fa-bars"
                                style={{ color: '#FFD43B' }}
                                onClick={dropDown}
                            ></motion.i>
                        ) : (
                            <>
                                <motion.i
                                    key="symbol2"
                                    initial={{ opacity: 0, scale: 0 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0 }}
                                    transition={{
                                        duration: 0.2,
                                        type: "spring",
                                    }}
                                    className="fa-solid fa-x"
                                    style={{ color: 'yellow' }}
                                    onClick={dropDown}
                                ></motion.i>
                                <motion.div
                                    key="list-items"
                                    initial={{ opacity: 0, y: -100 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -100 }}
                                    transition={{
                                        duration: 0.2,
                                        type: "spring",
                                    }}
                                    className="list"
                                    style={{ backgroundColor: mode ? 'black' : 'white' }}
                                >
                                    <ul>
                                        {/* <li><FaStudiovinari /></li> */}
                                        <NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}><li>Home</li></NavLink>
                                        <NavLink to="/current" className={({ isActive }) => isActive ? 'active' : ''}><li>Current</li></NavLink>
                                        <NavLink to="/year" className={({ isActive }) => isActive ? 'active' : ''}><li>Year</li></NavLink>
                                        <NavLink to="/popular" className={({ isActive }) => isActive ? 'active' : ''}><li>Popular</li></NavLink>
                                        <NavLink to='/watched' className={({ isActive }) => isActive ? 'active' : ''}><li>Watched</li></NavLink>
                                        <NavLink to='/random' className={({ isActive }) => isActive ? 'active' : ''}><li>Profile</li></NavLink>
                                        <NavLink to='/random' className={({ isActive }) => isActive ? 'active' : ''}><li>FeedBack Form</li></NavLink>
                                        <NavLink to='/random' className={({ isActive }) => isActive ? 'active' : ''}><li>Setting</li></NavLink>
                                    </ul>
                                </motion.div>
                            </>
                        )}
                    </AnimatePresence>
                </div>
            </div>
            <div className="filter"
                style={{ display: !suggestionInput && 'none' }} 
            >   
                <div className="suggestion_input">
                        <div className="dialog_conatiner">
                            <div>
                                <input ref={input_value} onChange={handleChange} onClick={input_click} value={inputValue} type="text" placeholder="Search by Name" />
                                <button onClick={submit} disabled={disableButton ? true : false} >Search</button>
                            </div>
                            <div className="name_list">
                                <ul>
                                    {displayName?.map((name,index) => (
                                        <Fragment key={index}>
                                            <li onClick={() => submitList(name)}>{name}</li>
                                            <hr />
                                        </Fragment>
                                    ))}
                                </ul>
                            </div>
                        </div>
                </div>
                <div className="filer_input" style={{ display:"none"}}>
                    <input  />
                    <span><p>Filter</p></span>
                </div>
            </div>
        </>
    )
}