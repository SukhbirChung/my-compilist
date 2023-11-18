import React, { useRef, useState } from 'react';
import Loader from '../loader/Loader';
import { useNavigate } from 'react-router-dom';
import { submitSearchBoxForm } from '../../helpers/submitSearchBoxForm';
import './SearchBox.css';

function SearchBox(props) {
    const userInput = useRef();
    const [errorMessage, setErrorMessage] = useState('');
    const [category, setCategory] = useState('movies');
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const focusHandler = () => {
        setErrorMessage('');
    }

    const changeHandler = (event) => {
        setCategory(event.target.value);
    }

    const submitHandler = (event) => {
        event.preventDefault();

        setIsLoading(true);
        document.body.classList.add('disable-scroll');

        let query = userInput.current.value.trim();

        if (query) {
            const response = submitSearchBoxForm(query, category);

            response
                .then((res) => {
                    if (res.status === 200) {
                        props.searchResultsUpdated(category);
                        navigate('/searchresults');
                    }
                    else {
                        setErrorMessage(res.message);
                    }
                    setIsLoading(false);
                    document.body.classList.remove('disable-scroll');
                })
                .catch(err => {
                    console.log(err);
                    setIsLoading(false);
                    document.body.classList.remove('disable-scroll');
                });
        }
        else {
            setErrorMessage('Search box cannot be empty.');
            setIsLoading(false);
            document.body.classList.remove('disable-scroll');
        }
    }

    return (
        <div className="searchBox-form-container">
            {
                isLoading && <Loader />
            }
            <form className="searchBox-form" onSubmit={submitHandler}>
                <div className="searchBox">
                    <label htmlFor="search" className="visually-hidden">Search</label>
                    <input type="text"
                        id="search"
                        placeholder="Search"
                        required
                        ref={userInput}
                        onFocus={focusHandler}
                    />
                    <button type="submit"><img src={process.env.PUBLIC_URL + '/assets/search.svg'} alt="Search icon" width="30" /></button>
                </div>
                <div className="searchBox-form-category-options margin-top-extra-small font-size-small">
                    <div>
                        <input type="radio" id="movies" name="searchBox-form-category-option" value="movies" defaultChecked onChange={changeHandler} />
                        <label htmlFor="movies">Movies</label>
                    </div>
                    <div>
                        <input type="radio" id="shows" name="searchBox-form-category-option" value="shows" onChange={changeHandler} />
                        <label htmlFor="shows">Shows</label>
                    </div>
                    <div>
                        <input type="radio" id="documentaries" name="searchBox-form-category-option" value="documentaries" onChange={changeHandler} />
                        <label htmlFor="documentaries">Documentaries</label>
                    </div>
                    <div>
                        <input type="radio" id="books" name="searchBox-form-category-option" value="books" onChange={changeHandler} />
                        <label htmlFor="books">Books</label>
                    </div>
                </div>                
            </form>
            {
                errorMessage &&
                <div className="searchBox-error-message font-size-extra-small margin-top-extra-small">
                    <img src={process.env.PUBLIC_URL + '/assets/error.svg'} alt="Error message icon" width="24" />
                    <span>{errorMessage}</span>
                </div>
            }
        </div>
    );
}

export default SearchBox;