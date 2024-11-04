import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function ProductList() {
    const { category } = useParams(); // Get the category from the URL
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch(`https://fakestoreapi.com/products/category/${category}`);
                const data = await response.json();
                setProducts(data);
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        };

        fetchProducts();
    }, [category]); // Fetch products when the category changes

    return (
        <div>
            <h2>{category.charAt(0).toUpperCase() + category.slice(1)} Products</h2>
            <div className="product-list">
                {products.map((product) => (
                    <div key={product.id} className="product-card">
                        <img src={product.image} alt={product.title} />
                        <h3>{product.title}</h3>
                        <p>Price: ${product.price}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ProductList;
