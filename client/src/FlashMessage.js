import React, {useState, useEffect} from 'react';
import './FlashMessage.css';

function FlashMessage(props) {

    const [visible, setVisible] = useState(true);
    return <div className={(visible ? 'show': 'hide') + ' message'}>{props.message}</div>;
}

export default FlashMessage;