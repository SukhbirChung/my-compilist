import { Link } from 'react-router-dom';

function Rating(props) {
    return (
        <div className="rating-container">
            <div className='rating font-size-small'>
                <img src={process.env.PUBLIC_URL + '/assets/rating-star.svg'} width="24" />
                {
                    props.rating ? props.rating.toFixed(1) : 0
                }
            </div>
            <div>
                {
                    props.imdb_id && <Link className="imdb-link" to={`https://www.imdb.com/title/${props.imdb_id}/?ref_=fn_al_tt_1`} target="_blank">
                    IMDb
                </Link>
                }                
            </div>
        </div>
    );
}

export default Rating;