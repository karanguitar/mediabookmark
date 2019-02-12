import React from 'react';

const ItemMedia = ({name, notes, id, selectedMedia, activeItem}) => {
    
    const combineFunction = (id) =>{
        activeItem(id)
        selectedMedia(id)
    }

    return (
        <div onClick={() => combineFunction(id)}>
            <h3>{name}</h3>
            <p>{notes.slice(1, 100)}...</p>
            
        </div>
    );
}

export default ItemMedia;
