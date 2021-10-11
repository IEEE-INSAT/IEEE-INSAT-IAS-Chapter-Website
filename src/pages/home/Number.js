import React from 'react'

export default function Number({title,number, image}) {
    return (
        <div style={{
            textAlign:'center'
        }}>
            <img src={image} alt="" />
            <h3> {title} </h3>
            <p> {number} </p>
        </div>
    )
}
