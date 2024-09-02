import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import video from '../assets/avideo.mp4'


export default function Month({setValue}){

    const navigate = useNavigate();

    useEffect(() => {
        setValue((b) => false)
    },[])
   
    return(
        <div className="month-conatainer">
            <div className="year">
                    <video loop autoPlay muted poster='image link' onClick={() => navigate("/year/2024")}>
                        <source src={video} type="video/mp4" />
                    </video>
                <p onClick={() => navigate("/year/2024")}>2024</p>
            </div>
            <div className="year">
                <video loop autoPlay muted poster='' onClick={() => navigate("/year/2024")}>
                    <source src={video} type="video/mp4" />
                </video>
                <p onClick={() => navigate("/year/2023")}>2023</p>
            </div>
        </div>
    )
}
