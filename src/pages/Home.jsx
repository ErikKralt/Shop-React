import ProductCard from '../components/ProductCard.jsx';
import { getProducts } from '../data/products.js';
import { Link } from 'react-router-dom';

export default function Homepage() {
  
  const products = getProducts();

  return (
    <div className="page">
      <div className="home-hero">
        <h1 className="home-title">Welcome to Shophub</h1>
        <p className="home-subtitle">Your one-stop shop for all your needs</p>
      </div>
      <div className="container">
        <h2 className="page-title">Our products</h2>
        <div className="product-grid">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>  
      </div>
    </div>
  )
}