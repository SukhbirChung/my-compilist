import { useParams } from 'react-router-dom';
import SearchBox from './searchBox/SearchBox';
import SearchResults from './searchBox/SearchResults';
import MainContent from './mainContent/MainContent';

function Main(props) {
    const params = useParams();
    const category = params.category ? params.category : 'Movies';

    return (
        <main className="margin-top-large">
            <SearchBox />
            {
                props.showSearchResults ? 
                    <SearchResults /> :
                    <MainContent category={category} homepage={props.homepage} />          }
        </main>
    );
}

export default Main;