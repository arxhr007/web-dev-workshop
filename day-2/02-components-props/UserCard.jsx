// ⚛️ EXAMPLE 2: User Card with Multiple Props
function UserCard({ name, age, city, avatar }) {
  return (
    <div>
      <img src={avatar} alt={name} width="100" />
      <h3>{name}</h3>
      <p>Age: {age}</p>
      <p>City: {city}</p>
    </div>
  );
}

export default UserCard;

// Usage:
// <UserCard 
//   name="John Doe" 
//   age={25} 
//   city="New York"
//   avatar="https://i.pravatar.cc/100?img=1"
// />
