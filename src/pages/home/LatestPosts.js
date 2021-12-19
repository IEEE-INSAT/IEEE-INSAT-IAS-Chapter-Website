import React,{ useState } from 'react'
import '../../styles/pages/home/latest-posts.scss'
import latestposts from '../../shared/db/latestposts'
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import TextLineReveal from '../../components/TextLineReveal'
import iOS from '../../shared/functions/ios'

export default function LatestPosts() {
    return (
        <div id="latest-posts">
            <TextLineReveal> <h2> Latest Posts </h2> </TextLineReveal>
            <div className='flex-container'>
                {latestposts.map(im=>(
                    <ImageWithFullScreen 
                        src={im} 
                        alt="latest post" 
                        className='non-fixed' 
                     />
                ))}
            </div>
        </div>
    )
}

function ImageWithFullScreen ({src,alt}){
    
    const [shown, setShown] = useState(false)

    return (
        <>
        <img 
            src={src} 
            alt={alt} 
            className='non-fixed' 
            onClick={()=>{setShown(true)}}
        />
        {false?'':(<div className={'fixed '+(shown?"shown":'')}>
            <img src={src} alt={alt}  />
            <button onClick={()=>{setShown(false)}}>
                <FontAwesomeIcon icon={faTimesCircle} />
            </button>
        </div>)}
        </>
    )
}