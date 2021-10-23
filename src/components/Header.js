import React from 'react'
import '../styles/components/header.scss'

export default function Header({children}) {
    return (
        <div className="header">
            <div className="container">
                {children}
            </div>
        </div>
    )
}
