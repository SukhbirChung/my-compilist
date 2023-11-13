import React, { useState, useEffect } from 'react';
import Loader from '../../loader/Loader';
import { getPopularItems } from '../../../helpers/helpers';
import PopularItems from './PopularItems';

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
                        <p>{popularItems}</p> : <PopularItems popularItems={popularItems} isLoggedIn={props.isLoggedIn} />
            }
        </div>
    );
}

export default PopularThisWeek;