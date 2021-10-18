import React, { useEffect,useRef } from 'react'
import { getFromPublic } from '../shared/functions/public'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCog } from '@fortawesome/free-solid-svg-icons'
import '../styles/components/member-image.scss'
import { faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons'

export default function MemberImage({name, position, facebook, linkedin,image}) {

    const memberRef = useRef(null);

    //changing class when revealed
    useEffect(()=>{
        const current = memberRef.current;

        const options ={
            threshold: 0.8
        }

        const inters = new IntersectionObserver((entries, observe)=>{
            entries.forEach(entry =>{
                if(entry.isIntersecting){
                    entry.target.classList.add("visible")
                    observe.disconnect()
                }
            })
        },options)

        inters.observe(current)

        return ()=>{
            inters.disconnect(current);
        }
    },[])

    return (
        <div className="bureau-member" ref={memberRef} >
            <div className="image">
                <FontAwesomeIcon icon={faCog}/>
                <div className="img" alt="" >
                    <img src={getFromPublic(image)} alt="" />
                    <div className="content">
                        <h2> {name} </h2>
                        <p> {position} </p>
                        <div className="links">
                            <a href={facebook}>
                                <FontAwesomeIcon icon={faFacebook} />
                            </a>
                            <a href={linkedin}>
                                <FontAwesomeIcon icon={faLinkedin}/>
                            </a>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}
