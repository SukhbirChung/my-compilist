import BookResults from './BookResults';
import MovieResults from './MovieResults';
import './DisplayResults.css';

function DisplayResults(props) {
    return (
        props.requestFromSearchResults && (
            props.selectedOption === 'books' ?
                <BookResults /> :
                <MovieResults selectedOption={props.selectedOption} />
            )
    );
}

export default DisplayResults;