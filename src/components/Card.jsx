import React from 'react';
import BrutalistButton from './Button';
import "./Card.scss";

const Card = (props) => {
    const styles = {
        text : {
            color: `${props.color}`
        },
        button : {
            backgroundColor: `${props.color}`
        }
    }
    const onOpen = () => {
        console.log("Open")
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
    <div className="card">
        <div className="card-body">
            <img src={props.imageSrc} alt={props.title} className="card-img" />
            <div className='card-story-text'>
                <h5 className="card-title" style={styles.text}>{props.storyTitle}</h5>
                <h6 className="card-text">{props.text}</h6>
            </div>
            <div className='card-info'>
                <p className="card-text">Type: <span style={styles.text}>{props.type}</span></p>
                <p className="card-text">№: <span style={styles.text}>{props.number}</span></p>
                <p className="card-text">Launch: <span style={styles.text}>{props.launch}</span></p>
            </div>
            <button className='brutalistButton' style={styles.button}>
                <span className="brutalistText" onClick={props.onClick}>Open</span>
            </button>
        </div>
    </div>
    );
};

export default Card;
