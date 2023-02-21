import React, { useState, useEffect } from 'react';
import "./Navbar.scss";
import { motion } from 'framer-motion';
import { socialIcons } from "../scripts/Data.jsx";
const Navbar = () => {
    
    const [scroll, setScroll] = useState(false);
    
    useEffect(() => {
        window.addEventListener("scroll", () => {
            setScroll(window.scrollY > 20)
        })
    },[])
    return (
        <motion.div
            initial={{ y: -25 }}
            animate={{ y: -5 }}
            transition={{duration: 0.5}}
            className={scroll ? "header active" : "header"}>
            <div className="Nav_container">
                <div className="logo">
                    <h1><span className='aiLogoText'>Ai</span><span className='aiLogoText'> Stories </span><span id='hubLogoText'>Hub</span></h1>
                </div>
                    
                <div className="social_icons" >
                    {socialIcons.map((socialIcon, index) => {
                        return (
                            <button className='brutalistButton icons'>
                                <span key={index}>{socialIcon}</span>
                            </button>
                        )
                    })}
                </div>
        </div>
    </motion.div>
    )
}

export default Navbar