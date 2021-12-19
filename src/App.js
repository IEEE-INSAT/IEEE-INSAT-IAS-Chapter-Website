import './App.scss';

import React, { useEffect, useRef, useState, useContext, createContext } from 'react';
import Home from './pages/Home';
import FixedBackg from './components/FixedBackg';
import AboutUs from './pages/AboutUs';
import Navbar from './components/Navbar';
import ContactUs from './pages/ContactUs';

import { Route, useLocation,Routes } from "react-router-dom";
import Awards from './pages/Awards';
import Activities from './pages/Activities';
import { getFromPublic } from './shared/functions/public';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog } from '@fortawesome/free-solid-svg-icons';
import EventShow from './components/EventShow';
import { EsShowProvider } from './shared/contexts/EsShow';
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
  
  //loading states
  const [windowLoaded, setWindowLoaded] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoEnded, setVideoEnded] = useState(false)
  
  //run when video is loaded
  useEffect(()=>{

    // if not listen to when it's ready
    const load=()=>{
      setWindowLoaded(true);
    }

    window.addEventListener('load',load);

    return ()=>{
      window.removeEventListener('load', load);
    }
  },[])

  useEffect(()=>{
    document.body.style.overflowY="hidden";
  },[])

  useEffect(()=>{
    if(!videoEnded) return;
    window.scrollTo({
      top:0,
      behavior:'smooth'
    })
    document.body.style.overflowY="auto"
  },[videoEnded])

  //scroll to top on route change
  useEffect(() => {
    window.scrollTo({
      top:0
    })
  }, [location])


  



  return (
    <>
      <EsShowProvider>
      <div className={"App "+(videoEnded?"":"invisible")}>
        <FixedBackg/>
        <Navbar/>
        <Routes>
          {
            routes.map(({path, Component, name})=>(
                <Route path={path} key={name} element={<Component/>} />
            ))
          }  
        </Routes>
        <EventShow/>
      </div>
      </EsShowProvider>
      <loadingContext.Provider value={{
        windowLoaded,
        videoLoaded,setVideoLoaded,
        videoEnded,setVideoEnded
      }}>
        <LoadingScreen/>
        <LoadingVideo/>
      </loadingContext.Provider>
    </>
  );
}

const LoadingScreen = ()=>{

  const { windowLoaded } = useContext(loadingContext)

  return (
    <div className={"loading "+(windowLoaded?"loaded":"")} >
      <FontAwesomeIcon icon={faCog} />
    </div>
  )
}

const LoadingVideo = ()=>{
  const videoRef = useRef()
  const { 
    windowLoaded,
    setVideoLoaded,
    videoEnded,setVideoEnded
  } = useContext(loadingContext);

  useEffect(()=>{
    if(!windowLoaded) return;
    videoRef.current.play();
  },[windowLoaded])

  return (
    <div className={"loading-video "+(videoEnded?"ended":"")}>
      <video 
        src={getFromPublic("/videos/enter.mp4")} 
        preload="auto"
        muted
        ref={videoRef}
        onLoadedData={(e)=>{
          if(e.target.readyState===4)
            setVideoLoaded(true);
        }}
        onEnded={()=>{
          setVideoEnded(true);
        }}
      >
      </video>
      <button 
        className={"enter-button "+(windowLoaded?"":"undisplayed")}
        onClick={()=>{setVideoEnded(true)}}
      >
        Enter
      </button>
    </div>
  )
}





export default App;
