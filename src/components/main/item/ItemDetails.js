import { Link } from 'react-router-dom';

function ItemDetails() {
    return (
        <div className="itemDetails margin-top-small">
            <div className="font-size-extra-large">Name (Year)</div>
            <div className="rating margin-top-medium">
                <span>IMDB Rating</span>
                <span>5.7</span>
            </div>
            <div className="rating margin-top-small">
                <span>My Rating</span>
                <span>5.7</span>
            </div>
            <div className="watchTrailer margin-top-large">
                <Link to="" className="link">
                    <img src={process.env.PUBLIC_URL + '/assets/watch-trailer-icon.svg'} alt="" width="36"/>
                    <span className="font-size-medium font-weight-bold">Watch Trailer</span>
                </Link>
            </div>
        </div>
    );
}

export default ItemDetails;