import React from 'react';
import styles from './Tracklist.module.css';
import Track from '../Track/Track';
import { DndContext, closestCenter, DragOverlay } from '@dnd-kit/core';
import { arrayMove, SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';
import SortableTrack from '../SortableTrack/SortableTrack.js';

const Tracklist = ({tracks, button, onTrackAction, keyPrefix, setPlaylistTracks}) => {
    console.log(`Tracks: ${tracks.map(track => track.name)}`);

    const [activeId, setActiveId] = React.useState(null);

    const handleDragStart = (event) => {
        setActiveId(event.active.id);
    };

    const handleDragEnd = (event) => {
        if (!setPlaylistTracks) {
            return;
        }

        const {active, over} = event;

        setActiveId(null);

        if (!active || !over) {
            return;
        }

        if (active.id !== over.id) {
            const oldIndex = tracks.findIndex(track => track.uniqueId === active.id);
            const newIndex = tracks.findIndex(track => track.uniqueId === over.id);
            setPlaylistTracks(arrayMove(tracks, oldIndex, newIndex));
        }
    };

    if (!setPlaylistTracks) {
        return (
            <div className={styles.Tracklist}>
                {tracks.length > 0 && (
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
                ))}
            </div>
        );
    }

    return (
        <DndContext 
            collisionDetection={closestCenter} 
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}>
            <SortableContext items={tracks} strategy={verticalListSortingStrategy}>
                <div className={styles.Tracklist}>
                    {tracks.map((track, i) => (
                        <SortableTrack
                            key={keyPrefix + i}
                            id={track.uniqueId}
                            index={i}
                            track={track}
                            onTrackAction={onTrackAction}
                        />
                    ))}
                </div>
            </SortableContext>

            <DragOverlay>
                {activeId ? (
                    <div style={{ cursor: 'grabbing', opacity: '0.5' }}>
                        <Track 
                            track={tracks.find((track) => track.uniqueId === activeId)}
                            onTrackAction={onTrackAction}
                        />
                    </div>
                ) : null}
            </DragOverlay>
        </DndContext>
    )
};

export default Tracklist;