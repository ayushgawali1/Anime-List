import { a } from '.././data';

export default function Anime() {
    return (
        <div className='conatiner'>
            <div className='line'>
                {a.map(({ name }, index) => (
                    <div key={index} className='image-container'>
                        <a><img src="images" alt="" /></a>
                        <div className='para-container'>
                            <p>
                                alpha
                                {/* {name} */}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}