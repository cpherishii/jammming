import React from 'react';
import styles from './Track.module.css';

const Track = ({track, index, button, onTrackAction}) => {

    const handleClick = () => {
        onTrackAction(index);
    };

    return (
        <div className={styles.Track}>
            <img src={track.imgUrl} alt={track.name} />
            <div className={styles.TrackInfo}>
                <h3>{track.name}</h3>
                <p>{track.artists}</p>
                <p>{track.album}</p>
                <button className={styles.TrackAction} onClick={handleClick}>
                    {button === 'add' ? 'Add' : 'Remove'}
                </button>
            </div>
        </div>
    );
}

export default Track;