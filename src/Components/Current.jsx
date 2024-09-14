import { useEffect, useState } from 'react';
// import { allAnimeList } from '../data';
import {motion} from 'framer-motion'  ;
import { Context } from '../Store/Context';
import { useContext } from 'react';  

export default function Mobile({data}) {  

    const {value,setValue,mode,search} = useContext(Context);

    const [animeArray,setAnimeArray] = useState(data);
    const [firstTime,setFirstTime] = useState('first');

    const filteredItems = data.filter(({name}) =>
        name.toLowerCase().includes(search?.toLowerCase())
    );
    
    useEffect(() => {
        if(filteredItems.length === 0){
            if (firstTime === 'first'){
                setAnimeArray(data)
                setFirstTime('second')
            }else{
                setAnimeArray(null) 
            }
        }else{
            setAnimeArray(filteredItems)
        }
    },[search])
  
    

    function close(){
        setValue(() => false)
    }

    useEffect(() => {
        setValue(() => false)
    },[])

    return (
        <div className={`conatiner ${value ? "disabled" : ''}`} onClick={close}>
            <div className={`line ${value ? "disabled-line" : ''}`} style={{backgroundColor: mode ? '#141616' : 'white'}}>
                {animeArray ? animeArray.map(({ name,image }, index) => (
                    <motion.div initial={{scale:0,opacity:0}} animate={{scale:1,opacity:1}} exit={{scale:0,opacity:0}} key={index} className='image-container'>
                        <a><img src={image} alt="" /></a>
                        <div className='para-container'>
                            <p>
                                {name}
                                {/*alpha */}
                            </p>
                        </div>
                    </motion.div>
                )) : <p>Not Fond</p>}
            </div>
        </div>
        
    )
}
























// import { useEffect } from 'react';
// import { currentAnimeList } from '../data';
// import {motion} from 'framer-motion';
// import { Context } from '../Store/Context';
// import { useContext } from 'react';

// export default function Mobile() {  

//     const {value,setValue,mode} = useContext(Context);

//     function close(){
//         setValue(() => false)
//     }

//     useEffect(() => {
//         setValue(() => false)
//     },[])

//     return (
//         <div className={`conatiner ${value ? "disabled" : ''}`} onClick={close}>
//             <div className={`line ${value ? "disabled-line" : ''}`}>
//                 {currentAnimeList.map(({ name,image }, index) => (
//                     <motion.div initial={{scale:0,opacity:0}} animate={{scale:1,opacity:1}} exit={{scale:0,opacity:0}} key={index} className='image-container'>
//                         <a><img src='' alt="" /></a>
//                         <div className='para-container'>
//                             <p>
//                                 {/* {name} */}
//                                 alpha
//                             </p>
//                         </div>
//                     </motion.div>
//                 ))}
//             </div>
//         </div>
        
//     )
// }
