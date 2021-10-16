import React from 'react'
import '../styles/components/header.scss'

export default function Header({children}) {
    return (
        <div class="header">
            <div className="container">
                {children}
            </div>
        </div>
    )
}
