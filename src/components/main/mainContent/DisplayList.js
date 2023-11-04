import Item from '../item/Item';

function DisplayList() {
    return (
        <div className="displayList margin-top-large">
            <div className="traverse-list-button">
                <button className="font-size-extra-large font-weight-bold">&lt;</button>
            </div>
            <Item requestFromDisplayList item={{}} selectedOption=''/>
            {/*<div className="item-container">*/}
            {/*    <Item />*/}
            {/*</div>*/}
            <div className="traverse-list-button">
                <button className="font-size-extra-large  font-weight-bold">&gt;</button>
            </div>
        </div>
    );
}

export default DisplayList;