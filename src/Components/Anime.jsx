import { useEffect } from 'react';
import { allAnimeList } from '.././data';

export default function Anime({value,setValue}) {  

    function close(){
        setValue((b) => false)
    }

    useEffect(() => {
        setValue((b) => false)
    },[])

    return (
        <div className={`conatiner ${value ? "disabled" : ''}`} onClick={close}>
            <div className={`line ${value ? "disabled-line" : ''}`}>
                {allAnimeList.map(({ name,image }, index) => (
                    <div key={index} className='image-container'>
                        <a><img src={image} alt="" /></a>
                        <div className='para-container'>
                            <p>
                                {name}
{/*                                 alpha */}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        
    )
}
