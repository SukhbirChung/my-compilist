import React, { useState } from 'react';
import IsFavAndIsWatched from './IsFavAndIsWatched';
import ItemDetails from './ItemDetails';
import './Item.css';

function Item(props) {
    const item = props.item;
    const [hoverMessage, setHoverMessage] = useState(false);

    const mouseEnterHandler = () => {
        setHoverMessage(true);
    }

    const mouseLeaveHandler = () => {

    }

    return (
        <figure>
            <button className="add-to-collection-button font-size-large" onMouseEnter={mouseEnterHandler} onMouseLeave={ mouseLeaveHandler}>+</button>
            {
                hoverMessage &&
                <div className="hover-message">hello</div>
            }
            <img src={`https://image.tmdb.org/t/p/w300/${item.poster_path}`} width="250" alt="Movie poster" />
            <figcaption className="item-figcaption">
                {/*<IsFavAndIsWatched />*/}
                <ItemDetails item={ item}/>
            </figcaption>
        </figure>
    );
}

export default Item;