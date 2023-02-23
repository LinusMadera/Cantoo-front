import React from 'react'
import "./Home.scss"
import noir from "../assets/noir.png";
import romance from "../assets/romance.png";
import scifi from "../assets/scifi.png";
import fantasy from "../assets/fantasy.png";
import { motion } from 'framer-motion'


const Home = () => {

  return (
    <motion.div className="container " id='home'
      initial={{ y: -15, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={
        {
          duration: 2,
          delay: 0.5
        }
      }
    >
      <div className="profile_text_and_images">

          <div className="genreUpRow">

            <div className="noir">
              Noir
            </div>
            <img src={noir} alt="My Image" className='noirImage'/>

            <div className="romance">
              Romance
            </div>
            <img src={romance} alt="My Image" className='romanceImage'/>

          </div>

        <h1 className='text'>Breathtaking <span className='highlight'>Stories</span><br /> Written and illustrated by A.I. <br /> Checkout our <span className='highlight'>gallery</span>, and blow your mind!</h1>
        <h3 className='genres'>4 Different<span> Genres</span> </h3>
        <span className='subtitlegenres'>And more to come...</span>

          <div className="genreDownRow">

            <div className="action">
              Action
            </div>
            <img src={fantasy} alt="My Image" className='fantasyImage'/>  

            <div className="scifi">
              Sci fi
            </div>
            <img src={scifi} alt="My Image" className='scifiImage'/>
          </div>

        </div>
      <a href='#gallery' className='galleryButton'>
    <button className='brutalistButton'>
        <span className='brutalistTextBlack'>Gallery</span>
    </button>
</a>
    </motion.div>
  )
}

export default Home