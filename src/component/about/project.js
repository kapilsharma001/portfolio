// src/ProductCard.js
import React from 'react';
import '../navbar/navbar.css';
import thumbnail from '../../static/images (1).jfif';


const ProductCard = () => {
    return (
        <div className='product'>
            <div className="product-card">
                <img src={thumbnail} alt="portfolio" className="product-image" />
                <h2 className="product-title">Portfolio</h2>
                <p className="product-text">Portfolio</p>
                <button className="add-to-cart" onClick={() => window.location.href = "/"}>View More</button>
            </div>
            <div className="product-card">
                <img src={thumbnail} alt="todolist" className="product-image" />
                <h2 className="product-title">Todo List</h2>
                <p className="product-text">Todo List</p>
                <button className="add-to-cart" onClick={() => window.location.href = "/todo-list"}>View More</button>
            </div>
        </div>
    );
};

export default ProductCard;
