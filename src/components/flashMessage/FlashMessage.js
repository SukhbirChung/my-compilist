import React, { useState, useEffect } from 'react';
import './FlashMessage.css';

function FlashMessage(props) {
    const [displayFlashMessage, setDisplayFlashMessage] = useState(true);

    useEffect(() => {
        setDisplayFlashMessage(true);

        setTimeout(() => {
            setDisplayFlashMessage(false);
        }, 2000);
    }, [props.message]);    

    return (
        displayFlashMessage && (
        <div className="flash-message">
            <div className={`${props.message.error ? 'error' : 'success'}-flash-message`}>
                {
                    props.message.error ? props.message.error : props.message.success
                }
            </div>
        </div>)
    );
}

export default FlashMessage;