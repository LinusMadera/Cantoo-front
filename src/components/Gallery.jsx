import React, { useEffect, useState } from 'react';
import "./Gallery.scss"
import { workNavs } from "../scripts/Data.jsx";
import { Cards } from "../scripts/Data.jsx";
import { motion } from 'framer-motion';
import Card from './Card';

const Portfolio = () => {
  const [tab, setTab] = useState({ name: "all" });
  const [cardsVar,setCards] = useState([])
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (tab.name === "all") {
      setCards(Cards)
    } else {
      const newCards = Cards.filter(card => {
        return card.category.toLowerCase() === tab.name;

      })
      setCards(newCards)
    }
  }, [tab])
  
  const activeTab = (e,index) => {
    setTab({ name: e.target.textContent.toLowerCase() });
    setActive(index)
  }

  return (
    <div className="container" id="portfolio">
      <motion.div
        initial={{opacity: 0}}
        whileInView={{y: [-50, 0], opacity: 1}}
        className="title"
      
      >
            <span>Gallery</span>
            <h2>Different worlds to immerse yourself in, enjoy :)</h2>
      </motion.div>
      <motion.div
        initial={{opacity: 0}}
        whileInView={{y: [-50, 0], opacity: 1}}
        className="buttons"
      >
        {workNavs.map((workNav ,index) => {
          return (
            <button
              onClick={(e) => activeTab(e, index)}
              className={`${active === index ? "active" + index  : ""}`}
              key={index}>{workNav}</button>
          )
        })}
      </motion.div>
      <motion.div
        initial={{x: 0 ,opacity: 0}}
        whileInView={{ x: [-250,0], opacity: 1 }}
        transition={{ duration: 1 }}
        exit={{opacity: 0, y: -50}}
        className="workImages"
      >
        {cardsVar.map((card) => {
          return (
            <div className="workImage" id={card.number}>
              <Card title={card.title} imageSrc={card.img} text={card.text} category={card.category} number={card.number} launch={card.launch} color={card.color} storyTitle={card.title}></Card>

            </div>
          )
        })}
      </motion.div>
    </div>
  )
}

export default Portfolio