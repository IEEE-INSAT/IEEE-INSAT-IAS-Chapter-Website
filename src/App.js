import './App.scss';

import React, { useEffect } from 'react';
import Home from './pages/Home';
import FixedBackg from './components/FixedBackg';
import AboutUs from './pages/AboutUs';
import Navbar from './components/Navbar';

import { Route, useLocation } from "react-router-dom";


const routes = [
  {path: '/' , Component:Home, name:"home"},
  {path: '/about', Component:AboutUs, name:"about-us"}
]


function App() {

  const location= useLocation();

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
        routes.map(({path, Component})=>(
            <Route exact path={path}>
              <Component/>
            </Route>
        ))
      }  

    </div>
  );
}

export default App;
