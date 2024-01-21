import { Link } from 'react-router-dom';
import AddToCollectionButton from './AddToCollectionButton';
//import IsFavAndIsWatched from './IsFavAndIsWatched';
import Rating from './Rating';

function BookResults(props) {
    const item = props.item;
    let title = item.title;

    return (
        <figure>
            <AddToCollectionButton username={props.username} category='books' item={item} comingFromBookResults />
            {
                item.cover_i ?
                    <img src={`https://covers.openlibrary.org/b/id/${item.cover_i}-L.jpg`} width="200" height="300" alt="Book Cover" /> :
                    <p className="movie-poster font-size-extra-large">No Image Available</p>
            }
            <figcaption className="item-figcaption margin-top-small">
                <Rating rating={item.ratings_average} comingFromBookResults />
                <div className="margin-top-small item-title">
                    {title} {/*({item.first_publish_year})*/}<br />
                    <span className="font-size-extra-small">Author: {item.author_name[0]}</span>
                </div>
                <div className="item-external-links-container margin-top-medium">
                    <Link className="link moving-color-button" to={`https://www.goodreads.com/search?query=${item.title}`} target="_blank">
                        Goodreads
                        </Link>
                    <Link className="link moving-color-button margin-top-small" to={`https://www.amazon.ca/s?k=${item.title}`} target="_blank">
                        Amazon
                        </Link>
                </div>
            </figcaption>
        </figure>
    );
}

export default BookResults;