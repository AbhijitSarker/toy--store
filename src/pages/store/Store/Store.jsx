import React, { useEffect, useState } from 'react';
import './Store.css'
import ToyCard from '../ToyCard/ToyCard';
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



    return (
        <div>
            <div className='grid grid-cols-3 gap-5 mx-auto container'>
                {
                    toys.map(toy => <ToyCard
                        toy={toy}
                        key={toy._id}
                    ></ToyCard>)
                }

            </div>
        </div>
    );
};

export default Store;