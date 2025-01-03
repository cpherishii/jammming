import React, { useState, useEffect } from 'react';
import styles from './SearchResults.module.css';

const tracks = [
    {
        'id': 0,
        'name': 'What a Fool Believes',
        'artist': 'The Doobie Brothers',
        'album': 'Minute by Minute',
        'duration_ms': 205000
    },
    {
        'id': 1,
        'name': 'Peg',
        'artist': 'Steely Dan',
        'album': 'Aja',
        'duration_ms': 237000
    },
    {
        'id': 2,
        'name': 'Disarm',
        'artist': 'The Smashing Pumpkins',
        'album': 'Siamese Dream',
        'duration_ms': 200000
    }
];

const SearchResults = () => {
    const [track, setTrack] = useState();
    const [trackArray, setTrackArray] = useState([]);
    const handleCheckboxChange = ({target}) => {
        const trackId = parseInt(target.value, 10);
        setTrackArray(prevTrackArray => {
            if (target.checked) {
                return [...prevTrackArray, tracks.find((track) => track.id === trackId)];
            } else {
                return prevTrackArray.filter((track) => track.id !== trackId);
            }
        });
    };

    useEffect(() => {
        console.log(trackArray);
    }, [trackArray]);

    return (
        <div className={styles.SearchResults}>
            <h2>Results</h2>
            {tracks.map((track, i) => {
                return (
                    <div key={track.id} className={styles.Track}>
                        <div className={styles.TrackInfo}>
                            <h3>{track.name}</h3>
                            <p>{track.artist}</p>
                            <p>{track.album}</p>
                            <input value={track.id} type="checkbox" onChange={handleCheckboxChange}></input>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default SearchResults;