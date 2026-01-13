// ⚛️ COMPLETE APP: All Examples Together
import Counter from './Counter';
import NameInput from './NameInput';
import ToggleButton from './ToggleButton';
import UserForm from './UserForm';
import LikeButton from './LikeButton';

function App() {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>🎯 State & Events Examples</h1>
      
      <hr style={{ margin: '20px 0' }} />
      <Counter />
      
      <hr style={{ margin: '20px 0' }} />
      <NameInput />
      
      <hr style={{ margin: '20px 0' }} />
      <ToggleButton />
      
      <hr style={{ margin: '20px 0' }} />
      <UserForm />
      
      <hr style={{ margin: '20px 0' }} />
      <LikeButton />
    </div>
  );
}

export default App;
