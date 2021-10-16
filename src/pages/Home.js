import React from 'react'
import FixedBackg from '../components/FixedBackg'
import Welcome from './home/Welcome'
import News from './home/News'
import Linking from './home/Linking'
import Numbers from './home/Numbers'
import Team from './home/Team'
import Contact from '../components/Contact'

export default function Home() {
    return (
        <div className="home">
            <Welcome/>
            <News/>
            <Linking/>
            <Numbers/>
            <Team/>
            <Contact/>
        </div>
    )
}
