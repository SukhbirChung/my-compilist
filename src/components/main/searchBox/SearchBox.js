import React, { useRef, useState } from 'react';
import axios from 'axios';
import { submitForm } from '../../../helpers/helpers';
import './SearchBox.css';

function SearchBox(props) {
    const userInput = useRef();
    const [errorMessage, setErrorMessage] = useState('');
    const [selectedOption, setSelectedOption] = useState('movie');

    const focusHandler = () => {
        setErrorMessage('');
    }

    const changeHandler = (event) => {
        setSelectedOption(event.target.value);
    }

    const submitHandler = (event) => {
        event.preventDefault();
        let query = userInput.current.value.trim();

        if (query) {
            const response = submitForm({
                requestComingFrom: 'searchBox',
                query: query,
                selectedOption: selectedOption
            });

            response
                .then((res) => {
                    res === 'success' ?
                        props.returnSearchResults(true) :
                        setErrorMessage(res)
                })
                .catch(err => {
                    console.log(err);
                });
        }
        else {
            setErrorMessage('Search box cannot be empty.');
        }
    }

    return (
        <div className="searchBox-form-container margin-top-large">
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
                        <input type="radio" id="movies" name="searchBox-form-category-option" value="movie" defaultChecked onChange={changeHandler} />
                        <label htmlFor="movies">Movies</label>
                    </div>
                    <div>
                        <input type="radio" id="shows" name="searchBox-form-category-option" value="tv" onChange={changeHandler} />
                        <label htmlFor="shows">Shows</label>
                    </div>
                    <div>
                        <input type="radio" id="documentaries" name="searchBox-form-category-option" value="tv" onChange={changeHandler} />
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