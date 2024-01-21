import { Link } from 'react-router-dom';
import AddToCollectionButton from '../displayResults/AddToCollectionButton';
import RemoveFromCollectionButton from '../userCompilistList/RemoveFromCollectionButton';
//import IsFavAndIsWatched from './IsFavAndIsWatched';
//import Rating from './Rating';

function DisplayBook(props) {
    const book = props.book;
    const words_in_title = (book.title.split(' ')).map(word => {
        return word.charAt(0) + word.slice(1).toLowerCase();
    });
    const title = words_in_title.join(' ');

    return (
        <figure>
            {
                props.removeItem ?
                    <RemoveFromCollectionButton category={'nytbooks'} id={book.id} removeItem={props.removeItem} /> :
                    <AddToCollectionButton username={props.username} category='books' item={book} comingFromNYTBookResults />
            }            
            <img src={`${book.book_image}`} width="200" height="300" alt="Book Cover" />
            <figcaption className="item-figcaption margin-top-small">
                <div className="margin-top-small item-title">
                    {title}{/*({item.first_publish_year})*/}<br />
                    <span className="font-size-extra-small">Author: {book.author}</span>
                </div>
                <div className="item-external-links-container margin-top-medium">
                    <Link className="link moving-color-button" to={`https://www.goodreads.com/search?query=${title}`} target="_blank">
                        Goodreads
                        </Link>
                    <Link className="link moving-color-button margin-top-small" to={`https://www.amazon.ca/s?k=${title}`} target="_blank">
                        Amazon
                        </Link>
                </div>
            </figcaption>
        </figure>
    );
}

export default DisplayBook;