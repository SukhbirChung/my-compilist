import { Link } from 'react-router-dom';

function ItemDetails(props) {
    const item = props.item;

    return (
        <div className="itemDetails">
            <div className="rating">
                <img src={process.env.PUBLIC_URL + '/assets/rating-star.svg'} width="24" />
                <span>{item.vote_average.toFixed(1)}</span>
            </div>
            <div className="font-size-large">{item.title} ({item.release_date.slice(0, 4)})</div>
            <div className="watch-trailer margin-top-medium">
                <Link className="link" to={`https://www.youtube.com/results?search_query=${item.title}+trailer`} target="_blank">
                    <img src={process.env.PUBLIC_URL + '/assets/watch-trailer-icon.svg'} alt="" width="36" />
                    <span className="font-size-medium">Trailer</span>
                </Link>
            </div>
            {/*<div className="rating margin-top-medium">*/}
            {/*    <span>Rating</span>*/}
            {/*    <span>{ item.vote_average.toFixed(1)}</span>*/}
            {/*</div>*/}
            {/*<div className="rating margin-top-small">*/}
            {/*    <span>My Rating</span>*/}
            {/*    <span>5.7</span>*/}
            {/*</div>*/}
            
        </div>
    );
}

export default ItemDetails;