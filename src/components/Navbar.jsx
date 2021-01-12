import React from 'react'
import '../styles/Navbar.css'

function Navbar() {
    return (<>
        <nav className="navbar">
            <div className="social-link">
                <a href="https://www.instagram.com/mellerdramatic/"><span className="fab fa-instagram"></span></a>
                <a href="https://teespring.com/stores/mellerdramatic">my.shop</a>
            </div>
        </nav>
    </>
    )
}

export default Navbar;