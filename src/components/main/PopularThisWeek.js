import React, { useState, useEffect } from 'react';
import Loader from '../loader/Loader';
import { getPopularItems } from '../../helpers/getPopularItems';
import DisplayResults from '../displayResults/DisplayResults';

function PopularThisWeek(props) {
    const [popularItems, setPopularItems] = useState();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const response = getPopularItems();

        response.then((res) => {
            setPopularItems(res);            
            setIsLoading(false);
        }).catch(err => {
            console.log(err);
            setIsLoading(false);
        });
    }, []);

    return (
        <div className="popular-this-week-container">
            {
                isLoading && <Loader />
            }
            {
                !popularItems ? '' :
                    (typeof popularItems === 'string') ?
                        <p>{popularItems}</p> : <DisplayResults popularItems={popularItems} username={props.username} />
            }
        </div>
    );
}

export default PopularThisWeek;