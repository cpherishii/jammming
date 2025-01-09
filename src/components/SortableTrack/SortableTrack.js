import React from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import Track from '../Track/Track';

const SortableTrack = ({ id, track, onTrackAction}) => {
    const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({ id});

    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
        cursor: isDragging ? 'grabbing' : 'grab',
        opacity: isDragging ? 0.5 : 1,
    };

    return (
        <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
            <Track track={track} onTrackAction={onTrackAction} />
        </div>
    )
}

export default SortableTrack;