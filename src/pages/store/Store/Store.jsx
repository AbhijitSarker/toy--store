import React, { useEffect, useState } from 'react';
import './Store.css'
const Store = () => {

    const [toys, setToys] = useState([]);
    const [categories, setCategories] = useState([]);
    const [subcategories, setSubcategories] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/categories')
            .then(res => res.json())
            .then(data => setCategories(data))

        fetch('http://localhost:5000/subcategories')
            .then(res => res.json())
            .then(data => setSubcategories(data))


        fetch('http://localhost:5000/toys')
            .then(res => res.json())
            .then(data => setToys(data))
    }, [])

    const [state, setState] = useState(1);
    const [subTab, setSubTab] = useState(11);
    const [tabToy, setTabToy] = useState([]);

    const action = (index) => {
        setState(index);
    }

    const action2 = (index) => {
        setSubTab(index);
    }

    const findToy = (index) => {
        const subCatToys = toys.filter(toy => toy.subcategory_id === subTab)
        return subCatToys;
    }
    const toyforcat = findToy()

    return (
        <div className='box container mx-auto my-20  '>
            {/* tabs */}
            <div className='tabs'>
                {
                    categories.map(category => <div onClick={() => action(category.category_id)} className={`tab ${state === category.category_id ? 'active-tab' : ''}`}>
                        {category.name}
                    </div>)
                }
            </div>
            {/* contents */}
            <div className="contents">
                {
                    subcategories.map(subcategory => <div className=''>
                        <div className={`content ${state === subcategory.category_id ? 'active-content' : ''}`}>
                            <div onClick={() => action2(subcategory.subcategory_id)} className={`sub-tab ${subTab === subcategory.subcategory_id ? 'active-sub-tab' : ''}`}>
                                <h1> {subcategory.name} </h1>
                            </div>
                        </div>
                        <div className='sub-contents'>
                            {
                                toyforcat.map(toy => <div className={`sub-tab-content ${subTab === subcategory.subcategory_id ? 'active-sub-tab-content' : ''}`}>
                                    <h2>{toy.name}</h2>
                                </div>)
                            }
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Store;