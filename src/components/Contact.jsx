import React from 'react';
import "./Contact.scss";
import { socialIcons } from "../scripts/Data.jsx";
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <div className="container" id="contact">
      <motion.div
        initial={{opacity: 0}}
        whileInView={{y: [-50, 0], opacity: 1}} 
        className="title"
      >
            <h1>Stay in the loop</h1>
      </motion.div>
      <div className="contact_form">
        <motion.div
          initial={{x: 0, opacity: 0}}
          whileInView={{ x: [-150,0], opacity: 1 }}
          transition={{duration: 1}}
          className='contact_left_container'>
          <h3>Follow us, we'll keep you updated</h3>
          <p className='contact_text'>Get updates on when we~re launching new features! Be the first to know to get access to our future beta versions!</p>
          <div className="footer_social_icons">
            {socialIcons.map((socialIcon, index) => {
            return (
              <div className="footer-brutalist-button" key={index} >
                {socialIcon}
              </div>
            )
          })}
          </div>
          <div className="copy">
          &copy; COPYRIGHT AI STORIES HUB
          </div>
        </motion.div>
        <motion.div
          initial={{x: 0, opacity: 0}}
          whileInView={{ x: [150,0], opacity: 1 }}
          transition={{duration: 1}}
          className="contact_right"
        >
          <div className="contactForm">
            <h3>Register for the future</h3>
            <div className="row">
              <input type="email" placeholder='Email' />
            </div>
              <motion.div
                className="btn"
              >
                <a href="#">Confirm :)</a>
              </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Contact