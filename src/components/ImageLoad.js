import React, { useState } from 'react'
import { BounceLoader } from 'react-spinners';

export default function ImageLoad({className,width, height,spinColor, alt,...props}) {

    const [loaded, setLoaded] = useState(false);
    
    return (
        <div 
            className={className}
            style={{
                position: 'relative', 
                overflow:'hidden',
                width: width,
                maxWidth:'100%',
                height: height,
                display:'flex',
                justifyContent:'center',
                alignItems:'center',
                flexBasis:width,
                flexShrink:0,
                borderRadius: '25px',
            }}
        >    
            <img
                style={{
                    objectFit:'cover',
                    opacity: loaded? 1: 0,
                    position: 'absolute',
                    width:'100%',
                    height:'100%',
                    top: 0, left: 0,
                    transition: 'opacity 300ms ease',
                    
                }}
                {...props}
                alt={alt?alt:"no description"}
                onLoad={()=>{setLoaded(true)}} 
            />
            <BounceLoader
                color={spinColor?spinColor:"white"}
                loading={!loaded}
            ></BounceLoader>

        </div>
    )
}
