import React, { useEffect, useState } from 'react';
import './Store.css'
const Store = () => {

    const [state, setState] = useState(1);
    const action = (index) => {
        setState(index);
        console.log(index);
    }

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

    // console.log(categories)
    // console.log(subcategories)
    // console.log(toys)
    return (
        <div className='box'>

            {/* tabs */}
            <div className='tabs'>
                <div onClick={() => action(1)} className={`tab ${state === 1 ? 'active-tab' : ''}`}>
                    tab 1
                </div>

                <div onClick={() => action(2)} className={`tab ${state === 2 ? 'active-tab' : ''}`}>
                    tab2
                </div>

                <div onClick={() => action(3)} className={`tab ${state === 3 ? 'active-tab' : ''}`}>
                    tab 3
                </div>
            </div>

            {/* contents */}

            <div className="contents">
                <div className={`content ${state === 1 ? 'active-content' : ''}`}>
                    <h2>content 1</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis tenetur animi nesciunt exercitationem nisi! Nobis atque recusandae mollitia esse voluptatibus?</p>
                </div>

                <div className={`content ${state === 2 ? 'active-content' : ''}`}>
                    <h2>content 1</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis tenetur animi nesciunt exercitationem nisi! Nobis atque recusandae mollitia esse voluptatibus?</p>
                </div>

                <div className={`content ${state === 3 ? 'active-content' : ''}`}>
                    <h2>content 1</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis tenetur animi nesciunt exercitationem nisi! Nobis atque recusandae mollitia esse voluptatibus?</p>
                </div>
            </div>


        </div>
    );
};

export default Store;