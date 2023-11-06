import './Loader.css';

function Loader() {
    return (
        <div className="loader">
            <img src={process.env.PUBLIC_URL + '/assets/loader.svg'} alt="Loader" />
        </div>
    );
}

export default Loader;