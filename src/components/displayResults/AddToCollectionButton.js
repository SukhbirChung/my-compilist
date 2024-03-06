import React, { Fragment, useState } from 'react';
import { addToCollection } from '../../helpers/addToCollection';
import FlashMessage from '../flashMessage/FlashMessage';
import Loader from '../loader/Loader';

function AddToCollectionButton(props) {
    let item = props.item;

    const [btnDisabled, setBtnDisabled] = useState(false);
    const [hoverMessage, setHoverMessage] = useState('');
    const [flashMessage, setFlashMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const clickHandler = () => {
        if (props.username) {
            setIsLoading(true);

            let response;

            if (props.comingFromBooks) {
                response = addToCollection('books', {
                    id: item.key || item.book_uri,
                    cover: item.cover_i,
                    nytCover: item.book_image,
                    title: item.title,
                    author: item.author || item.author_name[0],
                    amazon_product_url: item.amazon_product_url
                });
            }
            else {
                response = addToCollection(props.category, {
                    id: item.id,
                    cover: item.poster_path,
                    rating: item.vote_average ? item.vote_average.toFixed(1) : 0,
                    title: props.category === 'movies' ? item.title : item.name,
                    imdb_id: props.imdb_id,
                    release_year: props.category === 'movies' ? item.release_date.slice(0, 4) : item.first_air_date.slice(0, 4)
                });
            }

            response.then((res) => {
                if (res.status === 200 || res.status === 201) {
                    setBtnDisabled(true);
                    setFlashMessage({ success: res.data.message });

                    setIsLoading(false);
                }
                else {
                    setFlashMessage({ error: "Something went wrong." });
                    setIsLoading(false);
                }                
            }).catch(err => console.log(err));
        } else {
            setFlashMessage({ error: "Login to add an item to your collection." });
        }
   }

    return (
        <Fragment>
            {
                isLoading && <Loader />
            }
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