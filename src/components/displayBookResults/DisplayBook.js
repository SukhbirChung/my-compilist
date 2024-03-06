import { Link } from 'react-router-dom';
import AddToCollectionButton from '../displayResults/AddToCollectionButton';
import RemoveFromCollectionButton from '../userCompilistList/RemoveFromCollectionButton';
//import IsFavAndIsWatched from './IsFavAndIsWatched';

function DisplayBook(props) {
    const book = props.book;
    let title = book.title;
    let imageSrc = book.nytCover || `https://covers.openlibrary.org/b/id/${book.cover}-L.jpg`;

    if (!props.comingFromUserList) {
        const words_in_title = (book.title.split(' ')).map(word => {
            return word.charAt(0) + word.slice(1).toLowerCase();
        });
        title = words_in_title.join(' ');

        if (book.book_image) {
            imageSrc = book.book_image;
        } else if (book.cover_i) {
            imageSrc = `https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`;
        }
    }

    return (
        <figure>
            {
                props.removeItem ?
                    <RemoveFromCollectionButton category='books' id={book.id} removeItem={props.removeItem} /> :
                    <AddToCollectionButton username={props.username} category='books' item={book} comingFromBooks />
            }
            {
                imageSrc ?
                    <img src={`${imageSrc}`} width="200" height="300" alt="Book Cover" /> :
                    <p className="movie-poster font-size-extra-large">No Image Available</p>
            }

            <figcaption className="item-figcaption book-figcaption margin-top-small">
                <div className="margin-top-small item-title">
                    {title}<br />
                    <span className="font-size-extra-small">Author: {book.author || book.author_name[0]}</span>
                </div>
                <div>
                    {
                        book.amazon_product_url ? <Link className="link moving-color-button font-size-extra-small" to={book.amazon_product_url} target="_blank">
                            Buy From Amazon
                        </Link> : <Link className="link moving-color-button font-size-extra-small" to={`https://www.amazon.ca/s?k=${title}`} target="_blank">
                            Buy From Amazon
                        </Link>
                    }
                </div>
            </figcaption>
        </figure>
    );
}

export default DisplayBook;