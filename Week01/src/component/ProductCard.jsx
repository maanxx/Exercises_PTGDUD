import "./ProductCard.css";
import laptop from "../assets/images/laptop.png";
function ProductCard() {
  return (
    <div className="product-card">
      
      <img src={laptop} className="product-image" />
      <h3 className="product-name">Laptop Lenovo Legion 5</h3>
      <p className="product-price">Price: 25.000.000 đ</p>
      <button className="add-btn">Add to cart</button>
    </div>
  );
}

export default ProductCard;
