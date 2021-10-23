import React from 'react'
import { getFromPublic } from "../shared/functions/public";
import Mouse from './Mouse';

const wheel_positions = [
    {top:'10px' , left: '10px'},
    {bottom:"30vh", left:"100px"},
    {bottom:'10px' , right: '10px'},
    {bottom: '20vh', right: '20vw'} 
]

export default function FixedBackg() {
    return (
        <div className="fixed-backg" style={{
            backgroundImage: 
                `url(${getFromPublic(
                    "/images/backgrounds/industry-background.jpg"
                )})`
        }}>
            {
                wheel_positions.map((pos,index)=>(
                    <img key={index} src={getFromPublic(
                        "/images/backgrounds/background-wheel.jpg"
                    )} alt="" className="gear" style={pos} />
                ))
            }

            <Mouse className="gear"/>

            
        </div>
    )
}
