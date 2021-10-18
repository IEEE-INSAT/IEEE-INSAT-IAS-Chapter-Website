import React, { useEffect, useRef, useState } from 'react'

export default function Number({title,number, image}) {

    const [counter, setCounter] = useState(0);
    const cardRef = useRef();

    //adding interval on reveal
    useEffect(()=>{
        const current = cardRef.current;

        const options = {
            threshold :0.4
        }

        let counted = false; 

        const inters = new IntersectionObserver((entries, observe)=>{
            entries.forEach(entry =>{
                if(entry.isIntersecting && (!counted)){
                    const interval = setInterval(()=>{
                        counted =true
                        setCounter(prev=>{
                            // clear interval if we reach the number
                            if(!(prev<number)){
                                clearInterval(interval)
                                return prev ;
                            }
                            //else return +1
                            return prev+1;
                        })
                    }, 100);
                }
            })
        },options)

        inters.observe(current);

        return ()=>{
            inters.disconnect(current);
        }
        
    },[number])

    return (
        <div ref={cardRef} style={{
            textAlign:'center'
        }} >
            <img src={image} alt="" />
            <h3> {title} </h3>
            <p> {counter} </p>
        </div>
    )
}
