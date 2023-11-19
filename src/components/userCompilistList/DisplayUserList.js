import React, { useState, useEffect, Fragment } from 'react';
import { getUserList } from '../../helpers/getUserList';
import Loader from '../loader/Loader';
import DisplayList from './DisplayList';
import FlashMessage from '../flashMessage/FlashMessage';
import '../displayResults/DisplayResults.css';

let duplicateArray = [];

function DisplayUserList(props) {
    let category = props.category;
    const [userList, setUserList] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [flashMessage, setFlashMessage] = useState('');

    useEffect(() => {
        setIsLoading(true);
        const response = getUserList(category);

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
    }, [category]);

    const removeItem = (id) => {
        duplicateArray = userList.filter(item => item.id !== id);

        setUserList(currentState => {
            return currentState.filter(item => item.id !== id);
        });

        setFlashMessage({ success: 'Item successfully removed from your collection.' });
    }

    return (
        <Fragment>
            {
                isLoading && <Loader />
            }
            {
                flashMessage ? <FlashMessage message={flashMessage} /> : ''
            }
            {
                duplicateArray.length === 0 ?
                    <p className="margin-top-medium">No {category.toLowerCase()} saved in your list. Use the search box above to look for your favorite {category.toLowerCase()}.</p> :
                    <h2 className="font-size-medium margin-top-large">My {category}</h2>
            }
            {
                duplicateArray.length !== 0 &&
                <div className="user-list">
                    {
                        userList.map((item) => {
                            duplicateArray.pop();
                            return <DisplayList key={item.id} category={category} item={item} username={props.username} removeItem={()=>removeItem(item.id)} />
                        })
                    }
                </div>
            }
        </Fragment>
    );
}

export default DisplayUserList;