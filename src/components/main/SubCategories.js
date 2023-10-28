import React, { useState, useEffect } from 'react';

function SubCategories(props) {
    const category = props.category;

    const subCategories = ['Watched', 'Not Watched', 'IMDB Rating', 'My Rating', 'Year'];
    const subCategoriesBooks = ['Read', 'Not Read', 'Rating'];

    const [activeSubCategory, setActiveSubCategory] = useState('All');

    useEffect(() => {
        setActiveSubCategory("All");
    }, [category]);

    const optionChangeHandler = (event) => {
        setActiveSubCategory(event.target.value);
    }

    return (
        <div className="subCategories margin-top-medium">
            <div className="activeSubCategory font-size-small">
                {activeSubCategory} (10)
                <div></div>
            </div>
            <div className="subCategory-selection">
                <label htmlFor="sort" className="visually-hidden">Sort By</label>
                <select id="sort" onChange={optionChangeHandler}>
                    <option value="">Sort By</option>
                    <option value="All">All</option>
                    {
                        category === 'Books' ?
                            subCategoriesBooks.map((subCategory) => {
                                return <option key={subCategory} value={subCategory}>{subCategory}</option>
                            }) :
                            subCategories.map((subCategory) => {
                                return <option key={subCategory} value={subCategory}>{subCategory}</option>
                            })                        
                    }
                </select>
            </div>
        </div>);
}

export default SubCategories;