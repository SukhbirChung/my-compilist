import { Link } from 'react-router-dom';
import RemoveFromCollectionButton from './RemoveFromCollectionButton';
import Rating from '../displayResults/Rating';

function DisplayList(props) {
    const category = props.category.toLowerCase();
    const item = props.item;

    return (
        <figure>
            <RemoveFromCollectionButton category={category} id={item.id} removeItem={props.removeItem} />
            {
                category === 'books' &&
                    (item.cover ?
                        <img src={`https://covers.openlibrary.org/b/id/${item.cover}-L.jpg`} width="200" height="300" alt="Book Cover" /> :
                        <p className="movie-poster font-size-extra-large">No Image Available</p>)
            }
            {
                category !== 'books' &&
                    (item.cover ?
                    <img src={`https://image.tmdb.org/t/p/w200/${item.cover}`} width="200" height="300" alt="Movie poster" /> :
                    <p className="movie-poster font-size-extra-large">No Image Available</p>)
            }            
            <figcaption className="item-figcaption margin-top-small">
                <Rating rating={item.rating} comingFromBookResults/>
                <div className="margin-top-small item-title">
                    {item.title} ({item.release_or_publish_year})
                </div>
                {
                    category === 'books' ?
                        <div className="item-external-links-container margin-top-medium">
                            <Link className="link moving-color-button" to={`https://www.goodreads.com/search?query=${item.title}`} target="_blank">
                                Goodreads
                            </Link>
                            <Link className="link moving-color-button margin-top-small" to={`https://www.amazon.ca/s?k=${item.title}`} target="_blank">
                                Amazon
                            </Link>
                        </div>
                        :
                        <div className="item-external-links-container margin-top-medium">
                            <Link className="link moving-color-button" to={`https://www.youtube.com/results?search_query=${item.title}+trailer`} target="_blank">
                                Trailer
                            </Link>
                            <Link className="link moving-color-button margin-top-small" to={`https://www.imdb.com/find/?q=${item.title}&ref_=nv_sr_sm`} target="_blank">
                                IMDB
                            </Link>
                        </div>
                }
            </figcaption>
        </figure>
    );
}

export default DisplayList;