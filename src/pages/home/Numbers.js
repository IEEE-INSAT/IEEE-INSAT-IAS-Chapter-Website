import React from 'react'
import { getFromPublic } from '../../shared/functions/public'
import '../../styles/pages/home/Numbers.scss'
import Number from './Number'

const NumbersContent= [
    {
        title:'Conferences participation',
        number: 12,
        image:getFromPublic("/images/head-icons/nbr-conf.png")
    },
    {
        title:'Members',
        number: 87,
        image:getFromPublic("/images/head-icons/nbr-members.png")
    },
    {
        title:'Industrial visits',
        number: 15,
        image:getFromPublic("/images/head-icons/nbr-visits.png")
    },
    {
        title:'Years old',
        number: 5,
        image:getFromPublic("/images/head-icons/nbr-age.png")
    },
]

export default function Numbers() {
    return (
        // style={{backgroundImage:`url(${getFromPublic("/images/backgrounds/industry4.jpg")})`}}
        <div className="numbers" >
            {
                NumbersContent.map((content,index)=>(
                    <Number {...content} key={index} />
                ))
            }
        </div>
    )
}
