import React from 'react';
import './FlashMessage.css';

function FlashMessage(props) {
    return <div className="message">{props.message}</div>;
}

export default FlashMessage;