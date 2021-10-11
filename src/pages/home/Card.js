import React from 'react'

export default function Card({title,image,text}) {
    return (
        <div className="card">
            <span className="image-contain">
                <img src={image} alt="" />
            </span>
            <h3> {title} </h3>
            <p> {text} </p>
        </div>
    )
}
