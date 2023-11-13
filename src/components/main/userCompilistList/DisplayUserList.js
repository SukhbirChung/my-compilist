import React, { useState, useEffect, Fragment } from 'react';
import { getUserList } from '../../../helpers/helpers';
import Loader from '../../loader/Loader';
import BookResults from '../displayResults/BookResults';
import MovieResults from '../displayResults/MovieResults';

let duplicateArray = [];

function DisplayUserList(props) {
    let selectedOption = props.selectedOption.toLowerCase();
    const [userList, setUserList] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        const response = getUserList(selectedOption);
        response
            .then((res) => {
                duplicateArray = [...res];
                setUserList(res);
                setIsLoading(false);
            })
            .catch((err) => {
                console.log(err);
                setIsLoading(false);
            });
    }, [selectedOption]);

    return (
        <Fragment>
            {
                isLoading && <Loader />
            }
            {
                duplicateArray.length !== 0 && (
                    selectedOption === 'books' ?
                        userList.map((item) => {
                            duplicateArray.pop();
                            return <BookResults key={item.id} item={item} isLoggedIn={props.isLoggedIn} comingFromDisplayUserList />
                        }) :
                        userList.map((item) => {
                            duplicateArray.pop();
                            return <MovieResults key={item.id} item={item} selectedOption={selectedOption} isLoggedIn={props.isLoggedIn} comingFromDisplayUserList />
                        })
                    )
            }
        </Fragment>
    );
}

export default DisplayUserList;