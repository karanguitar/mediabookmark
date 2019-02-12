import React from 'react';
import ReactDOM from 'react-dom'

import './modal.css'

const Modal = (props) => {
    return ReactDOM.createPortal(
        <div>
            <div className="modal">
                <div className="modal__heading">
                    <h3>Heading</h3>
                </div>
                <div className="modal__content">
                    {props.children}
                </div>
                <div className="modal__actions">
                    <button>Hello</button>
                </div>
                
            </div>
        </div>,
        document.querySelector('#modal')
    )
}

export default Modal;
