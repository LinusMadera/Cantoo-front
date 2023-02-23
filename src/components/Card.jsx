import React from 'react';
import darkenColor from '../scripts/Functions';
import "./Card.scss";
//title texts
const Card = (props) => {
    const darkColor = String(darkenColor(props.color,25))
    const styles = {
        text : {
            color: `${props.color}`
        },
        button : {
            backgroundColor: `${props.color}`
        },
        card : {
            backgroundImage: `
            radial-gradient(#ffffff 1.7px, transparent 1.7px),
            radial-gradient(#ffffff 1.7px, ${darkColor} 1.7px)
          `
        }
    }
    const onOpen = () => {
        console.log("Open")
        console.log()
        console.log(props.color)
    }
    const onShare = () => {
        if (navigator.share) {
            navigator.share({
            title: props.title,
            text: props.text,
            url: props.shareUrl,
            })
            .then(() => console.log('Shared successfully.'))
            .catch((error) => console.error('Error sharing:', error));
        } else {
            console.log('Web Share API not supported.');
        }
        };

    return (
    <div className="card" style={styles.card}>
        <div className="card-body">
            <img src={props.imageSrc} alt={props.title} className="card-img" />
                <div className='card-story-text'>
                    <h5 className="card-title" style={styles.text}>{props.storyTitle}</h5>
                </div>
            <div className='card-details'>
                <div className='group-bellow-title'>
                    <h6 className="card-text">{props.text}</h6>
                    <div className='card-info'>
                        <p className="card-text">Type: <span className="card-text-color-info"style={styles.text}>3987{props.category}</span></p>
                        <p className="card-text">№: <span className="card-text-color-info" style={styles.text}>{props.number}</span></p>
                        <p className="card-text">Launch: <span className="card-text-color-info" style={styles.text}>{props.launch}</span></p>
                    </div>
                </div>
            </div>
                <button className='brutalistButton' style={styles.button}>
                    <span className="brutalistText" onClick={onOpen}>Open</span>
                </button>
        </div>
    </div>
    );
};

export default Card;
