import React from 'react'
import '../Footer/Footer.css'
import { FaFacebookF,FaInstagram,FaTelegram,FaLinkedin } from "react-icons/fa";
const Footer = () => {
  return (
    <div>
        <footer className='footer'>
            <div className="footer-container">
                <div className="row">
                    <div className="footer-col">
                        <h4>About Ethiopia</h4>
                        <ul>
                            <li><a href="#">Ethiopia Today</a></li>
                            <li><a href="#">History</a></li>
                            <li><a href="#">Life Style</a></li>
                            <li><a href="#">Culture</a></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>Plan Your Trip</h4>
                        <ul>
                            <li><a href="#">Get Your visa</a></li>
                            <li><a href="#">Book your flight </a></li>
                            <li><a href="#">General practicalities</a></li>
                            <li><a href="#">When to travel</a></li>
                            <li><a href="#">Health and safety</a></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>Important links</h4>
                        <ul>
                            <li><a href="#">Apply for ethiopian E-visa</a></li>
                            <li><a href="#"> Ethiopian Convention bureau</a></li>
                            <li><a href="#">Ethiopian Airlines</a></li>
                            
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>Follow Us</h4>
                        <div className='social-links'>
                            <i><FaFacebookF/></i>
                            <i><FaInstagram/></i>
                            <i><FaLinkedin/></i>
                            <i><FaTelegram/></i>
                        </div>
                    </div>
                </div>
            </div>

        </footer>
    </div>
  )
}

export default Footer