import { Link } from 'react-router-dom';
import { searchResults } from '../../../helpers/helpers';
import AddToCollectionButton from './AddToCollectionButton';
import Rating from './Rating';

function MovieResults(props) {
    const selectedOption = props.selectedOption;

    function getDetails(item) {
        const name = selectedOption === 'movie' ? item.title : item.name;
        const year = selectedOption === 'movie' ? item.release_date.slice(0, 4) : item.first_air_date.slice(0, 4);
        return {name, year};
    }    

    return (
        searchResults.map((item) => {
            const { name, year} = getDetails(item);

            return <figure key={item.id}>
                <AddToCollectionButton />
                {
                    item.poster_path ?
                        <img src={`https://image.tmdb.org/t/p/w300/${item.poster_path}`} width="250" height="375" alt="Movie poster" /> :
                        <p className="movie-poster font-size-extra-large">No Image Available</p>
                }
                <figcaption className="item-figcaption">
                    <Rating rating={item.vote_average} />
                    <div className="font-size-large">
                        {name} ({year})
                    </div>
                    <div className="item-external-links-container margin-top-medium font-size-medium">
                        <Link className="link moving-color-button" to={`https://www.youtube.com/results?search_query=${name}+trailer`} target="_blank">
                            Trailer
                        </Link>
                        <Link className="link moving-color-button" to={`https://www.imdb.com/find/?q=${name}&ref_=nv_sr_sm`} target="_blank">
                            IMDB
                        </Link>
                    </div>
                </figcaption>
            </figure>
        })
    );
}

export default MovieResults;