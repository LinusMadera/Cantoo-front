import React from 'react';
import BrutalistButton from './Button';
import "./Card.scss";

const Card = (props) => {

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
        <h5 className="card-title">{props.title}</h5>
        <img src={props.imageSrc} alt={props.title} className="card-img" />
        <div className="card-body">
            <p className="card-text">{props.text}</p>
            <div className="card-buttons">
                <BrutalistButton text="Like" className="btn btn-outline-primary">
                </BrutalistButton>
                <BrutalistButton text="Share" onClick={onShare}>
                </BrutalistButton>
            </div>
                <BrutalistButton isPrimary="True" text="Open" onClick={onOpen}>
                </BrutalistButton>
        </div>
    </div>
    );
};

export default Card;
