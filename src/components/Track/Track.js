import React from 'react';
import styles from './Track.module.css';

const Track = ({track, index, button, onTrackAction}) => {

    const handleClick = () => {
        onTrackAction(index);
    };

    return (
        <div className={styles.Track}>
            <div className={styles.TrackInfo}>
                <h3>{track.name}</h3>
                <p>{track.artist}</p>
                <p>{track.album}</p>
                <button className={styles.TrackAction} onClick={handleClick}>
                    {button === 'add' ? 'Add' : 'Remove'}
                </button>
            </div>
        </div>
    );
}

export default Track;