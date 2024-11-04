import React from 'react';
import { Link } from 'react-router-dom';
import '../style/task.css';
function Products() {
    return (
        <div>
            <h2>Categories</h2>
            <Link className='pro' to="/products/Men's Clothing">Men's Clothing</Link><br />
            <Link className='pro' to="/products/jewelery">Jewelery</Link><br />
            <Link className='pro' to="/products/electronics">Electronics</Link><br />
            <Link className='pro' to="/products/Women's Clothing">Women's Clothing</Link> <br />
        </div>
    );
}

export default Products;
