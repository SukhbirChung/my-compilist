import React, { useState, useEffect } from 'react';
import AddToCollectionButton from './AddToCollectionButton';
import { getImdbId } from '../../helpers/getImdbId';
//import IsFavAndIsWatched from './IsFavAndIsWatched';
import Rating from './Rating';

function MovieResults(props) {
    let category = props.category;
    const item = props.item;

    const name = category === 'movies' ? item.title : item.name;
    const year = category === 'movies' ? item.release_date.slice(0, 4) : item.first_air_date.slice(0, 4);

    const [imdbId, setImdbId] = useState();

    useEffect(() => {
        const response = getImdbId(item.id, category)
        response.then((res) => {
            setImdbId(res);
        }).catch(err => console.log(err))
    }, []);

    return (
        <figure>
            <AddToCollectionButton username={props.username} category={category} item={item} imdb_id={imdbId} />
            {
                item.poster_path ?
                    <img src={`https://image.tmdb.org/t/p/w200/${item.poster_path}`} width="200" height="300" alt="Movie poster" /> :
                    <p className="movie-poster font-size-extra-large">No Image Available</p>
            }
            <figcaption className="item-figcaption margin-top-small">
                <Rating rating={item.vote_average} imdb_id={imdbId} />
                <div className="margin-top-small item-title">
                    {name} ({year})
                </div>
            </figcaption>
        </figure>
    );
}

export default MovieResults;