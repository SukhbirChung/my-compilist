import React, { useState, useEffect } from 'react';

function SubCategories(props) {
    const category = props.category;

    const subCategories = ['Year', 'Rating', 'Favorite', 'Watched', 'Not Watched'];
    const subCategoriesBooks = ['Year', 'Rating', 'Favorite', 'Read', 'Not Read'];

    const [activeSubCategory, setActiveSubCategory] = useState('All');

    useEffect(() => {
        setActiveSubCategory("All");
    }, [category]);

    const optionChangeHandler = (event) => {
        setActiveSubCategory(event.target.value);
    }

    return (
        <div className="subCategories">
            <div className="activeSubCategory font-size-extra-small">
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