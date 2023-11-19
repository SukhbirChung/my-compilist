import React, { Fragment, useState } from 'react';
import { addToCollection } from '../../helpers/addToCollection';
import FlashMessage from '../flashMessage/FlashMessage';

function AddToCollectionButton(props) {
    let item = props.item;

    const [btnDisabled, setBtnDisabled] = useState(false);
    const [hoverMessage, setHoverMessage] = useState('');
    const [flashMessage, setFlashMessage] = useState('');

    const clickHandler = () => {
        if (props.username) {
            let response;

            if (props.comingFromBookResults) {
                response = addToCollection('books', {
                    id: item.key,
                    cover: item.cover_i,
                    rating: item.ratings_average ? item.ratings_average.toFixed(1) : 0,
                    title: item.title,
                    release_or_publish_year: item.first_publish_year
                });
            } else {
                response = addToCollection(props.category, {
                    id: item.id,
                    cover: item.poster_path,
                    rating: item.vote_average ? item.vote_average.toFixed(1) : 0,
                    title: props.category === 'movies' ? item.title : item.name,
                    release_or_publish_year: props.category === 'movies' ? item.release_date.slice(0, 4) : item.first_air_date.slice(0, 4)
                });
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
        } else {
            setFlashMessage({ error: "Login to add an item to your collection." });
        }
   }

    return (
        <Fragment>
            <button className={`add-to-collection-button font-size-large${btnDisabled ? ' disabled-button' : ''}`}
                disabled={btnDisabled}
                onClick={clickHandler}
                onMouseEnter={() => setHoverMessage('Add to Collection')}
                onMouseLeave={() => setHoverMessage('')}>
                {
                    btnDisabled ? '\u2713' : '+'
                }
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

export default AddToCollectionButton;