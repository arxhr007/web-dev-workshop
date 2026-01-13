// ⚛️ EXAMPLE 3: Product Component with Conditional Rendering
function Product({ name, price, inStock, image }) {
  return (
    <div>
      <img src={image} alt={name} width="150" />
      <h4>{name}</h4>
      <p style={{ fontSize: '20px', fontWeight: 'bold' }}>
        ${price}
      </p>
      <p>
        {inStock ? "✅ Available" : "❌ Out of stock"}
      </p>
    </div>
  );
}

export default Product;

// Usage:
// <Product 
//   name="Laptop" 
//   price={999} 
//   inStock={true}
//   image="https://via.placeholder.com/150"
// />
