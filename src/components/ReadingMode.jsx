import React from 'react';
import "./ReadingMode.scss";

const Card = (props) => {
    Chapters = [1,2,3,4,5,6,7]
    Story = props.story
    const btnList = Chapters.map(chap => {
        return (
            <button className='brutalistButton' style={styles.button}>
                <span className="brutalistText" onClick={props.onClick}>{chap}</span>
            </button>
        );
        });
        const storyList = Story.map(chapter => {
        return (
            <section className='chapter'>
                <h2 className="chapter-title" style={styles.title}>{chapter.title}</h2>
                <p className="chapter-text" style={styles.title}>{chapter.text}</p>
            </section>
        );
        });
    const styles = {
        text : {
            color: `${props.color}`
        },
        button : {
            backgroundColor: `${props.color}`
        }
    }
    const onReturn = () => {
        console.log("Return")
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
    <div className="reader">
        <div className='reader-nav'>
            <button className='brutalistButton' style={styles.button}>
                <span className="brutalistText" onClick={onReturn}>Back</span>
            </button>
        <button className='brutalistButton' style={styles.button}>
            <span className="brutalistText" onClick={onReturn}>Share</span>
        </button>

        </div>
        <div className="reader-head">
            <img src={props.imageSrc} alt={props.title} className="card-img" />
            <div className='card-story-text'>
                <h5 className="card-title" style={styles.text}>{props.storyTitle}</h5>
            </div>
            <div className='card-info'>
                <p className="card-text">Type: <span style={styles.text}>{props.type}</span></p>
                <p className="card-text">№: <span style={styles.text}>{props.number}</span></p>
                <p className="card-text">Launch: <span style={styles.text}>{props.launch}</span></p>
            </div>

            <div className='chapter-nav'>
                {btnList}
            </div>

            <div className='story'>
                {storyList}
            </div>
        </div>
    </div>
    );
};

export default Card;
