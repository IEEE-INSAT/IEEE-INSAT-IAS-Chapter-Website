import React,{useEffect, useRef} from 'react'
import '../../styles/components/Tesla.scss'
import { getFromPublic } from '../functions/public'
import { getRandom } from '../functions/math'

const teslaQuotes = [
    "“If you want to find the secrets of the universe, think in terms of energy, frequency and vibration.”",
    "“I don't care that they stole my idea . . I care that they don't have any of their own”",
    "“The day science begins to study non-physical phenomena, it will make more progress in one decade than in all the previous centuries of its existence.”",
    "“The scientists of today think deeply instead of clearly. One must be sane to think clearly, but one can think deeply and be quite insane.”",
    "“Be alone, that is the secret of invention; be alone, that is when ideas are born.”",
]


export default function Alexander() {

    const pageRef = useRef();

    useEffect(()=>{

        const current = pageRef.current; 

        const options ={
            threshold: 0.8
        }
        const inters = new IntersectionObserver((entries, observe)=>{
            entries.forEach(entry=>{
                if(entry.isIntersecting){
                    entry.target.classList.add("visible")
                }else {
                    entry.target.classList.remove("visible")
                }
            })
        },options)

        inters.observe(current);

        return ()=>{
            inters.disconnect(current)
        }
    },[])

    return (
        <div className="tesla" ref={pageRef}>
            <div className="container">
            <div>
                <img src={getFromPublic("/images/pictures/events/alexanderDeCroo.jpg")} alt="" />
                <div className="content">
                    <p className="tesla-quote"> Every industrial revolution brings along a learning revolution. </p>
                    <p className="tesla-name">--Alexander De Croo</p>
                </div>
            </div>
            </div>
        </div>
    )
}
