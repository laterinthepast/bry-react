import React from 'react'
import '../styles/Footer.css'

function Footer(){
    return( 
    <footer>
        <div className="container">
            <a href="https://www.instagram.com/mellerdramatic/">
                <i className="fab fa-instagram" aria-hidden="true" alt=""></i></a>
            <a href="https://www.etsy.com/uk/shop/mellerdramatic">
                <i className="fab fa-etsy" aria-hidden="true" alt=""></i></a>
            <a href="https://teespring.com/stores/mellerdramatic">my.shop</a>
        </div>
        <h6>  all rights reserved 2021 &reg; mellerdramatic</h6>
        
            
    </footer>
        )
}

export default Footer;