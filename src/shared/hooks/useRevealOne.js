import {useDebugValue, useEffect} from 'react'

export default function useRevealOne(elementRef,inputOption={}){
    //change classes on reveal
    useEffect(()=>{
        const current = elementRef.current;
        const options ={
            threshold: 0.7,
            ...inputOption
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

        inters.observe(current)

        return ()=>{
            inters.disconnect(current);
        }
    },[elementRef,inputOption])

    useDebugValue(elementRef.current);
}