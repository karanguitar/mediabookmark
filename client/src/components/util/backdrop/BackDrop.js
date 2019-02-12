import React from 'react';
import './backdrop.css'

const BackDrop = ({backdropClickHandler}) => {
    return (
        <div onClick={backdropClickHandler} className="backdrop" />
        
    );
}

export default BackDrop;
