import React, { useState, Fragment } from 'react';
import { addToCollection } from '../../../helpers/helpers';
import FlashMessage from '../../flashMessage/FlashMessage';

function AddToCollectionButton(props) {
    let item = props.item;
    const [btnDisabled, setBtnDisabled] = useState(false);
    const [hoverMessage, setHoverMessage] = useState('');
    const [flashMessage, setFlashMessage] = useState('');

    const clickHandler = () => {

        if (props.isLoggedIn) {
            let response;

            if (item) {
                response = addToCollection('books', {
                    id: item.key,
                    cover_i: item.cover_i,
                    ratings_average: item.ratings_average,
                    title: item.title,
                    first_publish_year: item.first_publish_year
                });
            } else {
                response = addToCollection(props.category, props.id);
            }

            response.then((res) => {
                if (res.status === 200 || res.status === 201) {
                    setBtnDisabled(true);
                    setFlashMessage({ success: res.data.message});
                }
                else {
                    setFlashMessage({ error: "Something went wrong." });
                }                
            }).catch(err => console.log(err));
        }
        else {
            setFlashMessage({ error: "Login to add an item to your collection." });
        }

        setTimeout(() => {
            setFlashMessage('');
        }, 3000);
    }

    return (
        <Fragment>
            {
                flashMessage ? <FlashMessage message={flashMessage} /> : ''
            }
            {
                !(props.comingFromDisplayUserList) &&
                <button className={`add-to-collection-button font-size-large${btnDisabled ? ' diabled-button' : ''}`}
                    disabled={btnDisabled}
                    onClick={clickHandler}
                    onMouseEnter={() => setHoverMessage('Add to your Collection')}
                    onMouseLeave={() => setHoverMessage('')}>
                    {
                        btnDisabled ? '\u2713' : '+'
                    }
                </button>
            }            
            {
                hoverMessage &&
                <div className="hover-message font-size-extra-small">{hoverMessage}</div>
            }
        </Fragment>
    );
}

export default AddToCollectionButton;