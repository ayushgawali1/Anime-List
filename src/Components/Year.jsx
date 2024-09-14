import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import video from '../assets/avideo.mp4';
import { motion } from 'framer-motion';


export default function Month({value,setValue}){

    const navigate = useNavigate();

    useEffect(() => {
        setValue((b) => false)
    },[])
   
    return(
        <div className="month-conatainer">
            <div className="year">
                    <motion.video
                        initial={{opacity:0,scale:0}}
                        animate={{opacity:1,scale:1}}
                        loop autoPlay  muted 
                        onClick={() => navigate("/year/2024")}
                    // poster='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQY47ODRlDhjw_WzG2KfBXgZTQKRDyAtrQtHw&s' onClick={() => navigate("/year/2024")}
                    >
                        <source src={video} type="video/mp4" />
                    </motion.video>
                <motion.p  initial={{opacity:0,scale:0}} animate={{opacity:1,scale:1}} onClick={() => navigate("/year/2024")}>2024</motion.p>
            </div>
            <div className="year">
                <motion.video
                    initial={{opacity:0,scale:0}}
                    animate={{opacity:1,scale:1}}
                    loop autoPlay muted poster='' onClick={() => navigate("/year/2023")}>
                    <source src={video} type="video/mp4" />
                </motion.video>
                <motion.p  initial={{opacity:0,scale:0}} animate={{opacity:1,scale:1}} onClick={() => navigate("/year/2023")}>2023</motion.p>
            </div>
            
        </div>
    )
}

