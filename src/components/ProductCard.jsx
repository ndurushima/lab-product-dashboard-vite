import React from 'react';
import styles from '../styles/ProductCard.module.css';

const ProductCard = ({ product, onRemove }) => {
  const { name, price, inStock } = product;

  return (
    <div
      className={`product-card ${!inStock ? 'outOfStockClass' : ''}`}
      style={{
        border: inStock ? '2px solid green' : '4px solid red',
        padding: '10px',
        margin: '10px',
        borderRadius: '5px',
      }}
    >
      <h3>{name}</h3>
      <p>{price}</p>

      <p className="stock-status">
        {inStock ? 'In Stock' : 'Out of Stock'}
      </p>
    {!inStock && (
      <button onClick={() => onRemove(product.id)}>
        Remove
      </button>
  )}
    </div>
  );
};

export default ProductCard;
