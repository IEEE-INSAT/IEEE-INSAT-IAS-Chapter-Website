import React, { useEffect, useState } from 'react'
import { getFromPublic } from '../shared/functions/public'

export default function Mouse(props) {

    const [coordinates, setCoordinates] = useState({
        top: 0, left:0
    })

    useEffect(()=>{
        document.addEventListener("mousemove",(e)=>{
            console.log(e)
            setCoordinates({
                top:e.clientY ,
                left: e.clientX 
            })
        })
    },[])

    return (
            <img {...props} src={getFromPublic(
                        "/images/backgrounds/background-wheel.jpg"
            )} alt="" style={{
                position: 'absolute',
                top: coordinates.top - 100 , 
                left: coordinates.left -100 ,
                transition: 'top 200ms linear 5ms, left 200ms linear 5ms',
                backgroundColor:'rgba(0,0,0,0.5)',
                borderRadius: '50%',

            }} />
    )
}
