import { allAnimeList } from '.././data';

export default function Anime({value}) {  
    return (
        <div className={`conatiner ${value ? "disabled" : ''}`} >
            <div className='line'>
                {allAnimeList.map(({ name,image }, index) => (
                    <div key={index} className='image-container'>
                        <a><img src={image} alt="" /></a>
                        <div className='para-container'>
                            <p>
                                {name}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        
    )
}