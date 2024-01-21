import DisplayBook from './DisplayBook';
import './DisplayBookResults.css';

function DisplayBookResults(props) {
    //const list_name = props.list.list_name;
    const books_list = props.comingFromSearchResults ? props.list : props.list.books;

    return (
        /*<div className="book-list-container">*/
            /*<h3 className="font-size-small margin-top-medium">{list_name}</h3>*/
            /*<div className="popular-this-week hide-scrollbar">
                {*/
                    books_list.map((book) => {
                        return <DisplayBook key={book.title} book={book} username={props.username}/>
                    })
                /*}
            </div>*/
        /*</div>*/
    );
}

export default DisplayBookResults;