import React from 'react'
import { getFromPublic } from '../../shared/functions/public'
import '../../styles/pages/home/Linking.scss'
import Card from './Card'

const cardsContent = [
    {
        title:'Proximity to the industry',
        image:getFromPublic("/images/head-icons/proximity.png"),
        text : 'Industrial visits and promoting on-field knowlegde sessions is a priority to us.'
    },
    {
        title:'Connecting Engineers',
        image:getFromPublic("/images/head-icons/connecting-engineers.png"),
        text : 'Attending conferences and connecting student engineers with onfield ones is what we do. '
    },
    {
        title:'Top Traineeships',
        image:getFromPublic("/images/head-icons/top-traineeships.png"),
        text : 'Regular training session and workshops on the latest industrial tools and standards  . '
    }
]

export default function Linking() {
    return (
        <div className="linking" style={{
            backgroundImage:`url('${getFromPublic("/images/backgrounds/it-research.jpg")}')`
        }}>
            <h2>Linking Research To Practice</h2>
            <p>Linking Engineers To Worldwide Expertise</p>
            <div className="card-container">
                {cardsContent.map(content=>(
                    <Card {...content}/>
                ))}
            </div>
        </div>
    )
}
