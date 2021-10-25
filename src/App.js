import './App.scss';

import React, { useEffect, useRef, useState, useContext, createContext } from 'react';
import Home from './pages/Home';
import FixedBackg from './components/FixedBackg';
import AboutUs from './pages/AboutUs';
import Navbar from './components/Navbar';
import ContactUs from './pages/ContactUs';

import { Route, useLocation } from "react-router-dom";
import Awards from './pages/Awards';
import Activities from './pages/Activities';
import { getFromPublic } from './shared/functions/public';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog } from '@fortawesome/free-solid-svg-icons';

//lading context
const loadingContext = createContext();

// setting routes
const routes = [
  {path: '/' , Component:Home, name:"home"},
  {path: '/about', Component:AboutUs, name:"about-us"},
  {path: '/contact' , Component:ContactUs, name:"contact-us"},
  {path: '/awards' , Component:Awards, name:"awards"},
  {path: '/activities' , Component:Activities, name:"activities"}
]


function App() {

  const location= useLocation();
  const [windowLoaded, setWindowLoaded] = useState(false);
  const [videoEnded, setVideoEnded] = useState(false)
  const [enter, setEnter] = useState(false);
  
  //scroll to top on route change
  useEffect(() => {
    window.scrollTo({
      top:0
    })
  }, [location,windowLoaded])

  //once everythig loads give t
  useEffect(()=>{
    document.body.style.overflowY='hidden'

    const loadedFunct= ()=>{
      setWindowLoaded(true)
      console.log("loaded")
    }

    window.addEventListener('load',loadedFunct)

    return ()=>{
      window.removeEventListener('load', loadedFunct);
    }
  },[])

  useEffect(()=>{
    if(!enter) return; 
    document.body.style.overflowY='auto'
  },[enter])

  return (
    <>
    <div className={"App "+(enter?'':'invisible')}>
      <FixedBackg/>
      <Navbar/>
      {
        routes.map(({path, Component, name})=>(
            <Route exact path={path} key={name}>
              <Component/>
            </Route>
        ))
      }  
    </div>

    {/* loading part */}
    <loadingContext.Provider value={{
      loaded: windowLoaded,
      videoEnded,
      setVideoEnded,
      enter, 
      setEnter
    }}>
      <Loading addedClass="cos-left" />
      <Loading addedClass="cos-right" />
    </loadingContext.Provider>
    </>
  );
}


const Loading = ({addedClass})=>{

  const {
    loaded,
    videoEnded,
    setVideoEnded,
    enter, 
    setEnter
  }= useContext(loadingContext)

  const myRef= useRef();
  const videoRef= useRef();

  //when video ends
  useEffect(()=>{
    //show wait message
    if(!videoEnded) return ;
    const current= myRef.current;
    current.classList.add('video-ended')
  },[videoEnded])

  //when video ends and loaded
  useEffect(()=>{
    if(!loaded) return ;
    //show enter button
    const current= myRef.current;
    current.classList.add("show-button")
    
  },[loaded])

  

  return (
    <>
    <div className={"loading "+addedClass+" "+(enter?'entered':'')} ref={videoRef}>
      <video 
        src={getFromPublic("/videos/enter.mp4")} 
        muted 
        preload="auto" 
        autoPlay
        onEnded={()=>{setVideoEnded(true)}}  
      >
      </video>
    </div>
    <div className={"text-layer "+(enter?'entered':'')} ref={myRef}>
      <div className="wait">
        <p>Loading...</p>
        <FontAwesomeIcon icon={faCog}/>
      </div>
      <button className="enter-button" onClick={()=>{setEnter(true)}} disabled={(!loaded)}>
        <p>Enter</p>
      </button>
    </div>
    </>
  )
}



export default App;
