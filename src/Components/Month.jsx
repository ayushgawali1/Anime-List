import { useEffect } from 'react';
import { Link } from 'react-router-dom';


export default function Month({setValue}){

    useEffect(() => {
        setValue((b) => false)
    },[])

   
    return(
        <div className="month-conatainer">
            <div className="year">
                {/* <Link to="/fdssd"> */}
                    <video loop autoPlay muted poster='image link' onClick="">
                        <source src="./Video/avideo.mp4" type="video/mp4" />
                    </video>
                {/* </Link> */}
                <p>2024</p>
            </div>
            <div className="year">
                <video loop autoPlay muted poster=''>
                    <source src="./Video/avideo.mp4" type="video/mp4" />
                </video>
                <p>2023</p>
            </div>
            <i class="icongec-anime_info i_pos"></i>
        </div>
    )
}
