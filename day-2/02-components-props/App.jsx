// ⚛️ EXAMPLE 4: Complete App with Multiple Components
import UserCard from './UserCard';
import Product from './Product';

function App() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>My Store</h1>
      
      {/* User Section */}
      <h2>Users</h2>
      <UserCard 
        name="John Doe" 
        age={25} 
        city="New York"
        avatar="https://i.pravatar.cc/100?img=1"
      />
      <UserCard 
        name="Jane Smith" 
        age={28} 
        city="Los Angeles"
        avatar="https://i.pravatar.cc/100?img=2"
      />
      
      {/* Product Section */}
      <h2>Products</h2>
      <Product 
        name="Laptop" 
        price={999} 
        inStock={true}
        image="https://via.placeholder.com/150/0000FF/FFFFFF?text=Laptop"
      />
      <Product 
        name="Mouse" 
        price={25} 
        inStock={false}
        image="https://via.placeholder.com/150/FF0000/FFFFFF?text=Mouse"
      />
    </div>
  );
}

export default App;
