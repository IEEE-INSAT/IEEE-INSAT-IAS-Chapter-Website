import React from 'react'
import FixedBackg from '../components/FixedBackg'
import Welcome from './home/Welcome'

export default function Home() {
    return (
        <div className="home">
            <FixedBackg/>
            <Welcome/>
            <div style={{height:'100vh',background:'white'}}></div>
            <div style={{height:'100vh'}}></div>
        </div>
    )
}
