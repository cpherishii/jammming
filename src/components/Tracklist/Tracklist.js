import React from 'react';
import styles from './Tracklist.module.css';
import Track from '../Track/Track';
import { DndContext, closestCenter } from '@dnd-kit/core';
import { arrayMove, SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';
import SortableTrack from '../SortableTrack/SortableTrack.js';

const Tracklist = ({tracks, button, onTrackAction, keyPrefix, setPlaylistTracks}) => {
    console.log(`Tracks: ${tracks.map(track => track.name)}`);

    const handleDragEnd = (event) => {
        if (!setPlaylistTracks) {
            return;
        }

        const {active, over} = event;

        if (!active || !over) {
            return;
        }
        
        if (active.id !== over.id) {
            const oldIndex = tracks.findIndex(track => track.id === active.id);
            const newIndex = tracks.findIndex(track => track.id === over.id);
            setPlaylistTracks(arrayMove(tracks, oldIndex, newIndex));
        }
    };

    if (!setPlaylistTracks) {
        return (
            <div className={styles.Tracklist}>
                {tracks.length > 0 ? (
                    tracks.map((track, i) => {
                        return (
                            <Track 
                                track={track}
                                key={keyPrefix + i}
                                id={track.id}
                                index={i}
                                button={button}
                                onTrackAction={onTrackAction} 
                            />
                        );
                    }
                )) : (
                    <p>No tracks found.</p>
                )
                }
            </div>
        );
    }

    return (
        <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
            <SortableContext items={tracks} strategy={verticalListSortingStrategy}>
                <div className={styles.Tracklist}>
                    {tracks.map((track, i) => (
                        <SortableTrack
                            key={keyPrefix + i}
                            id={track.id}
                            track={track}
                            onTrackAction={onTrackAction}
                        />
                    ))}
                </div>
            </SortableContext>
        </DndContext>
    )
};

export default Tracklist;