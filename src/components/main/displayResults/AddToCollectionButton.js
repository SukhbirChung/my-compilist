import React, { useState, Fragment } from 'react';
import { addToCollection } from '../../../helpers/helpers';

function AddToCollectionButton(props) {
    const [btnDisabled, setBtnDisabled] = useState(false);

    const [hoverMessage, setHoverMessage] = useState('');

    const clickHandler = () => {
        const response = addToCollection(props.category, props.id);

        response.then((res) => {
            if (res.status === 200) {
                setBtnDisabled(true);
                console.log(res.data);
            }
        }).catch(err => console.log(err));
    }

    return (
        <Fragment>
            <button className={`add-to-collection-button font-size-large${btnDisabled ? ' diabled-button' : ''}`}
                disabled={btnDisabled}
                onClick={clickHandler}
                onMouseEnter={() => setHoverMessage('Add to your Collection')}
                onMouseLeave={() => setHoverMessage('')}>
                {
                    btnDisabled ? '\u2713' : '+'
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