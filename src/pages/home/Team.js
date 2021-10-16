import React,{useEffect} from 'react'
import { getFromPublic } from '../../shared/functions/public'
import '../../styles/pages/home/Team.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCog } from '@fortawesome/free-solid-svg-icons'
import Tesla from '../../shared/components/Tesla'


const working_members = [
    {
        name: "Omar Kouki",
        quote : "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
        image: "/images/pictures/members/chair.jpg"
    },
    {
        name: "Maryem Abdellatif",
        quote : "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
        image: "/images/pictures/members/HRManager.jpg"
    },
    {
        name: "Mohamed Jedidi",
        quote : "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
        image: "/images/pictures/members/trainingManager.jpg"
    }
]


export default function Team() {

    useEffect(()=>{
        const members = document.querySelectorAll(".member");

        const options ={
            threshold: 0.8
        }

        const inters = new IntersectionObserver((entries, observe)=>{
            entries.forEach(entry =>{
                if(entry.isIntersecting){
                    entry.target.classList.add("visible")
                }else {
                    entry.target.classList.remove("visible")
                }
            })
        },options)

        members.forEach(member=>{
            inters.observe(member)
        })

        return ()=>{
            members.forEach(member=>{
                inters.disconnect(member);
            })
        }
    },[])

    return (
        <div className="team">
            {
                <>
                <Tesla/>
                {working_members.map(({name,quote,image},index)=>(
                    <div className={`member ${(index%2)?"inverse":""}`}>
                        <div className="container">
                            <div className="image">
                                <FontAwesomeIcon icon={faCog}/>
                                <div className="img" alt="" >
                                    <img src={getFromPublic(image)} alt="" />
                                </div>
                            </div>
                            <div className="content">
                                <h2> {name} </h2>
                                <p> {quote} </p>
                            </div>
                        </div>
                    </div>
                ))}
                </>
            }
        </div>
    )
}
