import React, { Fragment, useState } from 'react';
import { removeFromCollection } from '../../helpers/removeFromCollection';
import FlashMessage from '../flashMessage/FlashMessage';
import Loader from '../loader/Loader';

function RemoveFromCollectionButton(props) {
    const [hoverMessage, setHoverMessage] = useState('');
    const [flashMessage, setFlashMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const clickHandler = () => {
        setIsLoading(true);

        const response = removeFromCollection(props.category, props.id);

        response.then((res) => {
            if (res.status === 200) {
                props.removeItem();
                setIsLoading(false);
            } else {
                setFlashMessage({ error: res.data });
                setIsLoading(false);
            }
        }).catch((err) => console.log(err));
    }

    return (
        <Fragment>
            {
                isLoading && <Loader />
            }
            <button className="remove-from-collection-button font-size-large"
                onClick={clickHandler}
                onMouseEnter={() => setHoverMessage('Remove from Collection')}
                onMouseLeave={() => setHoverMessage('')}>
                x
            </button>
            {
                hoverMessage &&
                <div className="hover-message font-size-extra-small">{hoverMessage}</div>
            }
            {
                flashMessage ? <FlashMessage message={flashMessage} /> : ''
            }
        </Fragment>
    );
}

export default RemoveFromCollectionButton;