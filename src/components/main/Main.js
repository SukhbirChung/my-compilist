import { useParams } from 'react-router-dom';
import SubCategories from './SubCategories';
import DisplayList from './DisplayList';
import './Main.css';

function Main() {
    const params = useParams();
    const category = params.category ? params.category : 'Movies';
    
    return (
        <main>
            <SubCategories category={category} />
            <DisplayList />
        </main>
    );
}

export default Main;