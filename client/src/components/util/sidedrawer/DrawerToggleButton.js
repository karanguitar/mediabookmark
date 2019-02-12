import React from 'react';
import './drawerToggleButton.css'

const DrawerToggleButton = ({drawerToggleClickHandler}) => {
    return (
        <button onClick={drawerToggleClickHandler} className="toggle-button">
            <div className="toggle-button__line" />
            <div className="toggle-button__line" />
            <div className="toggle-button__line" />    
        </button>
    );
}

export default DrawerToggleButton;
