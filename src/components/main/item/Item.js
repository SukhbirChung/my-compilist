import IsFavAndIsWatched from './IsFavAndIsWatched';
import ItemDetails from './ItemDetails';
import './Item.css';

function Item() {
    return (
        <figure>
            <img src={process.env.PUBLIC_URL + '/assets/test.svg'} alt="" />
            <figcaption className="item-figcaption">
                <IsFavAndIsWatched />
                <ItemDetails />
            </figcaption>
        </figure>
    );
}

export default Item;