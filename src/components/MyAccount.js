import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { submitForm, validateForm } from '../helpers/helpers';
import Loader from './loader/Loader';
import './MyAccount.css';

function MyAccount(props) {
    const formType = props.formType;

    const navigate = useNavigate();

    const [userCredentials, setUserCredentials] = useState({
        email: '',
        username: '',
        password: ''
    });
    const [passwordHidden, setPasswordHidden] = useState(true);
    const [errorMessage, setErrorMessage] = useState(false);
    const [formSubmissionResponse, setFormSubmissionResponse] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setUserCredentials({
            email: '',
            username: '',
            password: ''
        });
        setPasswordHidden(true);
        setErrorMessage(false);
        setFormSubmissionResponse('');
        setIsLoading(false);
    }, [formType]);

    const inputChangeHandler = (event) => {
        setUserCredentials((prevState) => {
            return { ...prevState, [event.target.name]: event.target.value };
        });
    }

    const changePasswordVisibility = (flag) => {
        setPasswordHidden(flag);
    }

    const formSubmitHandler = (event) => {
        event.preventDefault();

        const isThereSpace = validateForm(userCredentials);
        if (isThereSpace) {
            setErrorMessage(isThereSpace);
        }
        else {
            setIsLoading(true);
            submitForm(userCredentials)
                .then(res => {
                    if (res.status === 200) {
                        props.response();
                        navigate('/');

                        setUserCredentials({
                            email: '',
                            username: '',
                            password: ''
                        });
                        setPasswordHidden(true);
                        setErrorMessage(false);
                        setFormSubmissionResponse('');
                    } else {
                        setFormSubmissionResponse(res.data);
                    }

                    setIsLoading(false);
                })
                .catch(err => console.log(err));
        }
    }
    
    return (
        <div className="form-container">
            <form className="form" onSubmit={formSubmitHandler}>
                {
                    formSubmissionResponse &&
                    <div className="form-submission-error">
                        {formSubmissionResponse}
                    </div>
                }
                {
                    isLoading && <Loader />
                }
                <h1 className="font-size-large font-weight-bold">
                    {formType}
                </h1>
                <div className="form-control-row margin-top-medium">
                    {formType === 'Sign Up' &&
                        <div className="form-control">
                        <label htmlFor="email" className="font-size-small font-weight-bold">Email</label>
                            <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            value={userCredentials.email}
                            onChange={inputChangeHandler}
                            />
                        </div>
                    }
                    <div className="form-control">
                        <label htmlFor="username" className="font-size-small font-weight-bold">Username</label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            required
                            value={userCredentials.username}
                            onChange={inputChangeHandler}
                        />
                        {
                            errorMessage === 'username' &&
                            <p className="error-message font-size-small">
                                <img src={process.env.PUBLIC_URL + '/assets/error.svg'} alt="An error icon" width="24" />
                                No spaces allowed
                            </p>
                        }
                    </div>
                    <div className="form-control password-form-control">
                        <label htmlFor="password" className="font-size-small font-weight-bold">Password</label>
                        <input
                            type={passwordHidden ? 'password' : "text"}
                            id="password"
                            name="password"
                            required
                            minLength="6"
                            maxLength="8"
                            value={userCredentials.password}
                            onChange={inputChangeHandler}
                        />
                        <button type="button" onClick={() => changePasswordVisibility(true)}><img src={process.env.PUBLIC_URL + '/assets/password-shown.svg'} alt="An eye icon" width="24" /></button>
                        {
                            passwordHidden && <button type="button" onClick={() => changePasswordVisibility(false)}><img src={process.env.PUBLIC_URL + '/assets/password-hidden.svg'} alt="An eye icon covered with a line" width="24" /></button>                        }
                        {
                            errorMessage === 'password' &&
                            <p className="error-message font-size-small">
                                <img src={process.env.PUBLIC_URL + '/assets/error.svg'} alt="An error icon" width="24" />
                                No spaces allowed
                            </p>
                        }
                    </div>
                </div>
                <div className="form-actions margin-top-medium">
                    <button type="submit">{formType}</button>
                </div>               
            </form>
            {
                formType === 'Login' ?
                    <div className="form-link-container margin-top-extra-large">
                        <span>Don't have an account yet?&nbsp;</span>
                        <Link className="form-link font-size-medium" to="/signup">Sign Up</Link>
                    </div> :
                    <div className="form-link-container margin-top-extra-large">
                        <span>Already have an account?&nbsp;</span>
                        <Link className="form-link font-size-medium" to="/login">Login</Link>
                    </div>
            }   
        </div>
    );
}

export default MyAccount;