import React,{createContext, useState} from 'react'
import { useContext } from 'react';


const showContext = createContext(); 

export function useShow(){
    return useContext(showContext);
}

export function EsShowProvider({children}) {

        //event show part 
    const [esShowed, setEsShowed] = useState(false);
    const [esShow, setEsShow] = useState({
        image: 'hhhhhhh', 
        title:'hhh', 
        status:'Upcoming', 
        description:'hhhhhhhhhhhhhh hhhhhhhhhhh hhhhhhhhhhhh hhhhhhhhhhhhhhh hhhhhhhh'
    })

    const triggerShow= ({
        image, title, status, description
    })=>{
        setEsShow({
        image, title, status, description
        })
        setEsShowed(true)
    }

    const stopShow = ()=>{
        setEsShowed(false)
    }

    const value ={
        esShowed,esShow,
        triggerShow, 
        stopShow
    }

    return (
        <showContext.Provider value={value}>
            {children}
        </showContext.Provider>
    )
}
