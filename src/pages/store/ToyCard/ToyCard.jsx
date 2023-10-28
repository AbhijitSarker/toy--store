import React from 'react';

const ToyCard = ({ toy }) => {
    return (
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
                src={"https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
                alt={toy.name}
                className="w-full h-40 object-cover"
            />
            <div className="p-4">
                <h2 className="text-xl font-semibold">{toy.name}</h2>
                <p className="text-gray-600">{toy.description}</p>
                <p className="text-gray-700 mt-2">${toy.price}</p>
                <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">
                    Add to Cart
                </button>
            </div>
        </div>
    );
};

export default ToyCard;
