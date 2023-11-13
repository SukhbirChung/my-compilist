import { searchResults } from '../../../helpers/helpers';
import BookResults from './BookResults';
import MovieResults from './MovieResults';
import './DisplayResults.css';

function DisplayResults(props) {
    return (
        props.requestFromSearchResults && (
            props.selectedOption === 'books' ?
                searchResults.map((item) => {
                    return <BookResults key={item.key} item={item} isLoggedIn={props.isLoggedIn} />
                })
                :
                searchResults.map((item) => {
                    return <MovieResults key={item.id} item={item} selectedOption={props.selectedOption} isLoggedIn={props.isLoggedIn} />
                })
            )
    );
}

export default DisplayResults;