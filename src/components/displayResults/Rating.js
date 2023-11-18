function Rating(props) {
    const totalRating = props.comingFromBookResults ? '/5' : '/10';
    return (
        <div className="rating font-size-small">
            <img src={process.env.PUBLIC_URL + '/assets/rating-star.svg'} width="24" />
            {
                props.rating ?
                    props.rating.toFixed(1) + totalRating :
                    0 + totalRating
            }
        </div>
    );
}

export default Rating;