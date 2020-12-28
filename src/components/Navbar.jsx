import React from 'react'
import './Navbar.css'

function Navbar() {
    return (<>
        <nav class="navbar">
            
            <div class="social-link">
                <a href="https://www.instagram.com/mellerdramatic/"><span class="fab fa-instagram"></span></a>
                <a href="https://teespring.com/stores/mellerdramatic"><i class="fab fa-facebook-f"
                    aria-hidden="true"></i></a>
            </div>
        </nav>
    </>
    )
}

export default Navbar;