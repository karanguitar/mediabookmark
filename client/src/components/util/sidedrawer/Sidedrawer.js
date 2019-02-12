import React from 'react';
import './sidedrawer.css'

const TM_FILENAME_BASE = (props) => {
    let drawerClasses = 'side-drawer'
    if(props.show){
        drawerClasses = 'side-drawer open'
    }

    return (
        <nav className={drawerClasses}>
            <ul className="k">
                <li className="l"><a href="/">Products</a></li>
                <li className="l"><a href="/">Users</a></li>
            </ul>

        </nav>
    );
}

export default TM_FILENAME_BASE;
