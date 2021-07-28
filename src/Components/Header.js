import React from 'react'
import '../Style/Header.css'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <div className="header">
            <h3>NeWorld</h3>
            <div className="header_icons">
                <Link to="/">
                <p>Profile</p>
                </Link>
            </div>
        </div>
    )
}

export default Header
