import React, { useEffect, useState } from 'react'
import '../styles/components/navbar.scss'

import { NavLink } from "react-router-dom";
import { getFromPublic } from '../shared/functions/public';
import { useLocation } from "react-router-dom";

export default function Navbar() {

    const [scrolled, setScrolled] = useState(false);
    const [clicked, setClicked] = useState(false);

    const location= useLocation()

    //change style on scroll
    useEffect(()=>{
        window.addEventListener('scroll',()=>{
            setScrolled(window.pageYOffset>50);
        })
    },[])

    //close navbar on route change
    useEffect(()=>{
        setClicked(false);
    },[location])

    return (
        <nav className={(scrolled?"scrolled": "")+" "+(clicked?"clicked":"")}>
            <div className="container ">
                <div className="logos">
                    <img src={getFromPublic("/images/logos/main.png")} alt="" />
                    <img src={getFromPublic("/images/logos/white.png")} alt="" />
                </div>
                <ul>
                    <NavLink to="/" exact activeClassName="current">
                        Home
                    </NavLink>
                    <NavLink to="/about" exact activeClassName="current">About Us</NavLink>
                    <NavLink to="/awards" exact activeClassName="current">Awards</NavLink>
                    <NavLink to="/activities" exact activeClassName="current">Activities</NavLink>
                    <NavLink to="/bootcamp" exact activeClassName="current">Bootcamp</NavLink>
                    <NavLink to="/contact" exact activeClassName="current">Contact Us</NavLink>
                </ul>
                <div className={"nav-button "+(clicked?"clicked":"")} onClick={()=>{setClicked(!clicked)}}>
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                </div>
            </div>
        </nav>
    )
}
