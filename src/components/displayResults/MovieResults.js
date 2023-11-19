import { Link } from 'react-router-dom';
import AddToCollectionButton from './AddToCollectionButton';
//import IsFavAndIsWatched from './IsFavAndIsWatched';
import Rating from './Rating';

function MovieResults(props) {
    let category = props.category;
    const item = props.item;

    const name = category === 'movies' ? item.title : item.name;
    const year = category === 'movies' ? item.release_date.slice(0, 4) : item.first_air_date.slice(0, 4); 

    return (
        <figure>
            <AddToCollectionButton username={props.username} category={category} item={ item}/>
            {
                item.poster_path ?
                    <img src={`https://image.tmdb.org/t/p/w200/${item.poster_path}`} width="200" height="300" alt="Movie poster" /> :
                    <p className="movie-poster font-size-extra-large">No Image Available</p>
            }
            <figcaption className="item-figcaption margin-top-small">
                <Rating rating={item.vote_average} />
                <div className="margin-top-small item-title">
                    {name} ({year})
                </div>
                <div className="item-external-links-container margin-top-medium">
                    <Link className="link moving-color-button" to={`https://www.youtube.com/results?search_query=${name}+trailer`} target="_blank">
                        Trailer
                        </Link>
                    <Link className="link moving-color-button margin-top-small" to={`https://www.imdb.com/find/?q=${name}&ref_=nv_sr_sm`} target="_blank">
                        IMDB
                        </Link>
                </div>
            </figcaption>
        </figure>
    );
}

export default MovieResults;