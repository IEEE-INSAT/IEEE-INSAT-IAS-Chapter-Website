import { useEffect } from "react";

function useRevealOneTime(memberRef){
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
    },[memberRef])
}

export default useRevealOneTime;