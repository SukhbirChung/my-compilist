import DisplayBook from './DisplayBook';
import './DisplayBookResults.css';

function DisplayBookResults(props) {
    const books_list = props.comingFromSearchResults ? props.list : props.list.books;

    return (
        books_list.map((book) => {
            //console.log(book);
            return <DisplayBook key={book.title} book={book} username={props.username} />
        })
    );
}

export default DisplayBookResults;