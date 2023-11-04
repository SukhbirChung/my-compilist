import React, { useState, Fragment } from 'react';

function AddToCollectionButton(props) {
    const classes = props.itemExists ?
        'add-to-collection-button font-size-large disabled' :
        'add-to-collection-button font-size-large';

    const [hoverMessage, setHoverMessage] = useState('');

    const clickHandler = () => {
        console.log("added to collection");
    }

    return (
        <Fragment>
            <button className={classes}
                onClick={clickHandler}
                onMouseEnter={() => {
                    setHoverMessage(
                        props.itemExists ?
                            'Already added to My Compilist Collection' :
                            'Add to My Compilist Collection'
                    );
                }}
                onMouseLeave={() => setHoverMessage('')}>
                {
                    props.itemExists ? '&#x2713;' : '+'
                }
            </button>
            {
                hoverMessage &&
                <div className="hover-message font-size-extra-small">{hoverMessage}</div>
            }
        </Fragment>
    );
}

export default AddToCollectionButton;