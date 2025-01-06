import React, { useRef, useEffect } from 'react';
import styles from './Playlist.module.css';
import Tracklist from '../Tracklist/Tracklist';

const Playlist = ({playlistTracks, playlistName, onTrackAction, setPlaylistName, saveToSpotify}) => {

    const handlePlaylistNameChange = ({target}) => {
        setPlaylistName(target.value);
    };

    const handleInputFocus = ({target}) => {
        target.select();
    };

    const playlistRef = useRef(null);

    useEffect(() => {
        if (playlistRef.current) {
            playlistRef.current.scrollTop = playlistRef.current.scrollHeight;
        }
    }, [playlistTracks.length]);

    return (
        <div className={styles.Playlist}>
            {playlistTracks.length > 0 ? (
                <div className={styles.PlaylistContainer} ref={playlistRef}>
                    <input 
                        placeholder="New Playlist"
                        onChange={handlePlaylistNameChange}
                        onFocus={handleInputFocus}
                        value={playlistName}
                    />
                    <Tracklist 
                        tracks={playlistTracks}
                        button="remove"
                        onTrackAction={onTrackAction}
                        keyPrefix="Playlist"/>
                    <button className={styles.PlaylistSave} onClick={saveToSpotify}>SAVE TO SPOTIFY</button>
                </div>
            ) : (
                <p>No tracks in playlist.</p>
            )}
        </div>
    )
};

export default Playlist;