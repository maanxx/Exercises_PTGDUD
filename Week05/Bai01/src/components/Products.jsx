import React from 'react';
import { Link } from 'react-router-dom';

const products = [
  { id: 1, name: 'Iphone' },
  { id: 2, name: 'Samsung' },
  { id: 3, name: 'Laptop' }
];

const Products = () => {
  return (
    <div>
      <h1>Products</h1>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <Link to={`/products/${product.id}`}>{product.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;

