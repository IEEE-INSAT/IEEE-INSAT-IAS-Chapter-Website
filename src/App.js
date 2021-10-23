import './App.scss';

import React, { useEffect } from 'react';
import Home from './pages/Home';
import FixedBackg from './components/FixedBackg';
import AboutUs from './pages/AboutUs';
import Navbar from './components/Navbar';
import ContactUs from './pages/ContactUs';

import { Route, useLocation } from "react-router-dom";

// setting routes
const routes = [
  {path: '/' , Component:Home, name:"home"},
  {path: '/about', Component:AboutUs, name:"about-us"},
  {path: '/contact' , Component:ContactUs, name:"contact-us"}
]


function App() {

  const location= useLocation();

  //scroll to top on route change
  useEffect(() => {
    window.scrollTo({
      top:0,
      behavior:'smooth'
    })
  }, [location])

  return (
    <div className="App">
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
  );
}

export default App;
