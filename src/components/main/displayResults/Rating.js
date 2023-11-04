function Rating(props) {
    const totalRating = props.for === 'book' ? '/5' : '/10';
    return (
        <div className="rating">
            <img src={process.env.PUBLIC_URL + '/assets/rating-star.svg'} width="24" />
            {
                props.rating ?
                    props.rating.toFixed(1) + totalRating :
                    'No Rating Available'
            }
        </div>
    );
}

export default Rating;