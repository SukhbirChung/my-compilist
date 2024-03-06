import { Link } from 'react-router-dom';
import RemoveFromCollectionButton from './RemoveFromCollectionButton';
import Rating from '../displayResults/Rating';

function DisplayList(props) {
    const category = props.category.toLowerCase();
    const item = props.item;

    return (
        <figure>
            <RemoveFromCollectionButton category={category} id={item.id} removeItem={props.removeItem} />
            {/* {
                category === 'books' &&
                    (item.cover ?
                        <img src={`https://covers.openlibrary.org/b/id/${item.cover}-L.jpg`} width="200" height="300" alt="Book Cover" /> :
                        <p className="movie-poster font-size-extra-large">No Image Available</p>)
            } */}
            {
                // category !== 'books' &&
                    item.cover ?
                    <img src={`https://image.tmdb.org/t/p/w200/${item.cover}`} width="200" height="300" alt="Movie poster" /> :
                    <p className="movie-poster font-size-extra-large">No Image Available</p>
            }            
            <figcaption className="item-figcaption margin-top-small">
                    <Rating rating={item.rating} imdb_id={item.imdb_id} />              
                <div className="margin-top-small item-title">
                    {item.title} ({item.release_year})
                </div>
            </figcaption>
        </figure>
    );
}

export default DisplayList;