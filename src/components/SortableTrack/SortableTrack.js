import React from 'react';
import { useSortable } from '@dnd-kit/sortable';
import Track from '../Track/Track';
import styles from './SortableTrack.module.css';

const SortableTrack = ({ id, index, track, onTrackAction}) => {
    const { attributes, listeners, setNodeRef } = useSortable({ id });

    return (
        <div 
            ref={setNodeRef}
            {...attributes}
            className={styles.SortableTrack}
        >
            <div 
                {...listeners} 
                className={styles.Handle}
            >☰</div>
            <Track  
                track={track} 
                index={index}
                onTrackAction={onTrackAction} />
        </div>
    )
}

export default SortableTrack;