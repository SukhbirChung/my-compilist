import { NavLink } from 'react-router-dom';
import { categories } from '../../helpers/helpers';
import './NavigationBar.css';

function NavigationBar(props) {
    return (
        <div className={props.requestComingFrom === 'header' ? 'header-navigation-bar' : 'main-navigation-bar'}>
            {
                props.requestComingFrom !== 'header' && <h1 className="font-size-large margin-top-extra-large">My Collection</h1>
            }
            <nav className='navbar margin-top-small'>
                <ul className="navbar-items hide-scrollbar">
                    <li>
                        <NavLink to='/' className='link navbar-item'>
                            {
                                props.requestComingFrom === 'header' && <svg id="Home" className="navbar-item-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="24px" height="24px" fill="#fff" stroke="#fff"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><g> <g> <path d="M508.479,242.144l-245.8-212.941c-3.833-3.321-9.524-3.321-13.357,0L3.522,242.144c-3.219,2.788-4.366,7.283-2.878,11.273 c1.488,3.99,5.297,6.636,9.557,6.636h61.794v215.036c0,5.632,4.566,10.199,10.199,10.199h347.614 c5.633,0,10.199-4.567,10.199-10.199V260.053H501.8c4.258,0,8.069-2.646,9.557-6.636 C512.844,249.427,511.698,244.933,508.479,242.144z M323.528,464.162H188.475v0V290.727c0-37.234,30.293-67.527,67.527-67.527 c37.234,0,67.527,30.293,67.527,67.527V464.162z M429.808,239.654c-5.633,0-10.199,4.567-10.199,10.199v215.036h-75.683V290.727 c0-48.482-39.443-87.925-87.925-87.925s-87.925,39.443-87.925,87.925v174.162H92.393V249.853c0-5.632-4.566-10.199-10.199-10.199 H37.55L256.001,50.406l218.451,189.248H429.808z"></path> </g> </g> <g> <g> <path d="M287.32,321.351c-15.446,0-28.011,12.565-28.011,28.011s12.565,28.011,28.011,28.011s28.011-12.565,28.011-28.011 S302.766,321.351,287.32,321.351z M287.32,356.974c-4.198,0-7.613-3.416-7.613-7.613s3.416-7.613,7.613-7.613 s7.613,3.416,7.613,7.613S291.518,356.974,287.32,356.974z"></path> </g> </g> <g> <g> <path d="M242.346,93.543c-3.651-4.289-10.089-4.803-14.377-1.151l-4.79,4.08c-4.289,3.652-4.803,10.09-1.15,14.378 c2.017,2.368,4.884,3.586,7.769,3.586c2.339,0,4.69-0.8,6.608-2.436l4.79-4.08C245.484,104.268,245.998,97.831,242.346,93.543z"></path> </g> </g> <g> <g> <path d="M212.414,119.041c-3.652-4.289-10.09-4.804-14.378-1.15L90.28,209.683c-4.288,3.652-4.803,10.09-1.149,14.378 c2.017,2.368,4.884,3.586,7.769,3.586c2.339,0,4.69-0.8,6.609-2.436l107.756-91.793 C215.552,129.766,216.068,123.329,212.414,119.041z"></path> </g> </g> </g></svg>
                            }
                            <span>Home</span>
                        </NavLink>
                    </li>
                    {
                        Object.keys(categories).map((category) => {
                            return <li key={category}>
                                <NavLink to={`/${category}`}
                                    className={`link navbar-item`}>
                                    {
                                        props.requestComingFrom === 'header' && categories[category]
                                    }
                                    <span>{category}</span>
                                </NavLink>
                            </li>
                        })
                    }
                </ul>
            </nav>
        </div>
    );
}

export default NavigationBar;    