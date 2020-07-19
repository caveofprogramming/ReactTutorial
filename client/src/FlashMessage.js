import React, {useState, useEffect} from 'react';
import './FlashMessage.css';

function FlashMessage(props) {
    const [visible, setVisible] = useState(true);

    useEffect(()=>{
        const timer = setTimeout(()=>setVisible(false), props.duration);

        return ()=>{
            clearTimeout(timer);
        }
    });

    return <div className={(visible ? 'show': 'hide') + ' message'}>{props.message}</div>;
}

export default FlashMessage;