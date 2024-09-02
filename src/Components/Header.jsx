import { Link, Outlet } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";


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
                    {!value ? (
                        <i
                            className="fa-solid fa-bars"
                            style={{ color: '#FFD43B' }}
                            onClick={dropDown}
                        ></i>
                    ) : (
                        <>
                            <i
                                className="fa-solid fa-x"
                                style={{ color: 'yellow' }}
                                onClick={dropDown}
                            ></i>

                            <AnimatePresence>
                                <motion.div
                                    key="list-items"
                                    initial={{ opacity: 0, x: -80 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    className="list"
                                >
                                    <ul>
                                        <Link to="/"><li>Home</li></Link>
                                        <Link to="/current"><li>Current</li></Link>
                                        <Link to="/year"><li>Year</li></Link>
                                        <Link to="/bita"><li>Popular</li></Link>
                                        <li>Watched</li>
                                        <li>Profile</li>
                                        <li>Mode</li>
                                        <li>Setting</li>
                                    </ul>
                                </motion.div>
                            </AnimatePresence>
                        </>
                    )}
                </div>
            </div>
            <Outlet />
        </div>
    )
}
